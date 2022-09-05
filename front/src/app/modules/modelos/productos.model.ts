export class producto{
    private nombre: string;
    private ingredientes: string;
    private precio: number;
    private imagepath: string;

    constructor(nombre: string, ingredientes: string, precio: number,imagepath:string) {
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
        this.imagepath = imagepath;
    }
}