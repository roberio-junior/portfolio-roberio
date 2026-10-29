
import { Route, Routes } from 'react-router';

import Header from './components/Header';
import ScrollManager from './components/ScrollManager';

import Home from './pages/Home';
import ProjectsCatalog from './pages/ProjectsCatalog';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projetos"
            element={<ProjectsCatalog />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
