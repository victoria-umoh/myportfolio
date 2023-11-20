import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './partials/Header';
import Footer from './partials/Footer';
const container = document.getElementById('root');
const root = createRoot(container);

root.render( 
    <>
        <Header />
        <Footer />
    </>
);

