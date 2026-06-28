import { ArrowRight, Goal, Trophy } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SectionHeading } from '../components/ui/SectionHeading';

export default function SportsPage() {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[#3B82F6]">Sportsbook</p>
            <h1 className="mt-3 text-3xl font-semibold text-white">Live lines, refined markets, and sharp odds.</h1>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[#B7BDCB]">Follow major events with structured markets, elegant odds displays, and live updates without the clutter.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button>Open Markets</Button>
              <Button variant="secondary">View Guides</Button>
            </div>
          </div>
          <div className="rounded-[18px] border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#171A22] p-5">
            <div className="flex items-center gap-3 text-[#3B82F6]">
              <Trophy size={18} />
              <p className="text-sm font-medium">Tonight’s top fixtures</p>
            </div>
            <div className="mt-4 space-y-3">
              {['Luna FC vs. North Elite', 'Harbor City vs. Meridian', 'Apex Tigers vs. Silverline'].map((match) => (
                <div key={match} className="flex items-center justify-between rounded-[14px] border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#12141B] px-4 py-3 text-sm text-[#B7BDCB]">
                  <span>{match}</span>
                  <ArrowRight size={16} className="text-[#16A34A]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <SectionHeading title="Popular markets" subtitle="Fast access to the most followed contests" />
          <div className="grid gap-3">
            {['Premier League', 'NBA', 'UFC', 'Tennis'].map((market) => (
              <div key={market} className="flex items-center justify-between rounded-[16px] border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#171A22] px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#22C55E]/10 p-2 text-[#3B82F6]">
                    <Goal size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-white">{market}</p>
                    <p className="text-sm text-[#8D95A8]">Live odds refreshed every 20 seconds</p>
                  </div>
                </div>
                <Button variant="outline" className="px-3 py-2 text-xs">Open</Button>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <SectionHeading title="Smart slips" subtitle="A cleaner path to placing bets" />
          <div className="rounded-[18px] border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#171A22] p-5">
            <div className="flex items-center justify-between text-sm text-[#8D95A8]">
              <span>Selection</span>
              <span>Potential return</span>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between rounded-[14px] border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#12141B] px-4 py-3">
                <span className="text-white">Luna FC double chance</span>
                <span className="text-[#16A34A]">+12.4%</span>
              </div>
              <div className="flex items-center justify-between rounded-[14px] border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#12141B] px-4 py-3">
                <span className="text-white">Harbor City over 2.5</span>
                <span className="text-[#16A34A]">+8.9%</span>
              </div>
            </div>
            <Button className="mt-5 w-full">Review slip</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
