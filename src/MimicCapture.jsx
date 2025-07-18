import { useState } from 'react';
export default function MimicCapture() {
    const [heroSummons, setHeroSummons] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const required = 400;
        const current = parseInt(heroSummons) || 0;
        const remaining = Math.max(required - current, 0);
        const batches = Math.ceil(remaining / 10);
        const gemCost = batches * 2700;

        setResult({ remaining, batches, gemCost });
    };

    return (
        <div className="app-container">
            <div className="card">
                <h1>Mimic Capture</h1>
                <form onSubmit={handleSubmit}>
                    <label>Hero Summons:
                        <input
                            type="number"
                            value={heroSummons}
                            onChange={(e) => setHeroSummons(e.target.value)}
                            placeholder="e.g. 300"
                            required />
                    </label>
                    <button type="submit">Calculate</button>
                </form>

                {result && (
                    <div className="result">
                        <p>Remaining Hero Summons: {result.remaining}</p>
                        <p>Batches Needed: {result.batches}</p>
                        <p>Total Gems Needed: {result.gemCost}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
