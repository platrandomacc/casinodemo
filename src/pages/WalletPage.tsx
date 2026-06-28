import { useState } from 'react';
import { Copy, Wallet } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Tabs } from '../components/ui/Tabs';

const walletAssets = [
  { code: 'USDT', symbol: '₮', name: 'Tether', balance: '$524.20', change: '+2.1%' },
  { code: 'BTC', symbol: '₿', name: 'Bitcoin', balance: '0.018 BTC', change: '+1.8%' },
  { code: 'ETH', symbol: 'Ξ', name: 'Ethereum', balance: '0.24 ETH', change: '+1.4%' },
  { code: 'SOL', symbol: '◎', name: 'Solana', balance: '12.1 SOL', change: '+3.2%' },
  { code: 'LTC', symbol: 'Ł', name: 'Litecoin', balance: '3.05 LTC', change: '+0.9%' },
];

const recentTransactions = [
  { type: 'Deposit', amount: '+$320.00', currency: 'USDT', date: 'Jun 27', status: 'Completed' },
  { type: 'Win', amount: '+$1,200.00', currency: 'USD', date: 'Jun 26', status: 'Completed' },
  { type: 'Withdraw', amount: '-$180.00', currency: 'EUR', date: 'Jun 25', status: 'Pending' },
  { type: 'Loss', amount: '-$76.50', currency: 'USD', date: 'Jun 24', status: 'Completed' },
];

const cryptoWallets = [
  { code: 'BTC', symbol: '₿', name: 'Bitcoin', balance: '0.018 BTC', address: '3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5' },
  { code: 'ETH', symbol: 'Ξ', name: 'Ethereum', balance: '0.24 ETH', address: '0x6A1d87E7dF56A0B6F099f2BBf390Da879Fb5777A' },
  { code: 'USDT', symbol: '₮', name: 'Tether', balance: '$524.20', address: '0xF8D7b6F566bd25bF5F1B1A2c9F08A0A8CCa5F955' },
  { code: 'SOL', symbol: '◎', name: 'Solana', balance: '12.1 SOL', address: '2z8pRkkg1X7ytN5B9K9q9L9s6ErZGJhEVzJqn1c3M6XX' },
  { code: 'LTC', symbol: 'Ł', name: 'Litecoin', balance: '3.05 LTC', address: 'LWRfE5V6sTNzV8gJ6G6xWJtR5a3K1j9Yc3' },
];

