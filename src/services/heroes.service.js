import Async from 'react-promise'

const HEROES = [
    { id: 11, name: "Mr. Nice" },
    { id: 12, name: "Narco" },
    { id: 13, name: "Bombasto" },
    { id: 14, name: "Celeritas" },
    { id: 15, name: "Magneta" },
    { id: 16, name: "RubberMan" },
    { id: 17, name: "Dynama" },
    { id: 18, name: "Dr IQ" },
    { id: 19, name: "Magma" },
    { id: 20, name: "Tornado" }
  ];
  
  const getHeroes = new Promise((resolve, reject) => {
      resolve(HEROES);
    });
    
    const getHeroesSlowly = new Promise((resolve, reject) => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(HEROES), 2000);
    });
    
    const getHeroById = heroId =>
      new Promise((resolve, reject) => {
        resolve(HEROES.find(hero => hero.id === heroId));
      });
    
    export { getHeroes, getHeroesSlowly, getHeroById };
  