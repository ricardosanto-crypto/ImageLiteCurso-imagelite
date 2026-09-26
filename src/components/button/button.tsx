import React from 'react';

interface ButtonProps {
    style?: string
    label?: string;
    onClick?: (event: any) => void;
    type?: "button" | "submit" | "reset" | undefined;
}
export const Button: React.FC<ButtonProps> = ({ style, label, onClick, type }: ButtonProps) => {
    return (
        <button className={`${style} text-white py-2 px-4 rounded-lg`} 
            onClick={onClick}
            type={type}>
            {label}
        </button>
    )
}