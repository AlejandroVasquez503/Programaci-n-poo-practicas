class CuentaBancaria {
    constructor(nombreTitular, saldo, numeroCuenta) {
        this.nombreTitular = nombreTitular;
        this.saldo = saldo;
        this.numeroCuenta = numeroCuenta;
    }

    get NombreTitular() {
        return this.nombreTitular;
    }

    set NombreTitular(nombreTitular){
        return this.nombreTitular = nombreTitular;
    }
    
    get Saldo() {
        return this.saldo;
    }
    
    set Saldo(saldo){
        return this.saldo = saldo;
    }

    get NumeroCuenta() {
        return this.numeroCuenta;
    }

    set NumeroCuenta(numeroCuenta){
        return this.numeroCuenta = numeroCuenta;
    }

    retiro(cantidad) {
        if (cantidad > this.saldo){
            return "saldo insuficiente"
        }else{
            return this.saldo = this.saldo-cantidad
        }
    }

    abono(cantidad){
        return this.saldo=this.saldo+cantidad
    }

}

const btnRetiro=document.getElementById("btnRetiro")
const cliente= new CuentaBancaria("Alejandro", 0, "000000-2")
const btnAbono= document.getElementById("btnAbono")
btnRetiro.addEventListener("click", ()=>{
const cantidad=document.getElementById("cantidad").value //si no colocamos value toma todo el html hasta la etiqueta
const response=document.getElementById("Respuesta")

response.innerText=cliente.retiro(cantidad)
})

btnAbono.addEventListener("click",()=>{
const cantidad=parseFloat(document.getElementById("cantidad").value)

const response=document.getElementById("Respuesta")
response.innerText=cliente.abono(cantidad)
})



