import { Crown, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export default function VipPage() {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[#3B82F6]">VIP</p>
            <h1 className="mt-3 text-3xl font-semibold text-white">Personalized service for players who expect more.</h1>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[#B7BDCB]">Access private offers, elevated limits, concierge support, and a more considered pace of play.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button>Request invitation</Button>
              <Button variant="secondary">View benefits</Button>
            </div>
          </div>
          <div className="rounded-[18px] border border-[#22C55E]/20 bg-[linear-gradient(135deg,rgba(216,162,76,0.16),rgba(98,197,153,0.12))] p-6">
            <div className="flex items-center gap-3 text-[#3B82F6]">
              <Crown size={18} />
              <span className="text-sm font-medium">Diamond tier</span>
            </div>
            <div className="mt-6 space-y-3 text-sm text-[#B7BDCB]">
              <div className="rounded-[14px] border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#12141B]/80 px-4 py-3">Priority withdrawals within 30 minutes</div>
              <div className="rounded-[14px] border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#12141B]/80 px-4 py-3">Dedicated host and seasonal perks</div>
              <div className="rounded-[14px] border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#12141B]/80 px-4 py-3">Custom limits and tailored rewards</div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        {['Private lounge', 'Higher limits', 'Dedicated support'].map((item) => (
          <Card key={item}>
            <div className="flex items-center gap-3 text-[#3B82F6]">
              <Sparkles size={16} />
              <p className="font-medium text-white">{item}</p>
            </div>
            <p className="mt-3 text-sm text-[#8D95A8]">Elevated access with thoughtful service and a more refined pace.</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
