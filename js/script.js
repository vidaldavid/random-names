const maleNames = ["Juan", "Pedro", "Carlos", "Diego", "Pablo", "David", "Sergio", "Manuel", "Nicolás", "Iván"];
const femaleNames = ["Maria", "Sofia", "Paula", "Ana", "Lucía", "Daniela", "Valeria", "Claudia", "Emma", "Sara"];
const surnames = ["Garcia", "Perez", "Martinez", "Rodriguez", "Rojas", "Donoso", "Medina", "Cárdenas", "Guzmán", "Romero"];

const generateMaleName = document.getElementById("generate-male-name");
const generateFemaleName = document.getElementById("generate-female-name");
const nameDisplay = document.getElementById("name");

generateMaleName.addEventListener("click", function() {
  const randomName1 = maleNames[Math.floor(Math.random() * maleNames.length)];
  const randomName2 = maleNames[Math.floor(Math.random() * maleNames.length)];
  const randomSurname1 = surnames[Math.floor(Math.random() * surnames.length)];
  const randomSurname2 = surnames[Math.floor(Math.random() * surnames.length)];
  nameDisplay.innerHTML = `${randomName1} ${randomName2} ${randomSurname1} ${randomSurname2}`;
});

generateFemaleName.addEventListener("click", function() {
  const randomName1 = femaleNames[Math.floor(Math.random() * femaleNames.length)];
  const randomName2 = femaleNames[Math.floor(Math.random() * femaleNames.length)];
  const randomSurname1 = surnames[Math.floor(Math.random() * surnames.length)];
  const randomSurname2 = surnames[Math.floor(Math.random() * surnames.length)];
  nameDisplay.innerHTML = `${randomName1} ${randomName2} ${randomSurname1} ${randomSurname2}`;
});
