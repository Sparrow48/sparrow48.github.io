import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Experience from '../pages/Experience';

const Navigation = () => {
    return (
        <div><Routes>
            <Route exact path={'/'} element={<Home />} />
            <Route exact path={'/experience'} element={<Experience />} />
        </Routes></div>
    )
}

export default Navigation