export class UerModel{
  // tslint:disable-next-line:max-line-length
  constructor(id: number, username: string, token: string, prenom: string, nom: string, email: string, photo: string, password: string, statut: boolean, type: string, adresse: string, telephone: number) {
    this.id = id;
    this.username = username;
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;
    this.photo = photo;
    this.password = password;
    this.statut = statut;
    this.type = type;
    this.adresse = adresse;
    this.telephone = telephone;
    this.token = token;
  }
  id: number;
  token: string;
  username: string;
  prenom: string;
  nom: string;
  email: string;
  photo: string;
  password: string;
  statut: boolean;
  type: string;
  adresse: string;
  telephone: number;
}
