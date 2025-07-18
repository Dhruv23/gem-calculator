import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import GemCalculator from './GemCalculator';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/winner" element={<GemCalculator />} />
            </Routes>
        </Router>
    );
}

export default App;
