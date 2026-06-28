import { Trophy } from 'lucide-react';
import { Card } from '../components/ui/Card';

const data = [
  { name: 'Mina', tier: 'Diamond', points: 28450, streak: '12 wins' },
  { name: 'Rory', tier: 'Gold', points: 25210, streak: '9 wins' },
  { name: 'Kai', tier: 'Platinum', points: 21980, streak: '7 wins' },
  { name: 'Ava', tier: 'Silver', points: 19840, streak: '5 wins' },
];

export default function LeaderboardsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[#3B82F6]">Leaderboards</p>
            <h1 className="mt-3 text-3xl font-semibold text-white">A precise view of momentum and performance.</h1>
          </div>
          <div className="rounded-full border border-[#22C55E]/20 bg-[#22C55E]/10 px-4 py-2 text-sm text-[#3B82F6]">Updated every hour</div>
        </div>
      </Card>

      <div className="grid gap-4">
        {data.map((entry, index) => (
          <Card key={entry.name} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#22C55E]/10 text-lg font-semibold text-[#3B82F6]">#{index + 1}</div>
              <div>
                <p className="font-medium text-white">{entry.name}</p>
                <p className="text-sm text-[#8D95A8]">{entry.tier} • {entry.streak}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#171A22] px-3 py-2 text-sm text-[#B7BDCB]">{entry.points.toLocaleString()} pts</div>
              <Trophy size={18} className="text-[#3B82F6]" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
