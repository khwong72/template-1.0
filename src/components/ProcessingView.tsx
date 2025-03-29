import React from 'react';
import Image from 'next/image';

interface ProcessingViewProps {
  originalImage: string;
  style: string;
  progress?: number;
  className?: string;
}

export default function ProcessingView({ 
  originalImage, 
  style, 
  progress = 0,
  className = ""
}: ProcessingViewProps) {
  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      <div className="mb-6 w-full max-w-md mx-auto">
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image
            src={originalImage}
            alt="Original image"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center">
            <div className="w-16 h-16 relative animate-pulse mb-4">
              <Image
                src="/images/logo3.png"
                alt="StyleGen Logo"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-space-grotesk font-bold text-white mb-2">Processing Your Image</h3>
            <p className="text-sm text-gray-300 mb-4">
              Applying {style} style...
            </p>
            
            <div className="w-full max-w-xs bg-black/50 h-2 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-400 mt-2">
              {progress < 100 
                ? `${Math.round(progress)}% complete` 
                : 'Almost done...'
              }
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-sm text-center">
        <p className="text-sm text-gray-400">
          This may take up to 30 seconds depending on image complexity
        </p>
      </div>
    </div>
  );
} 