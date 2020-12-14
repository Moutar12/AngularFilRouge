export class ProfilModel {
  constructor(id: number, libelle: string, statut: boolean) {
    this.id = id;
    this.libelle = libelle;
  }
  id: number;
  libelle: string;
}
