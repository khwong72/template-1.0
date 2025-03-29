import React, { useState } from 'react';
import Image from 'next/image';
import { Download, Share2, ChevronLeft, Copy } from 'lucide-react';

interface ResultViewProps {
  originalImage: string;
  resultImage: string;
  styleName: string;
  onReset: () => void;
  className?: string;
}

export default function ResultView({
  originalImage,
  resultImage,
  styleName,
  onReset,
  className = ""
}: ResultViewProps) {
  const [showOriginal, setShowOriginal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleDownload = () => {
    // Create a temporary link
    const link = document.createElement('a');
    link.href = resultImage;
    link.download = `stylegen-${styleName.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `StyleGen - ${styleName} Style`,
          text: `Check out my image in ${styleName} style created with StyleGen!`,
          url: resultImage
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback to copy link
      handleCopyLink();
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(resultImage).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="relative mb-8 w-full max-w-md mx-auto">
        <div 
          className="relative aspect-square rounded-lg overflow-hidden"
          onMouseEnter={() => setShowOriginal(true)}
          onMouseLeave={() => setShowOriginal(false)}
          onTouchStart={() => setShowOriginal(true)}
          onTouchEnd={() => setShowOriginal(false)}
        >
          {/* Result image */}
          <Image
            src={resultImage}
            alt="Processed image"
            fill
            className={`object-cover transition-opacity duration-300 ${
              showOriginal ? 'opacity-0' : 'opacity-100'
            }`}
            priority
          />
          
          {/* Original image (shown on hover) */}
          <Image
            src={originalImage}
            alt="Original image"
            fill
            className={`object-cover transition-opacity duration-300 ${
              showOriginal ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* Hover instruction overlay */}
          <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
            showOriginal ? 'opacity-0' : 'opacity-0 hover:opacity-100'
          }`}>
            <p className="text-white text-center p-4">
              Hover to see original image
            </p>
          </div>
        </div>
        
        {/* Result info label */}
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
          {styleName} Style
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
        >
          <Download size={18} />
          Download
        </button>
        
        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
        >
          <Share2 size={18} />
          Share
        </button>
        
        <button
          onClick={handleCopyLink}
          className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
        >
          <Copy size={18} />
          {copySuccess ? 'Copied!' : 'Copy Link'}
        </button>
      </div>
      
      {/* Try again link */}
      <div className="text-center">
        <button
          onClick={onReset}
          className="flex items-center gap-2 mx-auto text-gray-400 hover:text-white transition-colors"
        >
          <ChevronLeft size={18} />
          Create another
        </button>
      </div>
    </div>
  );
} 