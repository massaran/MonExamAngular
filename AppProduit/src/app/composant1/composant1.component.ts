import { Component, OnInit } from '@angular/core';
import { Produit } from '../Model/produit';
import { ClassList } from './class-list';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { ProduitsRepositoryService } from '../Service/produits-repository.service';

@Component({
  selector: 'app-composant1',
  templateUrl: './composant1.component.html',
  styleUrls: ['./composant1.component.css']
})
export class Composant1Component implements OnInit {

  selectedProduit: Produit;

  public mesproduits = this._produitRepo.getProduits();

  isEditing1 = false;

  constructor(private _produitRepo: ProduitsRepositoryService) { }

  

  ngOnInit() {
  }
  public montableau = ClassList.mesproduits;


  selectProduit(produit: Produit) {
    if (!this.isEditing1) {
      this.selectedProduit = produit;
    }
  }

  isSelected(produit: Produit) {
    return produit == this.selectedProduit;

  }

  public changeEditionState(b) {
    this.isEditing1 = b;
  }

}