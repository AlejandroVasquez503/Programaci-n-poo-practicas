class Bibloteca {
            
    constructor(titulo, autor, estado) {
      this.titulo = titulo;
      this.autor = autor;
      this.estado = "Disponible"
    }
    
    //metodo para ver estado
    verEstado(){
        return this.estado
    }
    prestar(){
        return this.estado="No disponible"
    }
 }
    
class Socio {
    constructor(nombre, nIdentificación){
        this.nombre = nombre;
        this.nIdentificación = nIdentificación;
        this.ListaLibro = []
    }

    prestarLibroSocio(libro1){
        if(libro1.verEstado()=="Disponible"){
            libro.prestar()
            this.ListaLibro.push(libro)
        }else{
            console.log("Libro prestado")
        }

        mostrarLibros(){
            if(this.ListaLibro.length>0){
                this.ListaLibro.forEach((libro=>{
                    console.log(libro)
                }))
            }
        }
    }
}

const libro1 = new libro1("Mateo", "Miguel Perez")
const libro2 = new libro2("Tom Y Jerry", "Jose Zelaya")

const socio1 = new socio1("René", "2024056043")
const socio2 = new socio2("Stella", "202403043")


