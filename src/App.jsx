import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import MyWork from './pages/MyWork.jsx';

const PAGES = [
  { path: '/', Component: Home, id: 92, home: true, styles: 'home', title: 'Mangai Machen John – Software Engineer' },
  { path: '/about', Component: About, id: 59, styles: 'about', title: 'About – Mangai Machen John' },
  { path: '/contact', Component: Contact, id: 74, styles: 'contact', title: 'Contact – Mangai Machen John' },
  { path: '/my-work', Component: MyWork, id: 78, styles: 'my-work', title: 'My Work – Mangai Machen John' },
];

export default function App() {
  return (
    <Routes>
      {PAGES.map((page) => (
        <Route
          key={page.path}
          path={page.path}
          element={(
            // Keyed so every route mounts fresh, like the original full page loads.
            <Layout key={page.path} page={page}>
              <page.Component />
            </Layout>
          )}
        />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
