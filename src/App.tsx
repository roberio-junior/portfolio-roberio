
import { Route, Routes } from 'react-router';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollManager from './components/ScrollManager';

import Home from './pages/Home';
import ProjectsCatalog from './pages/ProjectsCatalog';
import ProjectDetails from './pages/ProjectDetails';
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

          <Route
            path="/projetos/:slug"
            element={<ProjectDetails />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
