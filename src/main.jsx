import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import Nav from './components/Nav';
import Home from './pages/Home';
import AboutPage from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Nav />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/aboutpage', element: <AboutPage /> },
            { path: '/skills', element: <Skills /> },
            { path: '/projects', element: <Projects /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
