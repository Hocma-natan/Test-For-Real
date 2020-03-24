export class Comput {
  id: number;
  modele: string;
  marque: string;
  type: string;
  category: string;
  prixAchat: number;
  prixVente: number;
  dateAjout: Date;
  constructor(id?: number, modele?: string, marque?: string, type?: string, category?: string,
    prixAchat?: number, prixVente?: number, dateAjout?: Date){
    this.id = id;
    this.modele = modele;
    this.marque = marque;
    this.type = type;
    this.category = category;
    this.prixAchat = prixAchat;
    this.prixVente = prixVente;
    this.dateAjout = dateAjout;
  }
}
