'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function SignIn() {
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
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-md w-full rounded-2xl bg-[#1c1c1c] p-8 border border-[var(--c-grayA3)]">
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-16 h-16 mb-6">
              <Image
                src="/images/Logo.png"
                alt="Rabbithole"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-center">Sign in to StyleGen</h1>
            <p className="text-gray-400 text-center mt-2">
              Create and save your generated images, access premium styles, and build a personal gallery of your creative work.
            </p>
          </div>
          
          <button className="w-full p-3 rounded-xl bg-white text-black hover:bg-gray-200 transition-colors disabled:opacity-50 flex items-center justify-center gap-3">
            <Image 
              src="/icons/google.png" 
              alt="Google" 
              width={20} 
              height={20} 
            />
            Continue with Google
          </button>
          
          <p className="text-sm text-white/50 mt-6 text-center">
            By using Rabbithole, you agree to our <Link href="/terms" className="text-white/85">Terms of Service</Link> and <Link href="/privacy" className="text-white/85">Privacy Policy</Link>.
          </p>
        </div>
      </main>
    </div>
  );
} 