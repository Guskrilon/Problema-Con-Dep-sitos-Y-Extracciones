/* Definición de clases */
class Cliente {
    nombreCliente;
    dniCliente;
    numeroCuenta;
    rutCliente;
}

class CuentaCorriente {
    numero;
    saldo;
    agencia;

    constructor() {
        this.#saldo = 0;
        this.numero = '';
        this.agencia = '';
    }
    
    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }
}

cuentaDePabloZ = new CuentaCorriente();
cuentaDePabloZ.#saldo = 100;

cuentaDePabloZ.depositoEnCuenta(-500);

cuentaDePabloZ.retirarDeCuenta(500);

cuentaDePabloZ.depositoEnCuenta(-100);
