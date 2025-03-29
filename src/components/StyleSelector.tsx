import React, { useState } from 'react';
import Image from 'next/image';

export interface Style {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface StyleSelectorProps {
  onStyleSelect: (style: Style) => void;
  selectedStyleId: string | null;
  className?: string;
}

export default function StyleSelector({ 
  onStyleSelect, 
  selectedStyleId,
  className = "" 
}: StyleSelectorProps) {
  const styles: Style[] = [
    { 
      id: 'dali', 
      name: 'Salvador Dali', 
      image: '/images/Dali.png',
      description: 'Surrealist style with dreamlike qualities and unexpected juxtapositions'
    },
    { 
      id: 'disney', 
      name: 'Disney', 
      image: '/images/Disney.png',
      description: 'Colorful animated style with expressive characters and storybook aesthetic'
    },
    { 
      id: 'ghibli', 
      name: 'Studio Ghibli', 
      image: '/images/Ghibli.png',
      description: 'Anime-inspired with rich details, vibrant natural elements, and fantasy themes'
    },
    { 
      id: 'monochrome', 
      name: 'Monochrome', 
      image: '/images/Monochrome.png',
      description: 'Black and white dramatic style with high contrast and atmospheric mood'
    },
    { 
      id: 'renaissance', 
      name: 'Renaissance', 
      image: '/images/renaissance.png',
      description: 'Classical painting technique with realistic details, rich colors, and dramatic light'
    },
    { 
      id: '3d', 
      name: '3D Render', 
      image: '/images/3d.png',
      description: 'Photo-realistic 3D rendered style with modern lighting and textures'
    },
    { 
      id: 'custom', 
      name: 'Custom Style', 
      image: '/images/logo3.png',
      description: 'Create your own custom style with a detailed description'
    }
  ];

  const [customStyleText, setCustomStyleText] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handleStyleClick = (style: Style) => {
    if (style.id === 'custom') {
      setShowCustomInput(true);
    } else {
      onStyleSelect(style);
    }
  };

  const handleCustomStyleSubmit = () => {
    if (customStyleText.trim()) {
      onStyleSelect({
        id: 'custom',
        name: 'Custom Style',
        image: '/images/logo3.png',
        description: customStyleText
      });
      setShowCustomInput(false);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <h2 className="text-xl font-space-grotesk font-bold mb-4">Select a Style</h2>
      
      {showCustomInput ? (
        <div className="mb-6">
          <label htmlFor="custom-style" className="block text-sm mb-2">
            Describe your custom style in detail:
          </label>
          <textarea
            id="custom-style"
            value={customStyleText}
            onChange={(e) => setCustomStyleText(e.target.value)}
            className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 text-white focus:ring-2 focus:ring-white/25 focus:border-transparent transition"
            rows={4}
            placeholder="E.g., Cyberpunk style with neon lights, rainy city streets, and a futuristic atmosphere"
          />
          <div className="mt-2 flex gap-2">
            <button
              onClick={handleCustomStyleSubmit}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
              disabled={!customStyleText.trim()}
            >
              Apply Style
            </button>
            <button
              onClick={() => setShowCustomInput(false)}
              className="px-4 py-2 bg-black/40 hover:bg-black/60 rounded-lg transition"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {styles.map((style) => (
            <div
              key={style.id}
              className={`relative overflow-hidden rounded-lg cursor-pointer transition-all hover:scale-105 ${
                selectedStyleId === style.id ? 'ring-2 ring-white scale-105' : 'opacity-90 hover:opacity-100'
              }`}
              onClick={() => handleStyleClick(style)}
            >
              <div className="relative aspect-square">
                <Image
                  src={style.image}
                  alt={style.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="font-medium text-white">{style.name}</h3>
                {selectedStyleId === style.id && (
                  <p className="text-xs text-gray-300 mt-1">{style.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 