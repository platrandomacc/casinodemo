import { ReactNode, useEffect, useState } from 'react';
import { Bell, ChevronDown, Crown, Wallet } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Button } from '../ui/Button';

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Games', to: '/games' },
  { label: 'Sports', to: '/sports' },
  { label: 'Promotions', to: '/promotions' },
  { label: 'Leaderboards', to: '/leaderboards' },
  { label: 'VIP', to: '/vip' },
  { label: 'Wallet', to: '/wallet' },
];

export function Layout({ children }: LayoutProps) {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [walletOpen, setWalletOpen] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastScroll && current > 80);
      lastScroll = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  return (
    <div className="min-h-screen text-white">
      <header className={`sticky top-0 z-50 transition-transform duration-175 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 border-b border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#06070A]/80 px-4 py-4  xl:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#22C55E]/30 bg-[#22C55E]/10 text-[#3B82F6]">
              <Crown size={18} />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-[0.24em] text-white">FlipBet</p>
              <p className="text-xs uppercase tracking-[0.32em] text-[#8D95A8]">Casino</p>
            </div>
          </div>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm font-medium transition ${isActive ? 'bg-[#171A22] text-white' : 'text-[#A0A8BC] hover:bg-white/[0.04] hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen((state) => !state)}
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#12141B]/80 text-white transition hover:border-[#22C55E]/30"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              <ChevronDown size={20} className={`transition ${menuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button aria-label="Notifications" className="rounded-full border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#12141B]/80 p-2.5 text-[#B7BDCB] transition duration-175 ease-out hover:border-[#22C55E]/30 hover:text-[#3B82F6]">
              <Bell size={16} />
            </button>
            <div className="relative">
              <button
                type="button"
                onClick={() => setWalletOpen((state) => !state)}
                className="inline-flex items-center gap-2 rounded-full border border-[#22C55E]/20 bg-[#12141B]/95 px-4 py-2.5 text-sm text-white transition duration-175 ease-out hover:border-[#22C55E]/30 hover:bg-white/[0.04]"
                aria-expanded={walletOpen}
              >
                <Wallet size={16} className="text-[#22C55E]" />
                <div className="hidden items-center gap-2 sm:flex">
                  <span className="font-medium">$1,248.00</span>
                  <span className="text-[#A0A8BC]">USD</span>
                </div>
                <ChevronDown size={16} className={`transition duration-175 ease-out ${walletOpen ? 'rotate-180' : ''}`} />
              </button>

              {walletOpen ? (
                <div className="absolute right-0 top-full z-40 mt-3 w-[340px] overflow-hidden rounded-[24px] border border-[#22C55E]/15 bg-[#0B131B] shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                  <div className="border-b border-white/10 px-4 py-4">
                    <div className="flex items-center gap-3 text-[#A0A8BC]">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#22C55E]/10 text-[#22C55E]">
                        <Wallet size={18} />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.28em] text-[#8D95A8]">Wallet summary</p>
                        <p className="mt-1 text-lg font-semibold text-white">$1,248.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="max-h-72 overflow-y-auto px-3 py-3">
                    <ul className="space-y-3">
                      {[
                        { symbol: '₮', code: 'USDT', name: 'Tether', balance: '$524.20', color: 'bg-[#06B6D4]' },
                        { symbol: '₿', code: 'BTC', name: 'Bitcoin', balance: '0.018 BTC', color: 'bg-[#F59E0B]' },
                        { symbol: 'Ξ', code: 'ETH', name: 'Ethereum', balance: '0.24 ETH', color: 'bg-[#8B5CF6]' },
                        { symbol: '◎', code: 'SOL', name: 'Solana', balance: '12.1 SOL', color: 'bg-[#0EA5E9]' },
                        { symbol: 'Ł', code: 'LTC', name: 'Litecoin', balance: '3.05 LTC', color: 'bg-[#94A3B8]' },
                      ].map((currency) => (
                        <li key={currency.code}>
                          <button
                            type="button"
                            className="flex w-full items-center justify-between rounded-[18px] border border-transparent bg-[#111821] px-4 py-3 text-left text-sm text-white transition duration-175 ease-out hover:bg-white/[0.04] hover:scale-[1.01]"
                          >
                            <div className="flex items-center gap-3">
                              <span className={`flex h-9 w-9 items-center justify-center rounded-2xl ${currency.color} text-lg font-semibold text-white`}>
                                {currency.symbol}
                              </span>
                              <div className="space-y-1">
                                <p className="font-semibold text-white">{currency.code}</p>
                                <p className="text-xs text-[#8D95A8]">{currency.name}</p>
                              </div>
                            </div>
                            <span className="font-semibold text-white">{currency.balance}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null}
            </div>
            <Button variant="secondary" className="px-3 py-2">Login</Button>
            <Button className="px-3 py-2">Register</Button>
          </div>
        </div>
        {menuOpen ? (
          <div className="lg:hidden border-t border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#06070A]/95 px-4 py-4 ">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? 'bg-[#171A22] text-white' : 'text-[#A0A8BC] hover:bg-white/[0.04] hover:text-white'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        ) : null}
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-6 xl:px-8">{children}</main>

      <footer className="mx-auto mt-12 max-w-7xl border-t border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 px-4 py-10 text-sm text-[#8D95A8] xl:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-[0.24em] text-white">Flip Bet</p>
            <p className="mt-2 max-w-xl text-sm text-[#8D95A8]">Premium Gambling</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="/responsible-Gambling" className="transition hover:text-white">Responsible Gambling</a>
            <a href="/support" className="transition hover:text-white">Support</a>
            <a href="/promotions" className="transition hover:text-white">Promotions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
