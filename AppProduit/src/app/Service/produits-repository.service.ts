import { Injectable } from '@angular/core';
import { Produit } from '../Model/produit';
import { of, from, Observable } from 'rxjs';
import { debounceTime, tap, map, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitsRepositoryService {

  constructor() { }
  private montableau: Produit[] = [
    new Produit({ id: 1, nom: "Produitpaper", texture: "texture", grammage: "grammage1", couleur: "couleur" }),
    new Produit({ id: 2, nom: "ProduitcatA", texture: "Texture2", grammage: "grammage2", couleur: "rouge" }),
    new Produit({ id: 3, nom: "Produitjnaux", texture: "Texture3", grammage: "grammage3", couleur: "bleu" })

  ];

  public getProduits() {
    return this.montableau;
  }
}
