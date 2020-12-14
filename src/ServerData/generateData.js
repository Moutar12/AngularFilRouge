var faker = require('faker');

var dbase = { User: []};
var profils = ["ADMIN","FORMATEUR","APPRENANT","CM"]

for (var i = 1; i<= 4; i++) {
  dbase.User.push({
    id: i,
    prenom: faker.name.firstName(),
    nom: faker.name.lastName(),
    username: faker.internet.userName(),
    password: faker.internet.password(123),
    email: faker.internet.email(),
    photo:"https://source.unsplash.com/1600x900/?User",
    role:"ROLE_"+profils[i-1]

  });
}

console.log(JSON.stringify(dbase));
