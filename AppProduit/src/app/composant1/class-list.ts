import { Produit } from '../Model/produit';

export class ClassList {
    public static mesproduits: Produit[]= [
        new Produit( {id: 1, nom: "Produit1", texture: "Texture1", grammage:"grammage1", couleur:"jaune" }),
        new Produit( {id: 2, nom: "Produit2", texture: "Texture2", grammage:"grammage2", couleur:"rouge" }),
        new Produit( {id: 3, nom: "Produit3", texture: "Texture3", grammage:"grammage3", couleur:"bleu" }),
            
    ]
}
