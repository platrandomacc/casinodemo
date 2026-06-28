import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`rounded-[18px] border border-transparent bg-[#12141B]/95 p-5 shadow-soft ${hover ? 'transition duration-200 ease-out hover:scale-[1.02] hover:border-[#22C55E]/30 hover:shadow-[0_16px_40px_rgba(0,0,0,0.24)]' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
