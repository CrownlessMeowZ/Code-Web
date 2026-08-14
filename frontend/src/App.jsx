import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { useDivaAccent } from './hooks/useDivaAccent';
import Topbar from './components/Topbar';
import ErrorBoundary from './components/ErrorBoundary';

const Home = lazy(() => import('./pages/Home'));
const Characters = lazy(() => import('./pages/Characters'));
const SkinAndSong = lazy(() => import('./pages/SkinAndSong'));
const VersionAndGameplay = lazy(() => import('./pages/VersionAndGameplay'));
const GameHistory = lazy(() => import('./pages/GameHistory'));
const Producers = lazy(() => import('./pages/Producers'));
const Concerts = lazy(() => import('./pages/Concerts'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <InnerApp />
      </BrowserRouter>
    </AppProvider>
  );
}

// Wrapper thêm padding-top cho inner pages, class transition
function PageWrapper({ children, isHome }) {
  return (
    <div
      className={`page-transition${isHome ? '' : ' inner-page'}`}
      style={isHome ? {} : { paddingTop: 'var(--topbar-h)' }}
    >
      {children}
    </div>
  );
}

function InnerApp() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  useDivaAccent();

  useEffect(() => {
    document.body.classList.toggle('home-page', isHome);
    return () => document.body.classList.remove('home-page');
  }, [isHome]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <>
      <Topbar />
      <ErrorBoundary>
        <Suspense fallback={<div style={{ height: '100vh' }} />}>
          <Routes location={location}>
            <Route path="/" element={
              <PageWrapper isHome><Home /></PageWrapper>
            } />
            <Route path="/characters" element={
              <PageWrapper><Characters /></PageWrapper>
            } />
            <Route path="/skin-and-song" element={
              <PageWrapper><SkinAndSong /></PageWrapper>
            } />
            <Route path="/version-gameplay" element={
              <PageWrapper><VersionAndGameplay /></PageWrapper>
            } />
            <Route path="/game-history" element={
              <PageWrapper><GameHistory /></PageWrapper>
            } />
            <Route path="/producers" element={
              <PageWrapper><Producers /></PageWrapper>
            } />
            <Route path="/concerts" element={
              <PageWrapper><Concerts /></PageWrapper>
            } />
            <Route path="*" element={
              <PageWrapper><NotFound /></PageWrapper>
            } />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
