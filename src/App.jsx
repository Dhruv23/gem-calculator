import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import HonorOfArena from './HonorOfArena';
import GemCalculator from './GemCalculator';
import FindAHero from './FindAHero';
import SoulQuests from './SoulQuests';
import MimicCapture from './MimicCapture';
import SpecialBoss from './SpecialBoss';

import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/winner" element={<GemCalculator />} />
                <Route path="/honor" element={<HonorOfArena />} />
                <Route path="/find" element={<FindAHero />} />
                <Route path="/soul" element={<SoulQuests />} />
                <Route path="/mimic" element={<MimicCapture />} />
                <Route path="/boss" element={<SpecialBoss />} />

            </Routes>
        </Router>
    );
}

export default App;
