'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Image
              src="/images/Logo.png"
              alt="Rabbithole"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-semibold text-xl">StyleGen</span>
        </Link>
        
        <div className="flex gap-4">
          <Link href="/signin">
            <button className="px-6 py-2 rounded-full bg-[#1c1c1c] border-2 border-[var(--c-grayA3)] text-white hover:bg-[#2a2a2a] transition-colors">
              Sign In
            </button>
          </Link>
        </div>
      </header>
      
      {/* Main content */}
      <main className="max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-16">Style Subscription Plans</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Free tier */}
          <div className="border-2 border-[var(--c-grayA3)] rounded-xl p-8 hover:bg-[#1c1c1c] transition-colors">
            <h2 className="text-2xl font-bold mb-4">Free</h2>
            <p className="text-4xl font-bold mb-8">$0<span className="text-xl font-normal text-gray-400">/month</span></p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1 flex-shrink-0">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>5 image generations per day</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1 flex-shrink-0">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Access to basic styles</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <span>No image history</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <span>Standard resolution only</span>
              </li>
            </ul>
            
            <Link href="/" className="block w-full">
              <button className="w-full py-3 px-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
                Get Started
              </button>
            </Link>
          </div>
          
          {/* Pro tier */}
          <div className="border-2 border-blue-500 rounded-xl p-8 bg-[#1c1c1c] relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full font-medium">
              Recommended
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Pro</h2>
            <p className="text-4xl font-bold mb-8">$9.99<span className="text-xl font-normal text-gray-400">/month</span></p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1 flex-shrink-0">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Unlimited image generations</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1 flex-shrink-0">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Access to all premium styles</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1 flex-shrink-0">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Priority access to new features</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1 flex-shrink-0">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Save and organize your images</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-1 flex-shrink-0">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>High-resolution downloads</span>
              </li>
            </ul>
            
            <Link href="/signin" className="block w-full">
              <button className="w-full py-3 px-4 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors">
                Subscribe Now
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 