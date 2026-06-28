import { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-gradient-to-r from-[#22C55E] via-[#3B82F6] to-[#22C55E] text-[#08090D] shadow-[0_10px_30px_rgba(34,197,94,0.24)] hover:scale-[1.02]',
  secondary: 'bg-[#171A22] text-white border border-[#22C55E]/20 hover:border-[#22C55E]/30 hover:bg-white/[0.04] hover:scale-[1.02]',
  ghost: 'bg-transparent text-[#F7F7F8] hover:bg-white/[0.04] hover:scale-[1.02]',
  outline: 'border border-[#22C55E]/30 text-[#3B82F6] bg-transparent hover:bg-[#22C55E]/10 hover:scale-[1.02]',
};

export function Button({ children, variant = 'primary', fullWidth = false, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
