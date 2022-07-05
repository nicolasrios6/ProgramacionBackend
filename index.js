class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName = () => {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota = (nombreMascota) => {
        return this.mascotas.push(nombreMascota);
    }

    countMascotas = () => {
        return this.mascotas.length
    }

    addBook = (libroNuevo, autorNuevo) => {
        let newBook = {nombre: libroNuevo, autor: autorNuevo}
        return this.libros.push(newBook);
    }

    getBookNames = () => {
         return this.libros.map((libro) => libro.nombre)
    }
}

const Usuario1 = new Usuario(
    'Nicolás',
    'Ríos',
    [{nombre: 'Arsene Lupin', autor: 'Maurice Leblanc'}],
    ['Baco','Lola']
)

Usuario1.addMascota('Gato')
Usuario1.addBook('La Odisea', 'Homero')

console.log(Usuario1)
console.log(`Nombre completo: ${Usuario1.getFullName()}`)
console.log(`El usuario tiene ${Usuario1.countMascotas()} mascotas`)
console.log(`El usuario tiene los libros: ${Usuario1.getBookNames()}`)








