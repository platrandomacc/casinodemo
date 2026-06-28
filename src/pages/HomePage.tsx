import { ArrowRight, ChevronRight, Clock3, ShieldCheck, Sparkles, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SectionHeading } from '../components/ui/SectionHeading';
import { featuredgames, promotions, faqItems, leaderboards } from '../data/content';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-hidden rounded-[24px] border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[radial-gradient(circle_at_top_left,_rgba(216,162,76,0.2),_transparent_35%),linear-gradient(135deg,#171A22_0%,#12141B_60%,#0E1016_100%)] p-6 shadow-soft md:p-8"
        >
          <div className="flex items-center gap-2 text-sm text-[#3B82F6]">
            <Sparkles size={16} />
            New season launch
          </div>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            A refined front row to premium Gambling.
          </h1>
          <p className="mt-4 max-w-xl text-base text-[#B7BDCB] md:text-lg">
            Discover live tables, elevated slots, and sharp sports markets with a premium experience built for modern players.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button>Explore Games</Button>
            <Link to="/vip" className="inline-flex h-10 items-center justify-center rounded-2xl border border-transparent bg-[#171A22] px-4 text-sm font-medium text-white transition duration-200 ease-out hover:border-[#22C55E]/30 hover:bg-white/[0.04] hover:scale-[1.02]">
              View VIP
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-4 text-sm text-[#8D95A8]">
            <div className="rounded-full border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-white/[0.04] px-3 py-2">24/7 live dealers</div>
            <div className="rounded-full border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-white/[0.04] px-3 py-2">Rapid withdrawals</div>
            <div className="rounded-full border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-white/[0.04] px-3 py-2">Protected play tools</div>
          </div>
        </motion.div>

        <Card className="flex flex-col justify-between gap-6">
          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#3B82F6]">Featured drop</p>
              <span className="rounded-full bg-[#16A34A]/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-[#16A34A]">Hot</span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-white">Orion High Roller</h3>
            <p className="mt-2 text-sm text-[#B7BDCB]">A cinematic live experience with layered prizes, professional hosts, and seamless play.</p>
          </div>
          <div className="rounded-[18px] border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#171A22] p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#8D95A8]">Prize pool</p>
                <p className="mt-2 text-2xl font-semibold text-white">$82,400</p>
              </div>
              <div className="rounded-2xl border border-[#22C55E]/20 bg-[#22C55E]/10 p-3 text-[#3B82F6]">
                <Trophy size={20} />
              </div>
            </div>
            <div className="mt-4 h-2 rounded-full bg-white/10">
              <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-[#22C55E] to-[#16A34A]" />
            </div>
          </div>
        </Card>
      </section>

      <section>
        <SectionHeading title="Originals" subtitle="A curated mix of premium titles and live table energy" action={<Button variant="ghost" className="px-0">Browse all</Button>} />
        <div className="grid gap-4 md:grid-cols-3">
          {featuredgames.map((game, index) => (
            <motion.article key={game.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }} className="group overflow-hidden rounded-[20px] border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#12141B]">
              <div className={`relative aspect-[4/5] bg-gradient-to-br ${game.accent}`}>
                <img src={game.image} alt={game.title} className="h-full w-full object-cover object-center mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06070A] to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#06070A]/80 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[#3B82F6]">{game.category}</div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{game.title}</h3>
                    <p className="mt-1 text-sm text-[#8D95A8]">{game.provider}</p>
                  </div>
                  <div className="rounded-full border border-[#16A34A]/20 bg-[#16A34A]/10 px-3 py-1 text-sm font-medium text-[#16A34A]">{game.rtp}</div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-[#B7BDCB]">
                    <Clock3 size={14} />
                    8 min avg.
                  </div>
                  <button className="rounded-full border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-white/[0.04] px-3 py-2 text-sm text-[#F7F7F8] transition hover:border-[#22C55E]/25 hover:text-[#3B82F6]">Play</button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <SectionHeading title="Popular categories" subtitle="Speed and clarity for every type of player" />
          <div className="grid gap-3 sm:grid-cols-2">
            {['Live Casino', 'High Limit', 'Sportsbook', 'Instant Win'].map((item, index) => (
              <div key={item} className="rounded-[16px] border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#171A22] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#22C55E]/10 text-[#3B82F6]">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-white">{item}</p>
                    <p className="text-sm text-[#8D95A8]">{index === 0 ? 'Immersive hosts' : index === 1 ? 'Elevated stakes' : index === 2 ? 'Live odds' : 'Rapid rounds'}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <SectionHeading title="Recently played" subtitle="Pick up where you left off" />
          <div className="space-y-3">
            {['Aurora Vault', 'Golden Stakes', 'Vantage Poker'].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-[16px] border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#171A22] px-4 py-3">
                <div>
                  <p className="font-medium text-white">{item}</p>
                  <p className="text-sm text-[#8D95A8]">Last session 14 mins ago</p>
                </div>
                <Button variant="outline" className="px-3 py-2 text-xs">Resume</Button>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <Card>
          <SectionHeading title="Promotions" subtitle="Limited-time value added to your balance" action={<Button variant="ghost" className="px-0">All offers</Button>} />
          <div className="grid gap-4 md:grid-cols-3">
            {promotions.map((promotion) => (
              <div key={promotion.title} className="rounded-[16px] border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#171A22] p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-[#3B82F6]">{promotion.value}</p>
                  <ArrowRight size={16} className="text-[#8D95A8]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{promotion.title}</h3>
                <p className="mt-2 text-sm text-[#8D95A8]">{promotion.description}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <SectionHeading title="Leaderboard preview" subtitle="Weekly momentum and elite performance" />
          <div className="space-y-3">
            {leaderboards.map((entry, index) => (
              <div key={entry.name} className="flex items-center justify-between rounded-[16px] border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#171A22] px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#22C55E]/10 text-sm font-semibold text-[#3B82F6]">#{index + 1}</div>
                  <div>
                    <p className="font-medium text-white">{entry.name}</p>
                    <p className="text-sm text-[#8D95A8]">{entry.tier}</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-[#16A34A]">{entry.points.toLocaleString()} pts</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <SectionHeading title="Live performance" subtitle="Transparency at a glance" />
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: 'Avg. RTP', value: '96.9%' },
              { label: 'Active tables', value: '128' },
              { label: 'Secure payouts', value: '99.2%' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-[16px] border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#171A22] p-4 text-center">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-[#8D95A8]">{stat.label}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <SectionHeading title="Frequently asked questions" subtitle="Concise answers for a premium experience" />
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details key={item.question} className="rounded-[16px] border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#171A22] p-4">
                <summary className="cursor-pointer list-none text-sm font-medium text-white">{item.question}</summary>
                <p className="mt-3 text-sm leading-6 text-[#8D95A8]">{item.answer}</p>
              </details>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}
