import { useState } from 'react';
import './App.css';

function App() {
  const [heroSummons, setHeroSummons] = useState('');
  const [petSummons, setPetSummons] = useState('');
  const [result, setResult] = useState(null);

  const calculateGemNeeds = (hero, pet) => {
    const HERO_SUMMONS_REQUIRED = 120;
    const PET_SUMMONS_REQUIRED = 350;
    const HERO_SUMMONS_COST_PER_10 = 2700;
    const PET_SUMMONS_COST_PER_10 = 1800;

    const remainingHero = Math.max(HERO_SUMMONS_REQUIRED - hero, 0);
    const remainingPet = Math.max(PET_SUMMONS_REQUIRED - pet, 0);

    const heroBatches = Math.ceil(remainingHero / 10);
    const petBatches = Math.ceil(remainingPet / 10);

    const heroCost = heroBatches * HERO_SUMMONS_COST_PER_10;
    const petCost = petBatches * PET_SUMMONS_COST_PER_10;

    return {
      remainingHero,
      remainingPet,
      heroBatches,
      petBatches,
      totalCost: heroCost + petCost
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hero = parseInt(heroSummons) || 0;
    const pet = parseInt(petSummons) || 0;
    setResult(calculateGemNeeds(hero, pet));
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1>Winner Selection Gem Calculator</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Hero Summons
            <input
              type="number"
              value={heroSummons}
              onChange={(e) => setHeroSummons(e.target.value)}
              placeholder="e.g. 45"
              required
            />
          </label>
          <label>
            Pet Summons
            <input
              type="number"
              value={petSummons}
              onChange={(e) => setPetSummons(e.target.value)}
              placeholder="e.g. 180"
              required
            />
          </label>
          <button type="submit">Calculate</button>
        </form>

        {result && (
          <div className="result">
            <h2>Results</h2>
            <p> Remaining Hero Summons: <strong>{result.remainingHero}</strong></p>
            <p> Remaining Pet Summons: <strong>{result.remainingPet}</strong></p>
            <p> Hero Batches Needed: <strong>{result.heroBatches}</strong></p>
            <p> Pet Batches Needed: <strong>{result.petBatches}</strong></p>
            <p>💎 Total Gems Needed: <strong>{result.totalCost.toLocaleString()}</strong></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
