import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { ThemeContext } from './context/theme';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import Cursor from './components/Cursor';

const App = () => {

    const [{ theme }] = useContext(ThemeContext);

    return (
        <Router>
            <Cursor />
            <section style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <Routes>
                    <Route path='/' element={<Hero />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                
            </section>
        </Router>
    )
}

export default App;