import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

import Dashboard_main from './pages/dashboard.js';

export const Routes1 = () => {
    return(
        <Router>
            <Routes>
              
            <Route path="/" element={<Dashboard_main />} />
                <Route path="/dashboard" element={<Dashboard_main />} />
               
            </Routes>
        </Router>
    );
}