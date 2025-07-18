import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="app-container">
            <div className="card">
                <h1>Event Saving Calculator for SOULS</h1>
                <div className="nav-card">
                    <Link to="/winner" className="nav-link">
                        Winner Selection
                    </Link>
                    <p className="subtext">More events coming soon</p>
                </div>
            </div>
        </div>
    );
}
