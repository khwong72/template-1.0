'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
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
      </header>
      
      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-4 text-gray-300">
          <p>
            This is a placeholder for the Privacy Policy page of StyleGen.
          </p>
          <p>
            In this example implementation, we've created a UI for an AI image generation service. 
            In a real implementation, this page would contain the full privacy policy text regarding image storage, user data, and usage analytics.
          </p>
        </div>
      </main>
    </div>
  );
} 