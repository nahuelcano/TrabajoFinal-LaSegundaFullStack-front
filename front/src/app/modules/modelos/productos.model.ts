export class producto{
    private nombre: string;
    private ingredientes: string;
    private precio: number ;

    constructor(nombre: string, ingredientes: string, precio: number) {
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
    }
}