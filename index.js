

/* Definición de clases */
class Cliente {
    nombreCliente;
    dniCliente;
    numeroCuenta;
    rutCliente;
    #saldo // lo puse en privado
}
// a los demas "saldo" le saque el #, para que sea privado se los pones 
class CuentaCorriente {
    numero;
    saldo; 
    agencia;

    constructor() {
        // no las inicialice ninguna porque no deja ingrsar un valor
        this.saldo ;
        this.numero ;
        this.agencia ;
    }
    
    depositoEnCuenta(valor) {
        if (valor > 0){
            this.saldo += valor;
        return this.saldo;}
    }

    retirarDeCuenta(valor) {
        if (valor <= this.saldo){
            this.saldo -= valor;
        return this.saldo;
    }}
}

cuentaDePabloZ = new CuentaCorriente();
cuentaDePabloZ.saldo = 100;
cuentaDePabloZ.numero = 23243432;
cuentaDePabloZ.agencia = 200;
cuentaDePabloZ.depositoEnCuenta(500);
console.log(cuentaDePabloZ);

cuentaDePabloZ.retirarDeCuenta(400);
console.log(cuentaDePabloZ);

cuentaDePabloZ.depositoEnCuenta(100);
console.log(cuentaDePabloZ);
