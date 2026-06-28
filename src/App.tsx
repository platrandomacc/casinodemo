import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Layout } from './components/layout/Layout';
import { PageTransition } from './components/ui/PageTransition';
import { LoadingScreen } from './components/ui/LoadingScreen';

const HomePage = lazy(() => import('./pages/HomePage'));
const GamesPage = lazy(() => import('./pages/GamesPage'));
const SportsPage = lazy(() => import('./pages/SportsPage'));
const PromotionsPage = lazy(() => import('./pages/PromotionsPage'));
const LeaderboardsPage = lazy(() => import('./pages/LeaderboardsPage'));
const VipPage = lazy(() => import('./pages/VipPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const WalletPage = lazy(() => import('./pages/WalletPage'));
const SupportPage = lazy(() => import('./pages/SupportPage'));
const ResponsibleGamblingPage = lazy(() => import('./pages/ResponsibleGamblingPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));


function App() {
  const location = useLocation();

  return (
    <Layout>
      <Suspense fallback={<LoadingScreen />}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <HomePage />
                </PageTransition>
              }
            />
            <Route path="/games" element={<PageTransition><GamesPage /></PageTransition>} />
            <Route path="/sports" element={<PageTransition><SportsPage /></PageTransition>} />
            <Route path="/promotions" element={<PageTransition><PromotionsPage /></PageTransition>} />
            <Route path="/leaderboards" element={<PageTransition><LeaderboardsPage /></PageTransition>} />
            <Route path="/vip" element={<PageTransition><VipPage /></PageTransition>} />
            <Route path="/profile" element={<PageTransition><ProfilePage /></PageTransition>} />
            <Route path="/wallet" element={<PageTransition><WalletPage /></PageTransition>} />
            <Route path="/support" element={<PageTransition><SupportPage /></PageTransition>} />
            <Route path="/responsible-gambling" element={<PageTransition><ResponsibleGamblingPage /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </Layout>
  );
}

export default App;
