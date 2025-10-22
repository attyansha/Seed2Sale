import React from 'react';

const seasonalProduce = [
  {
    id: 1,
    name: 'Mango',
    image: 'https://imgs.search.brave.com/UAk2Zmb0hJx-sWW_SWyfGROaJcsaZl7aFuDhnyNvPsI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/MzM0LzY0NC9zbWFs/bC9iZWF1dGlmdWwt/b3JnYW5pYy1iYWNr/Z3JvdW5kLW9mLWZy/ZXNobHktcGlja2Vk/LW1hbmdvLWNyZWF0/ZWQtd2l0aC1nZW5l/cmF0aXZlLWFpLXRl/Y2hub2xvZ3ktcGhv/dG8uanBn',
    info: 'Peak season: April to June. Popular varieties include Alphonso, Kesar, and Langra.'
  },
  {
    id: 2,
    name: 'Jackfruit',
    image: 'https://imgs.search.brave.com/nR92v4NaENgKFRtsH8e1TdI7MWKiD0jft-FPDpz6aOI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9paGVh/cnRmcnVpdGJveC5j/b20vY2RuL3Nob3Av/ZmlsZXMvR3JlZW5f/SmFja2ZydWl0XzQ4/MHgucG5nP3Y9MTcy/Nzk3NDk5OA',
    info: 'Best harvested during the monsoon months: June to September.'
  },
  {
    id: 3,
    name: 'Turmeric',
    image: 'https://imgs.search.brave.com/cxzwOfEnCWXlsdqlpo3NzLh78uOzvWudwzfHfbIFG50/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDYv/NDUzLzgxNy9zbWFs/bC9ib2xkLW1pbmlt/YWxpc3Qtc2hvdC1v/Zi1hLWdvbGRlbi10/dXJtZXJpYy1yb290/LWFuZC1wb3dkZXIt/aGVhbHRoLWJlbmVm/aXRzLW5vdGVkLW9u/LWEtc29saWQtdHVy/bWVyaWMteWVsbG93/LWJhY2tncm91bmQt/cGhvdG8uanBn',
    info: 'Harvested mostly in winter; key ingredient in Indian cuisine and medicines.'
  },
  {
    id: 4,
    name: 'Litchi',
    image: 'https://imgs.search.brave.com/a-Pb-2zF8rM7A_LqRgWKg9C7wfCPc9TBgbQKy5x84Vs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzQ2L0xp/dGNoaV9jaGluZW5z/aXNfZnJ1aXRzLkpQ/Ry81MTJweC1MaXRj/aGlfY2hpbmVuc2lz/X2ZydWl0cy5KUEc',
    info: 'Available mainly in May and June, especially from Bihar and UP regions.'
  },
  {
    id: 5,
    name: 'Coconut',
    image: 'https://imgs.search.brave.com/Qe8yWHAiSulDtB06sJHZMXPFq30AfR6IyVqgJhoBdjo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcw/NDUzNDQ1L3Bob3Rv/L2ZyZXNoLWNvY29u/dXQtd2F0ZXIuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVNt/YThKTzYxNWVXQV9l/bFlkUmIydXJTamdH/c0dpQWdVWWFYOTlm/LVRseWc9',
    info: 'Harvested year-round in coastal areas like Kerala and Tamil Nadu.'
  },
];


function Produce() {
  return (
    <div>
      <h2 className="mb-4">Seasonal Produce Guide</h2>
      <div className="row">
        {seasonalProduce.map((produce) => (
          <div className="col-md-4 mb-3" key={produce.id}>
            <div className="card shadow-sm">
              <img src={produce.image} alt={produce.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{produce.name}</h5>
                <p className="card-text">{produce.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default Produce;
