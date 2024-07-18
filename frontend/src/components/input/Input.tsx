import React, { FC, forwardRef } from 'react';
import { IComponent } from '@/types/index.types';

interface IInput extends IComponent, React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  error?: string;
  textColor?: string;
  type?: string;
}

const Input: FC<IInput> = forwardRef<HTMLInputElement, IInput>(
  (
    {
      error,
      className = '',
      label,
      textColor = 'text-text',
      type = 'text',
      ...rest
    },
    ref
  ) => {
    return (
      <label className={`flex flex-col ${textColor} ${className}`}>
        {label && <span>{label}</span>}
        <input
          type={type}
          ref={ref}
          {...rest}
          className={`px-2 border border-gray-300 rounded-md text-gray-600`}
        />
        {error && <span className="text-red-500">{error}</span>}
      </label>
    );
  }
);

Input.displayName = 'Input';

export default Input;