export default function WalletPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
        <Card className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.32em] text-[#3B82F6]">Wallet</p>
            <h1 className="text-3xl font-semibold text-white">Crypto wallet dashboard</h1>
            <p className="text-sm text-[#8D95A8]">A premium wallet view for balances, deposits, withdrawals, and currency positions.</p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-[#111821]/90 p-5 shadow-[0_20px_40px_rgba(0,0,0,0.24)]">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#22C55E]/10 text-[#22C55E] shadow-[0_10px_30px_rgba(34,197,94,0.18)]">
                  <Wallet size={20} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-[#8D95A8]">Total balance</p>
                  <p className="mt-2 text-3xl font-semibold text-white">$12,846.60</p>
                </div>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Button className="min-h-[48px] w-full">Deposit</Button>
              <Button variant="secondary" className="min-h-[48px] w-full">Withdraw</Button>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-[#111821]/90 p-5">
            <p className="text-sm uppercase tracking-[0.32em] text-[#3B82F6]">Portfolio snapshot</p>
            <div className="mt-4 grid gap-3">
              {walletAssets.slice(0, 3).map((asset) => (
                <div key={asset.code} className="rounded-[20px] border border-white/5 bg-[#0D1116]/90 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-white/5 text-xl font-semibold text-[#22C55E]">
                        {asset.symbol}
                      </div>
                      <div>
                        <p className="text-sm text-[#8D95A8]">{asset.name}</p>
                        <p className="mt-2 text-lg font-semibold text-white">{asset.balance}</p>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] px-3 py-1 text-xs font-semibold text-white">{asset.code}</div>
                  </div>
                  <p className="mt-3 text-xs text-[#22C55E]">{asset.change} since yesterday</p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-[#3B82F6]">Wallet overview</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Real-time wallet insights</h2>
              </div>
              <Tabs
                tabs={[
                  { value: 'overview', label: 'Overview' },
                  { value: 'transactions', label: 'Transactions' },
                  { value: 'crypto', label: 'Crypto Wallets' },
                ]}
                value={activeTab}
                onChange={setActiveTab}
              />
            </div>

            {activeTab === 'overview' ? (
              <div className="space-y-6">
                <div className="rounded-[24px] border border-white/10 bg-[#0D1219]/90 p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-[#8D95A8]">Portfolio distribution</p>
                      <p className="mt-2 text-lg font-semibold text-white">Mock allocation by asset class</p>
                    </div>
                    <span className="rounded-full bg-[#0D1720] px-3 py-1.5 text-xs uppercase tracking-[0.3em] text-[#A0A8BC]">Live preview</span>
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_180px]">
                    <div className="h-44 rounded-[24px] bg-gradient-to-br from-[#0B1220] via-[#0F1728] to-[#0E131E]" />
                    <div className="space-y-3 rounded-[24px] border border-white/5 bg-[#0D1116]/90 p-4">
                      {walletAssets.map((asset) => (
                        <div key={asset.code} className="flex items-center justify-between gap-3 text-sm">
                          <div className="space-y-1">
                            <p className="font-semibold text-white">{asset.code}</p>
                            <p className="text-xs text-[#8D95A8]">{asset.name}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-white">{asset.balance}</p>
                            <p className="text-xs text-[#22C55E]">{asset.change}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-[#0D1116]/90 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-[#8D95A8]">Recent activity</p>
                      <h3 className="mt-2 text-xl font-semibold text-white">Latest wallet updates</h3>
                    </div>
                    <Button variant="secondary">View all</Button>
                  </div>
                  <div className="mt-4 space-y-3 text-sm text-[#B7BDCB]">
                    {recentTransactions.map((item) => (
                      <div key={`${item.type}-${item.date}`} className="flex items-center justify-between rounded-[20px] border border-white/5 bg-[#111821]/90 px-4 py-4 transition duration-200 ease-out hover:scale-[1.02] hover:bg-white/[0.04]">
                        <div>
                          <p className="font-semibold text-white">{item.type}</p>
                          <p className="text-xs text-[#8D95A8]">{item.date} • {item.currency}</p>
                        </div>
                        <div className="text-right">
                          <p className={`font-semibold ${item.status === 'Completed' ? 'text-[#22C55E]' : 'text-[#FBBF24]'}`}>{item.amount}</p>
                          <p className="text-xs uppercase tracking-[0.24em] text-[#8D95A8]">{item.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : activeTab === 'transactions' ? (
              <div className="rounded-[24px] border border-white/10 bg-[#0D1116]/90 p-5">
                <div className="overflow-x-auto">
                  <table className="min-w-full border-separate border-spacing-y-3 text-left text-sm">
                    <thead>
                      <tr className="text-[#8D95A8]">
                        <th className="px-4 py-3">Type</th>
                        <th className="px-4 py-3">Amount</th>
                        <th className="px-4 py-3">Currency</th>
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTransactions.map((item) => (
                        <tr key={`${item.type}-${item.date}`} className="rounded-[22px] bg-[#111821]/95 transition duration-200 ease-out hover:scale-[1.02] hover:bg-white/[0.04]">
                          <td className="px-4 py-4 font-medium text-white">{item.type}</td>
                          <td className="px-4 py-4 text-[#F7F7F8]">{item.amount}</td>
                          <td className="px-4 py-4 text-[#A0A8BC]">{item.currency}</td>
                          <td className="px-4 py-4 text-[#A0A8BC]">{item.date}</td>
                          <td className="px-4 py-4 text-sm font-semibold text-[#22C55E]">{item.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {cryptoWallets.map((wallet) => (
                  <div key={wallet.code} className="rounded-[24px] border border-white/10 bg-[#111821]/95 p-5 transition duration-200 ease-out hover:scale-[1.02] hover:bg-white/[0.04]">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/5 text-xl font-semibold text-[#22C55E]">
                          {wallet.symbol}
                        </div>
                        <div>
                          <p className="font-semibold text-white">{wallet.name}</p>
                          <p className="text-sm text-[#8D95A8]">{wallet.balance}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-[#A0A8BC]">
                        <span className="rounded-full bg-[#0D1720] px-3 py-1">{wallet.address.slice(0, 8)}…{wallet.address.slice(-6)}</span>
                        <button type="button" className="inline-flex items-center gap-2 rounded-full bg-[#171A22] px-3 py-2 text-xs font-medium text-white transition duration-200 ease-out hover:scale-[1.02] hover:bg-white/[0.04]">
                          <Copy size={14} /> Copy
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
