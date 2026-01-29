let nomeHeroi = "Gutz";
let experienciaHeroi = 7500;

const niveis = [
  {min: 0, max: 1000, nivel: "Ferro"},
  {min: 1001, max: 2000, nivel: "Bronze"},
  {min: 2001, max: 5000, nivel: "Prata"},
  {min: 5001, max: 7000, nivel: "Ouro"},
  {min: 7001, max: 8000, nivel: "Platina"},
  {min: 8001, max: 9000, nivel: "Ascendente"},
  {min: 9001, max: 10000, nivel: "Imortal"},
  {min: 10001, max: Infinity, nivel: "Radiante"}
]
let nivelHeroi = niveis.find(nivel => experienciaHeroi >= nivel.min && experienciaHeroi <= nivel.max).nivel;


console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
