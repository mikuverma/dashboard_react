import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DashboardMain  from './pages/dashboard.js';

export const Routes1 = () => {
    return(
        <Router>
            <Routes>
              
            <Route path="/" element={<DashboardMain  />} />
                <Route path="/dashboard" element={<DashboardMain  />} />
            
            </Routes>
        </Router>
    );
}