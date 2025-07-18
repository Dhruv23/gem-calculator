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
                    <Link to="/honor" className="nav-link">
                        Honor of Arena
                    </Link>
                    <p className="subtext">Track arena ticket + summon progress</p>
                    <Link to="/find" className="nav-link">Find a Hero</Link>
                    <p className="subtext">350 pet summons</p>

                    <Link to="/soul" className="nav-link">Soul Quests Carnival</Link>
                    <p className="subtext">1000 hero summons</p>

                    <Link to="/mimic" className="nav-link">Mimic Capture</Link>
                    <p className="subtext">400 hero summons</p>

                    <Link to="/boss" className="nav-link">Special Boss</Link>
                    <p className="subtext">400 hero summons</p>


                </div>
            </div>
        </div>
    );
}
