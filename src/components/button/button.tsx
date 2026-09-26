import React from 'react';

interface ButtonProps {
    style?: string
    label?: string;
    onClick?: (event: any) => void;
}
export const Button: React.FC<ButtonProps> = ({ style, label, onClick }: ButtonProps) => {
    return (
        <button className={`${style} text-white py-2 px-4 rounded-lg`} 
            onClick={onClick}>
            {label}
        </button>
    )
}