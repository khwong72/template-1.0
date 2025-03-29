'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const exampleQuestions = [
    { text: 'Generate an image in Salvador Dali\'s surrealist style', image: '/images/Dali.png' },
    { text: 'Create a Disney-inspired animated character', image: '/images/Disney.png' },
    { text: 'Design an picture in an anime aesthetic', image: '/images/Ghibli.png' },
    { text: 'Produce a dramatic monochrome portrait', image: '/images/Monochrome.png' },
    { text: 'Illustrate a scene with Renaissance painting techniques', image: '/images/renaissance.png' },
    { text: 'Render a realistic 3D image', image: '/images/3d.png' },
  ];
  
  const [showHistory, setShowHistory] = useState(false);
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Search query:', searchQuery);
  };

  return (
    <div className="relative h-screen overflow-hidden">
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-4 w-4">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        
        <div className="h-full overflow-y-auto scrollbar-hide relative z-10">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-6 text-white pt-8">History</h2>
            <div className="space-y-6">
              <div className="mt-12">
                <div>
                  <div className="w-12 h-12 mx-auto mb-6 relative">
                    <Image 
                      src="/images/Logo.png" 
                      alt="Rabbithole" 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-2xl text-white mb-2 text-center">Sign in to StyleGen</h2>
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
                    By using Rabbithole, you agree to our <Link href="/terms" className="text-white/85">Terms of Service</Link> and <Link href="/privacy" className="text-white/85">Privacy Policy</Link>.
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
        <div className="flex-1"></div>
        <div className="flex-1 flex justify-end gap-4">
          <Link href="/pricing">
            <button className="px-6 py-2 rounded-full bg-[#1c1c1c] border-2 border-[var(--c-grayA3)] text-white hover:bg-[#2a2a2a] transition-colors">
              Pricing
            </button>
          </Link>
          <Link href="/signin">
            <button className="px-6 py-2 rounded-full bg-[#1c1c1c] border-2 border-[var(--c-grayA3)] text-white hover:bg-[#2a2a2a] transition-colors">
              Sign In
            </button>
          </Link>
        </div>
      </div>
      
      {/* Main search area */}
      <div className="relative ask-view flex justify-center items-center h-full opacity-100 translate-y-0 transition-all duration-700 ease-out pt-0 -mt-16">
        <div className="flex flex-col items-center">
          <div className="w-[50px] h-[50px] mb-8 relative">
            <Image 
              src="/images/Logo.png" 
              alt="Rabbit icon" 
              width={50} 
              height={50} 
              className="object-contain" 
            />
          </div>
          
          <div className="label-container text-center mb-4">
            <label htmlFor="question-input" className="text-2xl">Generate in your style</label>
          </div>
          
          <div className="input-container text-center">
            <form onSubmit={handleSearchSubmit}>
              <input 
                type="text" 
                id="question-input" 
                placeholder="Describe the image you want to generate..." 
                className="question-input bg-[#1c1c1c] shadow-none outline-none w-[500px] p-3 rounded-xl border-2 border-[var(--c-grayA3)]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoComplete="off"
              />
            </form>
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
                  src="/images/Logo.png" 
                  alt="Rabbit icon" 
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
                src="/images/Logo.png" 
                alt="Rabbit icon" 
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
