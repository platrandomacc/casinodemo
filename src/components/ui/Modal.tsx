import { ReactNode, useEffect } from 'react';

interface ModalProps {
  open: boolean;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  onClose: () => void;
}

export function Modal({ open, title, children, footer, onClose }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 px-4 py-8 -sm">
      <div className="w-full max-w-2xl rounded-[24px] border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#11141A]/95 p-6 shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[#3B82F6]">{title}</p>
          </div>
          <button onClick={onClose} className="rounded-full border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#171A22] p-2 text-[#B7BDCB] transition hover:bg-white/[0.08]">
            ✕
          </button>
        </div>
        <div className="mt-5 space-y-4">{children}</div>
        {footer ? <div className="mt-6 border-t border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 pt-4">{footer}</div> : null}
      </div>
    </div>
  );
}
