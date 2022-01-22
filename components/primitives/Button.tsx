import React from 'react';

export type ButtonProps = {
  onClick: () => void;
  text: string;
  icon: React.ReactNode;
}

const Button = ({ onClick, text, icon }: ButtonProps): JSX.Element => {
  const buttonClasses = `
    bg-gray ${icon ? 'px-0.5' : 'px-3'} py-0.5 text-lg elevated-border
    active:bg-gray-500 active:sunken-border
  `
  return (
    <button className={buttonClasses} onClick={onClick}>{text || icon}</button>
  )
}

export default Button;