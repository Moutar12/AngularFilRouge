export class ProfilModel {
  constructor(id: number, libelle: string, archive: boolean) {
    this.id = id;
    this.libelle = libelle;
    this.archive = archive;
  }

  id: number;
  libelle: string;
  archive: boolean;
}
