export class Produit {
    public id=0;
    public nom='';
    public texture='';
    public grammage='';
    public couleur='';
    public prizeList: string[]=[];
    

    public constructor(data?)
    {
        if (data) {
            this.setValue(data);
        }
    }

    public setValue(data){
        if (data.hasOwnProperty('id')) this.id = data.id;
        if (data.hasOwnProperty('nom')) this.nom = data.nom;
        if (data.hasOwnProperty('texture')) this.texture = data.texture;
        if (data.hasOwnProperty('grammage')) this.grammage = data.grammage;
        if (data.hasOwnProperty('couleur')) this.couleur = data.couleur;
        if (data.hasOwnProperty('prizeList')) this.prizeList = data.prizeList;
    }

}
