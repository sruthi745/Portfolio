import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MobNavBar from './Component/MobNavBar';
import NavBar from './Component/NavBar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Certifications from './Pages/Certifications';

function App() {
    return (
        <div style={{ display: 'flex' }}>
            <BrowserRouter>
                <div className='pc-navbaar'>
                    <NavBar />
                </div>
                <div className='mob-navbaar'>
                    <MobNavBar />
                </div>
                <div className='home-right'>
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/certifications" element={<Certifications />} />
                                            
                </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
