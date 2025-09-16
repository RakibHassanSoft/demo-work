import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none 
                  bg-gray-800 text-white hover:bg-gray-700 shadow-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
