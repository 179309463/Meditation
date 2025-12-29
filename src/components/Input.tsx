import React, { useState } from 'react';
import { CheckIcon, EyeIcon, EyeOffIcon } from 'lucide-react';
type InputProps = {
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  isValid?: boolean;
  showValidation?: boolean;
  className?: string;
};
export function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  isValid = false,
  showValidation = false,
  className = ''
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputType = type === 'password' && showPassword ? 'text' : type;
  return <div className={`relative ${className}`}>
      <input type={inputType} placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} className={`w-full py-4 px-4 pr-12 bg-[#F2F3F7] rounded-2xl text-[#3F414E] placeholder-[#A1A4B2] outline-none transition-all duration-200 ${isFocused ? 'ring-2 ring-[#8B7FE8] ring-opacity-50' : ''}`} />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
        {type === 'password' && <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-[#A1A4B2] hover:text-[#3F414E] transition-colors" aria-label={showPassword ? 'Hide password' : 'Show password'}>
            {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
          </button>}
        {showValidation && isValid && <div className="w-5 h-5 bg-[#8B7FE8] rounded-full flex items-center justify-center">
            <CheckIcon className="w-3 h-3 text-white" />
          </div>}
      </div>
    </div>;
}