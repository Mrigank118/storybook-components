import React from 'react';

type BadgeProps = {
  text: string;
  variant?: 'primary' | 'success' | 'warning' | 'error';
};

const variantStyles = {
  primary: 'bg-blue-100 text-blue-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800',
};

export const Badge: React.FC<BadgeProps> = ({ text, variant = 'primary' }) => {
  return (
    <span
      className={`text-sm font-semibold px-3 py-1 rounded-full inline-block ${variantStyles[variant]}`}
    >
      {text}
    </span>
  );
};
