'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ImageUpload from '@/components/ImageUpload';
import StyleSelector, { Style } from '@/components/StyleSelector';
import ProcessingView from '@/components/ProcessingView';
import ResultView from '@/components/ResultView';
import { ArrowRight, X } from 'lucide-react';

// Define the steps in the process
type Step = 'upload' | 'style' | 'processing' | 'result';

export default function Home() {
  // State for the current step
  const [currentStep, setCurrentStep] = useState<Step>('upload');
  
  // State for the uploaded image
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  // State for the selected style
  const [selectedStyle, setSelectedStyle] = useState<Style | null>(null);
  
  // State for the processing progress
  const [processingProgress, setProcessingProgress] = useState(0);
  
  // State for the result image
  const [resultImage, setResultImage] = useState<string | null>(null);
  
  // State for sidebar visibility
  const [showHistory, setShowHistory] = useState(false);
  
  // Handle image upload
  const handleImageChange = (file: File | null) => {
    setUploadedImage(file);
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };
  
  // Handle style selection
  const handleStyleSelect = (style: Style) => {
    setSelectedStyle(style);
  };
  
  // Handle processing start
  const handleStartProcessing = () => {
    setCurrentStep('processing');
    
    // Simulate processing progress (in a real app, this would be updated from the API)
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setProcessingProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        // Simulate a delay for the final processing
        setTimeout(() => {
          // In a real app, this would be the URL returned from the API
          setResultImage(imagePreview);
          setCurrentStep('result');
        }, 1000);
      }
    }, 500);
  };
  
  // Handle reset flow
  const handleReset = () => {
    setUploadedImage(null);
    setImagePreview(null);
    setSelectedStyle(null);
    setResultImage(null);
    setProcessingProgress(0);
    setCurrentStep('upload');
  };
  
  // Style examples for the homepage
  const exampleQuestions = [
    { text: 'Generate an image in Salvador Dali\'s surrealist style', image: '/images/Dali.png' },
    { text: 'Create a Disney-inspired animated character', image: '/images/Disney.png' },
    { text: 'Design a picture in an anime aesthetic', image: '/images/Ghibli.png' },
    { text: 'Produce a dramatic monochrome portrait', image: '/images/Monochrome.png' },
    { text: 'Illustrate a scene with Renaissance painting techniques', image: '/images/renaissance.png' },
    { text: 'Render a realistic 3D image', image: '/images/3d.png' },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Header menu button */}
      <div className="fixed top-4 left-4 z-[100]">
        <button 
          className="p-3 bg-zinc-900/70 backdrop-blur-md hover:bg-white/10 rounded-full text-white transition-colors"
          aria-label="Open history"
          onClick={() => setShowHistory(!showHistory)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-4 w-4">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      {/* Sidebar history panel */}
      <div className={`fixed inset-y-0 left-0 w-[400px] bg-[#1c1c1c] transform transition-transform duration-300 ease-in-out z-[100] ${showHistory ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="absolute top-0 right-0 p-6 z-50">
          <button 
            className="p-3 hover:bg-white/10 rounded-full text-white transition-colors"
            onClick={() => setShowHistory(false)}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        
        <div className="h-full overflow-y-auto scrollbar-hide relative z-10">
          <div className="p-6">
            <h2 className="text-xl font-space-grotesk font-bold mb-6 text-white pt-8">History</h2>
            <div className="space-y-6">
              <div className="mt-12">
                <div>
                  <div className="w-12 h-12 mx-auto mb-6 relative">
                    <Image 
                      src="/images/logo3.png" 
                      alt="StyleGen" 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-2xl font-space-grotesk text-white mb-2 text-center">Sign in to StyleGen</h2>
                  <p className="text-white mb-6 text-center opacity-70">
                    Create and save your generated images, access premium styles, and build a personal gallery of your creative work.
                  </p>
                  <button className="w-full p-3 rounded-xl bg-white text-black hover:bg-gray-200 transition-colors disabled:opacity-50 flex items-center justify-center gap-3">
                    <Image 
                      src="/icons/google.png" 
                      alt="Google" 
                      width={20} 
                      height={20} 
                    />
                    Continue with Google
                  </button>
                  <p className="text-sm text-white/50 mt-4 text-center">
                    By using StyleGen, you agree to our <Link href="/terms" className="text-white/85">Terms of Service</Link> and <Link href="/privacy" className="text-white/85">Privacy Policy</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="absolute top-4 left-0 right-0 flex justify-between items-center px-4 z-[90]">
        <div className="flex-1"></div>
        <div className="flex-1 flex justify-center">
          <div className="relative h-10 w-10">
            <Image 
              src="/images/logo3.png" 
              alt="StyleGen" 
              fill
              className="object-contain" 
            />
          </div>
        </div>
        <div className="flex-1 flex justify-end gap-4">
          <Link href="/pricing">
            <button className="px-6 py-2 rounded-full bg-[#1c1c1c] border border-gray-700 text-white hover:bg-[#2a2a2a] transition-colors">
              Pricing
            </button>
          </Link>
          <Link href="/signin">
            <button className="px-6 py-2 rounded-full bg-[#1c1c1c] border border-gray-700 text-white hover:bg-[#2a2a2a] transition-colors">
              Sign In
            </button>
          </Link>
        </div>
      </div>
      
      {/* Main content area */}
      <div className="relative ask-view flex justify-center items-center h-full opacity-100 translate-y-0 transition-all duration-700 ease-out pt-16">
        {/* Step indicator */}
        <div className="flex flex-col items-center max-w-3xl w-full mx-auto">
          {currentStep === 'upload' && (
            <div className="text-center mb-6">
              <h1 className="text-2xl font-space-grotesk font-bold">Produce a picture in any style you want</h1>
            </div>
          )}
          
          {/* Steps pills, only shown if not on upload */}
          {currentStep !== 'upload' && (
            <div className="mb-6 flex justify-center">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white">
                  1
                </div>
                <div className={`w-10 h-1 ${
                  currentStep === 'style' || currentStep === 'processing' || currentStep === 'result' ? 'bg-green-500' : 'bg-gray-700'
                }`}></div>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  currentStep === 'style' ? 'bg-white text-black' : (
                    currentStep === 'processing' || currentStep === 'result' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white'
                  )
                }`}>
                  2
                </div>
                <div className={`w-10 h-1 ${
                  currentStep === 'processing' || currentStep === 'result' ? 'bg-green-500' : 'bg-gray-700'
                }`}></div>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  currentStep === 'processing' ? 'bg-white text-black' : (
                    currentStep === 'result' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white'
                  )
                }`}>
                  3
                </div>
                <div className={`w-10 h-1 ${
                  currentStep === 'result' ? 'bg-green-500' : 'bg-gray-700'
                }`}></div>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  currentStep === 'result' ? 'bg-white text-black' : 'bg-gray-700 text-white'
                }`}>
                  4
                </div>
              </div>
            </div>
          )}
          
          {/* Step titles for non-upload steps */}
          {currentStep !== 'upload' && (
            <div className="text-center mb-6">
              <h1 className="text-2xl font-space-grotesk font-bold">
                {currentStep === 'style' && 'Choose Your Style'}
                {currentStep === 'processing' && 'Processing Your Image'}
                {currentStep === 'result' && 'Your Styled Image'}
              </h1>
            </div>
          )}
          
          {/* Content container */}
          <div className={`${
            currentStep === 'upload' 
              ? 'bg-transparent w-full max-w-xl py-0' 
              : 'bg-[#1c1c1c] p-6 rounded-2xl border border-gray-800 w-full max-w-2xl'
          }`}>
            {/* Upload step */}
            {currentStep === 'upload' && (
              <div className="flex flex-col items-center">
                <div className="w-full max-w-xl">
                  <div className="bg-[#1c1c1c] border border-gray-800 rounded-xl overflow-hidden">
                    <div className="p-5">
                      <ImageUpload 
                        onImageChange={handleImageChange} 
                        className="max-h-[260px]"
                      />
                    </div>
                    
                    <div className="bg-black/30 p-4 flex justify-end border-t border-gray-800">
                      <button
                        onClick={() => setCurrentStep('style')}
                        disabled={!imagePreview}
                        className="px-5 py-2 bg-white text-black rounded-lg flex items-center gap-2 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:pointer-events-none text-sm"
                      >
                        Next <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Style selection step */}
            {currentStep === 'style' && (
              <div className="flex flex-col">
                <StyleSelector 
                  onStyleSelect={handleStyleSelect} 
                  selectedStyleId={selectedStyle?.id || null} 
                />
                
                <div className="mt-6 w-full flex justify-between">
                  <button
                    onClick={() => setCurrentStep('upload')}
                    className="px-5 py-2 bg-transparent border border-gray-700 text-white rounded-lg flex items-center gap-2 hover:bg-white/5 transition-colors"
                  >
                    Back
                  </button>
                  
                  <button
                    onClick={handleStartProcessing}
                    disabled={!selectedStyle}
                    className="px-5 py-2 bg-white text-black rounded-lg flex items-center gap-2 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Generate <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}
            
            {/* Processing step */}
            {currentStep === 'processing' && imagePreview && selectedStyle && (
              <ProcessingView 
                originalImage={imagePreview} 
                style={selectedStyle.name} 
                progress={processingProgress} 
              />
            )}
            
            {/* Result step */}
            {currentStep === 'result' && imagePreview && resultImage && selectedStyle && (
              <ResultView 
                originalImage={imagePreview}
                resultImage={resultImage}
                styleName={selectedStyle.name}
                onReset={handleReset}
              />
            )}
          </div>
        </div>
      </div>

      {/* Image stack at bottom */}
      <div className="fixed -bottom-16 left-1/2 -translate-x-1/2 flex justify-center z-[20] opacity-100 translate-y-0 transition-all duration-700 ease-out delay-300">
        {exampleQuestions.map((question, index) => {
          const randomRotation = (Math.random() * 14) - 7; // Random rotation between -7 and 7 degrees
          return (
            <div 
              key={index}
              className="relative w-[300px] h-[350px] -ml-20 first:ml-0 cursor-pointer group"
              style={{ 
                transform: `rotate(${randomRotation}deg)`,
                zIndex: index,
                transition: 'all 300ms ease',
                pointerEvents: 'none'
              }}
            >
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                <div className="bg-black/80 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-white/10">
                  {question.text}
                </div>
              </div>
              
              <div 
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{ 
                  transform: 'rotate(0deg)',
                  pointerEvents: 'auto',
                  zIndex: index
                }}
              ></div>
              
              <div className="relative w-full h-full">
                <Image 
                  src={question.image} 
                  alt={`Stack image ${index + 1}`}
                  fill
                  className="object-cover object-[center_top_-15px] rounded-2xl pointer-events-none"
                />
              </div>
              
              <div className="absolute bottom-2 right-2 w-6 h-6 z-10 pointer-events-none">
                <Image 
                  src="/images/logo3.png" 
                  alt="StyleGen" 
                  width={24} 
                  height={24}
                  className="object-contain" 
                />
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Hidden carousel for transitions */}
      <div className="fixed inset-0 z-20 flex items-center justify-center opacity-0 scale-75 blur-xl pointer-events-none transition-all duration-700">
        {exampleQuestions.map((question, index) => (
          <div 
            key={index}
            className={`w-[22vw] h-[26vw] opacity-0 overflow-hidden relative`}
            style={{ 
              position: 'absolute',
              zIndex: index === exampleQuestions.length - 1 ? 2 : 1
            }}
          >
            <Image 
              src={question.image} 
              alt="Carousel image" 
              fill
              className="object-cover object-[center_top_-15px]"
              priority={true}
            />
            <div className="absolute bottom-5 right-5 w-[50px] h-[50px] z-10">
              <Image 
                src="/images/logo3.png" 
                alt="StyleGen" 
                width={50} 
                height={50}
                className="object-contain" 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
