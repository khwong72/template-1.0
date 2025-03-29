import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { UploadCloud, X } from "lucide-react";

interface ImageUploadProps {
  onImageChange: (file: File | null) => void;
  className?: string;
}

export default function ImageUpload({ onImageChange, className = "" }: ImageUploadProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): boolean => {
    // Check file type
    const validTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!validTypes.includes(file.type)) {
      setError("Please upload a valid image (PNG, JPG, or WEBP)");
      return false;
    }
    
    // Check file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    if (file.size > maxSize) {
      setError("Image must be less than 10MB");
      return false;
    }
    
    setError(null);
    return true;
  };

  const handleImageChange = (file: File) => {
    if (validateFile(file)) {
      onImageChange(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageChange(file);
    }
  };

  const removeImage = () => {
    onImageChange(null);
    setImagePreview(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Drag and drop handlers
  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleImageChange(files[0]);
    }
  }, []);

  // Check if we need a compact layout
  const isCompact = className.includes("max-h-");

  return (
    <div className={`w-full ${className}`}>
      {imagePreview ? (
        <div className="relative w-full h-full max-w-md mx-auto">
          <Image
            src={imagePreview}
            alt="Preview"
            fill
            className="rounded-lg object-contain"
          />
          <button
            type="button"
            onClick={removeImage}
            className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/90 transition-colors"
            aria-label="Remove image"
          >
            <X size={20} />
          </button>
        </div>
      ) : (
        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className={`w-full max-w-md mx-auto h-full border-2 border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all ${
            isDragging 
              ? "border-white bg-white/10 scale-105" 
              : "border-gray-400/40 hover:border-gray-400/60 hover:bg-white/5"
          }`}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <UploadCloud className={`${isCompact ? 'w-8 h-8 mb-2' : 'w-12 h-12 mb-4'} text-gray-400`} />
            <h3 className={`${isCompact ? 'text-lg' : 'text-xl'} font-bold mb-2`}>Upload Your Image</h3>
            <p className={`${isCompact ? 'text-xs mb-2' : 'text-sm mb-4'} text-gray-400`}>
              Drag & drop an image here, or click to select
            </p>
            <p className="text-xs text-gray-500">
              Supports PNG, JPG, WEBP (max 10MB)
            </p>
            {error && (
              <p className="mt-2 text-xs text-red-500 font-medium">{error}</p>
            )}
          </div>
        </div>
      )}
      <input
        type="file"
        id="image"
        accept="image/png,image/jpeg,image/webp"
        onChange={handleInputChange}
        className="hidden"
        ref={fileInputRef}
      />
    </div>
  );
}
