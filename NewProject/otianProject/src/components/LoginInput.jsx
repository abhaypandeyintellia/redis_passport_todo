import React, { useState } from 'react';
import { Eye, EyeOff, MapPin, Smartphone } from 'lucide-react';

export const LoginInput = ({ 
  label, 
  type = "text", 
  placeholder, 
  value, 
  onChange,
  icon: Icon,
  showPasswordToggle = false,
  onTogglePassword,
  showPassword = false
}) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type={showPasswordToggle && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   transition-all duration-200 placeholder:text-gray-400
                   hover:border-gray-400"
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 
                     hover:text-gray-700 transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};
