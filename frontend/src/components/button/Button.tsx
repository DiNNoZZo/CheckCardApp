import { IComponent } from '@/types/index.types';
import classNames from 'classnames';
import React, { FC } from 'react';

interface IButton extends IComponent, React.HTMLAttributes<HTMLDivElement> {
  bgColor?: string;
  textColor?: string;
  padding?: string;
  margin?: string;
  flex?: string;
}

const Button: FC<IButton> = ({
  children,
  margin = 'm-0',
  padding = 'py-1 px-6',
  bgColor = 'bg-neutral-300 hover:bg-slate-200 transition',
  textColor = 'text-gray-600',
  flex = '',
  className = '',
  ...rest
}) => {
  const buttonClass = classNames(
    'rounded-full w-fit hover:cursor-pointer flex items-center justify-center',
    bgColor,
    margin,
    padding,
    textColor,
    flex,
    className
  );
  return (
    <div className={buttonClass} {...rest}>
      {children}
    </div>
  );
};

export default Button;
