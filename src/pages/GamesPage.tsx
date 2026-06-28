import { Filter, Heart, Search, SlidersHorizontal, Star } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SectionHeading } from '../components/ui/SectionHeading';
import { categories, featuredgames, providers } from '../data/content';

export default function GamesPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeProvider, setActiveProvider] = useState('All');
  const [sortBy, setSortBy] = useState<'Popular' | 'RTP' | 'New'>('Popular');

  const filteredGames = useMemo(() => {
    const list = featuredgames.map((game) => ({ ...game, favorite: false }));
    const query = search.toLowerCase();
    return list
      .filter((game) => (activeCategory === 'All' ? true : game.category.includes(activeCategory)))
      .filter((game) => (activeProvider === 'All' ? true : game.provider === activeProvider))
      .filter((game) => game.title.toLowerCase().includes(query) || game.provider.toLowerCase().includes(query))
      .sort((a, b) => {
        if (sortBy === 'RTP') return Number(b.rtp.replace('%', '')) - Number(a.rtp.replace('%', ''));
        if (sortBy === 'New') return b.title.localeCompare(a.title);
        return 0;
      });
  }, [activeCategory, activeProvider, search, sortBy]);

  return (
    <div className="space-y-6">
      <Card className="border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[#3B82F6]">Lobby</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Curated games and tables</h1>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#171A22] px-3 py-2 text-sm text-[#8D95A8]">
            <Search size={16} />
            <input value={search} onChange={(event) => setSearch(event.target.value)} aria-label="Search games" placeholder="Search titles or providers" className="w-56 bg-transparent outline-none" />
          </div>
        </div>
      </Card>

      <div className="sticky top-20 z-40 rounded-[20px] border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#06070A]/80 p-4 ">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setActiveCategory('All')} className={`rounded-full px-3 py-2 text-sm ${activeCategory === 'All' ? 'bg-[#22C55E] text-[#090A0C]' : 'bg-[#171A22] text-[#8D95A8]'}`}>All</button>
            {categories.map((category) => (
              <button key={category} onClick={() => setActiveCategory(category)} className={`rounded-full px-3 py-2 text-sm ${activeCategory === category ? 'bg-[#22C55E] text-[#090A0C]' : 'bg-[#171A22] text-[#8D95A8]'}`}>{category}</button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <select aria-label="Sort results" value={sortBy} onChange={(event) => setSortBy(event.target.value as 'Popular' | 'RTP' | 'New')} className="rounded-full border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#171A22] px-3 py-2 text-sm text-[#F7F7F8] outline-none">
              <option value="Popular">Popular</option>
              <option value="RTP">Highest RTP</option>
              <option value="New">Newest</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-4 snap-x snap-mandatory scrolling-touch overflow-x-auto">
            {filteredGames.map((game) => (
              <Link key={game.title} to={'/games/' + game.title.toLowerCase().replace(/\s+/g, '-')} className="min-w-[44%] snap-center sm:min-w-[36%] overflow-hidden rounded-[12px] border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#12141B]">
                <div className="aspect-[4/5]">
                  <img src={game.image} alt={game.title} className="h-full w-full object-contain transition-transform duration-200 ease-out" style={{ willChange: 'transform, opacity' }} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredGames.map((game) => (
            <Card key={game.title}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#3B82F6]">{game.category}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{game.title}</h3>
                </div>
                <button aria-label={`Favorite ${game.title}`} className="rounded-full border border-transparent hover:border-sky-500/25 hover:border-emerald-500/40 bg-[#171A22] p-2 text-[#8D95A8] transition hover:text-[#3B82F6]">
                  <Heart size={15} />
                </button>
              </div>
              <div className="mt-4 aspect-[4/5] overflow-hidden rounded-[16px]">
                <img src={game.image} alt={game.title} className="h-full w-full object-cover transition-transform duration-200 ease-out" style={{ willChange: 'transform, opacity' }} />
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-[#8D95A8]">
                <span>{game.provider}</span>
                <div className="flex items-center gap-1 text-[#3B82F6]">
                  <Star size={14} fill="currentColor" />
                  <span>4.9</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[#8D95A8]">RTP</p>
                  <p className="text-sm font-medium text-[#16A34A]">{game.rtp}</p>
                </div>
                <Button variant="outline">Launch</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
