import { useState } from 'react';

export default function HonorOfArena() {
    const ARENA_TIX_REQUIRED = 200;
    const HERO_SUMMONS_REQUIRED = 400;
    const ARENA_TIX_PER_PURCHASE = 7;
    const MAX_PURCHASES_PER_DAY = 2;
    const GEMS_PER_PURCHASE = 300;

    const [heroSummons, setHeroSummons] = useState('');
    const [arenaTix, setArenaTix] = useState('');
    const [result, setResult] = useState(null);

    const calculate = () => {
        const hero = parseInt(heroSummons) || 0;
        const tix = parseInt(arenaTix) || 0;

        const heroRemaining = Math.max(HERO_SUMMONS_REQUIRED - hero, 0);
        const tixRemaining = Math.max(ARENA_TIX_REQUIRED - tix, 0);
        const purchasesNeeded = Math.ceil(tixRemaining / ARENA_TIX_PER_PURCHASE);
        const daysNeeded = Math.ceil(purchasesNeeded / MAX_PURCHASES_PER_DAY);
        const gemCost = purchasesNeeded * GEMS_PER_PURCHASE;

        setResult({
            heroRemaining,
            tixRemaining,
            purchasesNeeded,
            daysNeeded,
            gemCost,
        });
    };

    return (
        <div className="card">
            <h1>Honor of Arena</h1>
            <label>
                Hero Summons:
                <input
                    type="number"
                    value={heroSummons}
                    onChange={(e) => setHeroSummons(e.target.value)}
                />
            </label>
            <label>
                Arena Tickets:
                <input
                    type="number"
                    value={arenaTix}
                    onChange={(e) => setArenaTix(e.target.value)}
                />
            </label>
            <button onClick={calculate}>Calculate</button>

            {result && (
                <div className="result">
                    <p>🧝‍♂️ Remaining Hero Summons: <strong>{result.heroRemaining}</strong></p>
                    <p>🎟️ Remaining Arena Tickets: <strong>{result.tixRemaining}</strong></p>
                    <p>🛒 Purchases Needed: <strong>{result.purchasesNeeded}</strong></p>
                    <p>📆 Days Needed (max 2 per day): <strong>{result.daysNeeded}</strong></p>
                    <p>💎 Total Gem Cost: <strong>{result.gemCost}</strong></p>
                </div>
            )}
        </div>
    );
}
