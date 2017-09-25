/*
membuat class yang berisi tentang proses produksi pohon buah-buhan
*/
"use strict"

// Release 2
//class FruitTree merupakan class parent yang berisi beberapa method
class FruitTree {
  constructor() {
    // super();
    this._umur=0;
    this._tinggi=0;
    this._tamb_tinggi=1;
    this._max_produce=10;
    this._jml_buah=0;
    this._kump_buah=[];
    this._buah_petik=0;
    this._status=true;
    this._max_usia=30;
    this._max_tumbuh=(0.5*this._max_usia);
    this._harvested='';

  }
  getAge() {
    return this._umur;
  }
  getHeight() {
    return this._tinggi;
  }
  getFruits() {
    return this._kump_buah;
  }
  getHealtyStatus() {
    return this._status;
  }

  // Get current states here
  // Grow the tree
  grow() {
    this._umur+=1;
    if (this._umur!==this._max_tumbuh) {
      //this._tinggi+=Math.round(Math.random()*this._tamb_tinggi);
      // this._tinggi+=Math.round(Math.random()*this._tamb_tinggi);
      this._tinggi+=Math.random()*this._tamb_tinggi;
      // this._tinggi=this._tinggi.toFixed(2);
      // this._tinggi+=Math.round(Math.random());
    }
    if (this.getAge()==this._max_usia) { //akan mati jika batas usia mencapai maksimal
      this._status=false;
    } else {
      this._jml_buah=Math.round(Math.random()*this._max_produce);
    }
  }

  // Get some fruits
  harvest() {
    let c_good=0;
    let c_bad=0;
    for (var i = 0; i < this._kump_buah.length; i++) {
      if (this._kump_buah[i].quality==='good'){
        c_good++;
      } else {
        c_bad++;
      }
    }
    this._harvested=this._kump_buah.length+'('+c_good+', good, '+c_bad+' bad!)';
  }
}
//class fruits merupakan class yg digunakan untuk menentukan jenis buah
class Fruit {
  // Produce a mango
  constructor() {
    this.arr_quality=['bad','good'];
    this.quality=this.arr_quality[Math.floor(Math.random()*2)];
  }
}
console.log('=============== Tanaman Manggo ===============');
// release 0
//class MangoTree merupakan class khusus yang merupakan inheritance dari class FruitTree yg berisi hal2 khusus yang tidak diatur di class parent
class MangoTree extends FruitTree{
  // Initialize a new MangoTree
  constructor() {
    super();
    this._tamb_tinggi=1.8
    this._max_usia=20
    this._buah_petik=2.5
    this._max_produce=20
    this._nama_buah='Manggo';
  }

  // Produce some mangoes
  produceMangoes() {
    for (var i = 1; i < this._jml_buah; i++) {
      let _mango=new Mango();
      this._kump_buah.push(_mango);
    }
  }

}

class Mango extends Fruit{
  constructor(){
    super();
  }
}

