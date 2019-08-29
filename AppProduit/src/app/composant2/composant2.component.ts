import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Produit } from '../Model/produit';
import { ProduitsRepositoryService } from '../Service/produits-repository.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-composant2',
  templateUrl: './composant2.component.html',
  styleUrls: ['./composant2.component.css']
})
export class Composant2Component implements OnInit {

  isEditing = false;
  isValues = false;
  productsubscrib;
  nameProduct;
  _product: Produit

  private __product: Produit;
  @Input() set product(value: Produit) {
    this.__product = value;
    this.setProduct(this.__product);
  }
  get product() {
    return this.__product;
  }

  @Output() onSmit = new EventEmitter<boolean>();






  constructor(private _produitRepo: ProduitsRepositoryService, private _actRoute: ActivatedRoute) { }

  productID: number;

  ngOnInit() {
    this.productID = +this._actRoute.snapshot.paramMap.get('id');


    this.produitForm.valueChanges.subscribe((formValue) => {
      if (!this.isValues) {
        this.isEditing = true;
        this.onSmit.emit(this.isEditing);

      }
    });

  }




  produitForm = new FormGroup({
    id: new FormControl(''),
    nom: new FormControl(''),
    texture: new FormControl(''),
    grammage: new FormControl(''),
    couleur: new FormControl('')
  });




  onSubmit() {
    //console.log(this.playerForm.value);
    //this.player = new TennisPlayer(this.playerForm.value);
    this.product.setValue(this.produitForm.value);
    this.isEditing = false;
    this.onSmit.emit(this.isEditing);
  }

  onCancel() {
    this.setProduct(this.product);
    this.isEditing = false;
    this.onSmit.emit(this.isEditing);
  }


  setProduct(p: Produit) {
    if (p != null) {
      this.isValues = true;
      this.produitForm.setValue(p);
      this.isValues = false;
    }
  }

}









