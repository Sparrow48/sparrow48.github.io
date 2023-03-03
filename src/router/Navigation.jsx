import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Experience from '../pages/Experience';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';

const Navigation = () => {
    return (
        <div>
            <Routes>
                <Route exact path={'/'} element={<Home />} />
                <Route exact path={'/experience'} element={<Experience />} />
                <Route exact path={'/skills'} element={<Skills />} />
                <Route exact path={'/projects'} element={<Projects />} />
            </Routes>
        </div>
    )
}

export default Navigation