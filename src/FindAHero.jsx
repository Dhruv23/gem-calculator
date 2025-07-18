import { useState } from 'react';
export default function FindAHero() {
    const [petSummons, setPetSummons] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const required = 350;
        const current = parseInt(petSummons) || 0;
        const remaining = Math.max(required - current, 0);
        const batches = Math.ceil(remaining / 10);
        const gemCost = batches * 1800;

        setResult({ remaining, batches, gemCost });
    };

    return (
        <div className="app-container">
            <div className="card">
                <h1>Find a Hero</h1>
                <form onSubmit={handleSubmit}>
                    <label>Pet Summons:
                        <input
                            type="number"
                            value={petSummons}
                            onChange={(e) => setPetSummons(e.target.value)}
                            placeholder="e.g. 120"
                            required />
                    </label>
                    <button type="submit">Calculate</button>
                </form>

                {result && (
                    <div className="result">
                        <p>Remaining Pet Summons: {result.remaining}</p>
                        <p>Batches Needed: {result.batches}</p>
                        <p>Total Gems Needed: {result.gemCost}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
