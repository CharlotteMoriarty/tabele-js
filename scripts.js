var femaleNames = new Array('Asia', 'Kasia', 'Ola', 'Jola'),
    maleNames = new Array('Piotrek', 'Marek', 'Arek', 'Jarek'),
    newName = 'Marian',
    //newName = 'Piotrek',
    allNames = femaleNames.concat(maleNames);

console.log(femaleNames);
console.log(maleNames);
console.log(allNames);

if (allNames.indexOf(newName) === -1) {
  console.log(allNames.push(newName));
  console.log(allNames);
} else {
  console.log('imie już istnieje na liście');
}