//driver code untuk release 0
//dignakan untuk menampilkan hasil dari class mangoTree yang telah dibuat
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._umur} Report] Height = ${mangoTree._tinggi.toFixed(2)} | Fruits harvested = ${mangoTree._harvested}`)
} while (mangoTree._status != false)


console.log('=============== Tanaman Apple ===============');
// Release 1
//class AppleTree merupakan class khusus yang merupakan inheritance dari class FruitTree yg berisi hal2 khusus yang tidak diatur di class parent
class AppleTree extends FruitTree {
  constructor(){
    super();
    this._tamb_tinggi=1.2
    this._max_usia=10
    this._buah_petik=1
    this._max_produce=10
    this._nama_buah='Apple';
  }
  // Produce some mangoes
  produceApples() {
    for (var i = 1; i < this._jml_buah; i++) {
      let _apple=new Apple();
      this._kump_buah.push(_apple);
    }
  }
}
class Apple extends Fruit {
  constructor(){
    super();
  }
}

//driver code untuk release 0
//dignakan untuk menampilkan hasil dari class AppleTree yang telah dibuat
let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceApples();
  appleTree.harvest();
  console.log(`[Year ${appleTree._umur} Report] Height = ${appleTree._tinggi.toFixed(2)} | Fruits harvested = ${appleTree._harvested}`)
} while (appleTree._status != false)

console.log('=============== Tanaman Pear ===============');
// Release 1
//class PearTree merupakan class khusus yang merupakan inheritance dari class FruitTree yg berisi hal2 khusus yang tidak diatur di class parent
class PearTree extends FruitTree {
  constructor(){
    super();
    this._tamb_tinggi=1.2
    this._max_usia=10
    this._buah_petik=1
    this._max_produce=8
    this._nama_buah='Pear';
  }
  // Produce some mangoes
  producePears() {
    for (var i = 1; i < this._jml_buah; i++) {
      let _pears=new Pear();
      this._kump_buah.push(_pears);
    }
  }
}
class Pear extends Fruit {
}

//driver code untuk release 0
//dignakan untuk menampilkan hasil dari class AppleTree yang telah dibuat
let pearTree = new PearTree()
do {
  pearTree.grow();
  pearTree.producePears();
  pearTree.harvest();
  console.log(`[Year ${pearTree._umur} Report] Height = ${pearTree._tinggi.toFixed(2)} | Fruits harvested = ${pearTree._harvested}`)
} while (pearTree._status != false)

console.log('=============== Mari menanam pohon===============');
// Release 3
class TreeGrove{
  constructor(){
    this.arrPohon=[];
  }

  inputTree(nm_pohon,umur,tinggi,_buah_petik,kesehatan){
    if (nm_pohon=='MangoTree') {
      let mangoTree = new MangoTree();
      mangoTree._nama=nm_pohon;
      mangoTree._umur=umur;
      mangoTree._tinggi=tinggi;
      mangoTree._buah_petik=_buah_petik;
      mangoTree._status=kesehatan;
      this.arrPohon.push(mangoTree);
      return this.arrPohon;
    } else
    if (nm_pohon=='AppleTree') {
      let appleTree = new AppleTree();
      appleTree._nama=nm_pohon;
      appleTree._umur=umur;
      appleTree._tinggi=tinggi;
      appleTree._buah_petik=_buah_petik;
      appleTree._status=kesehatan;
      this.arrPohon.push(appleTree);
      return this.arrPohon;
    } else
    if (nm_pohon=='PearTree') {
      let pearTree = new PearTree();
      pearTree._nama=nm_pohon;
      pearTree._umur=umur;
      pearTree._tinggi=tinggi;
      pearTree._buah_petik=_buah_petik;
      pearTree._status=kesehatan;
      this.arrPohon.push(pearTree);
      return this.arrPohon;
    }
  }

  show_Ages() { //console.log('arrPohonlength='+this.arrPohon.length);
  // console.log(this.arrPohon);
    for(var i = 0; i < this.arrPohon.length; i++) {
      console.log(this.arrPohon[i]._nama + ' umur saat ini adalah ' + this.arrPohon[i]._umur+' tahun')
    }
  }
  show_Height() { //console.log('arrPohonlength='+this.arrPohon.length);
  // console.log(this.arrPohon);
    for(var i = 0; i < this.arrPohon.length; i++) {
      console.log(this.arrPohon[i]._nama + ' tinggi saat ini adalah ' + this.arrPohon[i]._tinggi)
    }
  }
  next_Year() {
    // console.log(this.arrPohon);
    for(var i = 0; i < this.arrPohon.length; i++) {
      this.arrPohon[i]._umur+=1;
      if (this.arrPohon[i]._umur!==this.arrPohon[i]._max_tumbuh) {
        this.arrPohon[i]._tinggi+=this.arrPohon[i]._tamb_tinggi;
      }
      if (this.arrPohon[i]._umur==this.arrPohon[i]._max_usia) { //akan mati jika batas usia mencapai maksimal
        this.arrPohon[i]._status=false;
      } else {
        if (this.arrPohon[i]._buah_petik==this.arrPohon[i]._umur) {
          // console.log('-----------',this.arrPohon[i]._buah_petik,this.arrPohon[i]._umur);
          this.arrPohon[i]._jml_buah=Math.round(Math.random()*this.arrPohon[i]._max_produce);
          // console.log('buah--------='+this.arrPohon[i]._jml_buah);
        }
      }
    }
  }

  mature_Trees() {
    console.log('Berikut pohon yang sedang berbuah:');
    for(var i = 0; i < this.arrPohon.length; i++) {
      console.log(this.arrPohon[i]._nama + ' buahnya ada '+this.arrPohon[i]._jml_buah);
    }
  }

  show_Tress() {
    // console.log(this.arrPohon);
    console.log('berikut pohon-pohon yang ditanam:');
    for(var i = 0; i < this.arrPohon.length; i++) {
      console.log(this.arrPohon[i]._nama);
    }
  }

  dead_Trees() {
    let pohonMati=[]
    for(var i = 0; i < this.arrPohon.length; i++) {
      if (this.arrPohon[i]._status==false) {
        pohonMati.push((this.arrPohon[i]._nama + ' sudah mati!'));
      }
    }
    // console.log('pohonMati');
    if (pohonMati.length>0) {
      return pohonMati;
    } else {
      console.log('Belum ada pohon yang mati');
    }
  }
}

let grove=new TreeGrove();
grove.inputTree('MangoTree',3,1.8,7,true);
grove.inputTree('MangoTree',5,2.4,12,true);
grove.inputTree('AppleTree',4,1.2,5,true);
grove.inputTree('PearTree',7,2,15,true);
//next Year
grove.next_Year();
//next trees age
grove.show_Ages();
//next Year
grove.show_Tress();
//next Year
grove.dead_Trees();
grove.mature_Trees();
grove.show_Height();
