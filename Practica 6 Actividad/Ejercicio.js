class Cubo{
    constructor(nombre, textura, nombreImagen, dimensión){
        this.nombre=nombre
        this.textura=textura
        this.nombreImagen=nombreImagen
        this.dimensión=dimensión
    }
    mostrarDatos(){
        return `Nombre: ${this.nombre}, textura: ${this.textura}, nombre de Imagen: ${this.nombreImagen} dimensión: ${this.dimensión}`
    }

    get NombreImagen(){
        return this.nombreImagen
    }
}

class BloqueTierra extends Cubo{
    constructor(nombre, textura, nombreImagen, dimensión){
        super(nombre, textura, nombreImagen, dimensión)
    }
    mostrarDatos(){
        return `Nombre: ${this.nombre}, textura: ${this.textura}, nombre de Imagen: ${this.nombreImagen} dimensión: ${this.dimensión}`
    }
}

class BloqueDiamante extends Cubo{
    constructor(nombre, textura, nombreImagen, dimensión){
        super(nombre, textura, nombreImagen, dimensión)
    }
    mostrarDatos(){
        return `Nombre: ${this.nombre}, textura: ${this.textura}, nombre de Imagen: ${this.nombreImagen} dimensión: ${this.dimensión}`
    }
}

class BloqueCarbon extends Cubo{
    constructor(nombre, textura, nombreImagen, dimensión){
        super(nombre, textura, nombreImagen, dimensión)
    }
    mostrarDatos(){
        return `Nombre: ${this.nombre}, textura: ${this.textura}, nombre de Imagen: ${this.nombreImagen} dimensión: ${this.dimensión}`
    }
}
class BloqueMadera extends Cubo{
    constructor(nombre, textura, nombreImagen, dimensión){
        super(nombre, textura, nombreImagen, dimensión)
    }
    mostrarDatos(){
        return `Nombre: ${this.nombre}, textura: ${this.textura}, nombre de Imagen: ${this.nombreImagen} dimensión: ${this.dimensión}`
    }
}

const imgCub=document.getElementById("imgCub")
const btnTierra=document.getElementById("btnTierra")
const btnDiamante=document.getElementById("btnDiamante")
const btnCarbon=document.getElementById("btnCarbon")
const btnMadera=document.getElementById("btnMadera")
const repuesto=document.getElementById("repuesto")

btnTierra.addEventListener("click", ()=>{
    const bloqueTierra=new BloqueTierra("Bloque","tierra","https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/15/Grass_Block_JE4.png",4)
    imgCub.setAttribute(`src`, bloqueTierra.NombreImagen)
    repuesto.innerText=bloqueTierra.mostrarDatos()
})

btnDiamante.addEventListener("click", ()=>{
    const bloqueDiamante=new BloqueDiamante("Bloque","Diamante","https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c8/Block_of_Diamond_JE5_BE3.png",4)
    imgCub.setAttribute(`src`, bloqueDiamante.NombreImagen)
    repuesto.innerText=bloqueDiamante.mostrarDatos()
})

btnCarbon.addEventListener("click", ()=>{
    const bloqueCarbon=new BloqueCarbon("Bloque","Carbon","https://minecraft.wiki/images/Block_of_Coal_JE3_BE2.png",4)
    imgCub.setAttribute(`src`, bloqueCarbon.NombreImagen)
    repuesto.innerText=bloqueCarbon.mostrarDatos()
})

btnMadera.addEventListener("click", ()=>{
    const bloqueMadera=new BloqueMadera("Bloque","Madera","https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c1/Oak_Planks.png",4)
    imgCub.setAttribute(`src`, bloqueMadera.NombreImagen)
    repuesto.innerText=bloqueMadera.mostrarDatos()
})