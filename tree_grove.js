class TreeGrove{
  constructor(){
    this._tree
    this._mature
    this._height
    this._age
    this._healthyStatus
  }

  inputTree(tree, mature, height, age, healthyStatus){
    this._tree = tree
    this._mature = mature
    this._height = height
    this._age = age
    this._healthyStatus = healthyStatus
  }

  show_ages(){
    return this._tree+' Age '+this._age+' Year'
  }

  show_trees(){

  }

  mature_trees(){

  }

  dead_trees(){

  }
}


let grove = new TreeGrove()

grove.inputTree('MangoTree', 3, 1.8, 7, true)
grove.inputTree('MangoTree', 5, 2.4, 12, true)
grove.inputTree('AppleTree', 4, 1.2, 5, true)
grove.inputTree('PearTree', 7, 1.2, 5, true)
console.log(grove.show_ages());
