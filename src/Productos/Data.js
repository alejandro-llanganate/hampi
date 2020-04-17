
import mascarillaQuirurgica from '../Productos/Content/img/mascarillaQuirurgica.png'
import mascarillaSimple from '../Productos/Content/img/mascarillaSimple.png'
import mascarillaKN95 from '../Productos/Content/img/mascarillaKN95.png'
import bata from '../Productos/Content/img/bata.png'
import bataSimple from '../Productos/Content/img/bataSimple.png'
import overall1 from '../Productos/Content/img/overall1.png'
import overall2 from '../Productos/Content/img/overall2.png'
import overallAntifluidos from '../Productos/Content/img/overallAntifluidos.png'
import cubrecabezas from '../Productos/Content/img/cubrecabezas.png'
import cubrezapatos from '../Productos/Content/img/cubrezapatos.png'
import gelisabella from '../Productos/Content/img/gelisabella.png'
import gelVaporal from '../Productos/Content/img/gelVaporal.png'
import jabónSahara from '../Productos/Content/img/jabónSahara.png'

const dataProductos = [
    {
        id: 1, 
        nombre: "Mascarilla Quirúrgica ISoooME", 
        descripcion: "Estructura SMS 17.5cm x 9.5cm, de 3 capas no tejidas.", 
        precio: "$ 0,62 c/u", 
        img: mascarillaQuirurgica, 
        categoria: "Mascarillas"
    },
    {
        id: 2, 
        nombre: "Mascarilla Quirúrgica Simple", 
        descripcion: "Tela cambrella quirúrgica 75gr. Medidas 18cm x 20cm. Desde 1000 unidades cada unidad está en una funda.", 
        precio: "$0,35 c/u ", 
        img: mascarillaSimple, 
        categoria: "Mascarillas"
    },
    {
        id: 3, 
        nombre: "Mascarillas KN95  FFP2", 
        descripcion: "Doble no tejido suave, algodón con filtro de aire caliente ES, no tejido soplado por fusión, no tejido agradable para la piel. ", 
        precio: "Por cotización ", 
        img: mascarillaKN95, 
        categoria: "Mascarillas"
    },
    {
        id: 4, 
        nombre: "Bata simple", 
        descripcion: "Tela no tejida, SS, Polipropileno 100%, Celulosoa Impermeable, Gramaje 70gm/m2. Descartable", 
        precio: "$2,46 c/u", 
        img: bataSimple, 
        categoria: "Batas"
    },
    {
        id: 5, 
        nombre: "Bata artesanal", 
        descripcion: "Realizadas artesanalmente en cambrella quirúrgica de 75gm. Talla única. Descartable", 
        precio: "$3,02 c/u", 
        img: bata, 
        categoria: "Batas"
    },
    {
        id: 6, 
        nombre: "Overall I", 
        descripcion: "Realizadas artesanalmente en cambrella quirúrgica de 75gm. Talla 40 - 42", 
        precio: "$4,98 c/u", 
        img: overall1, 
        categoria: "Overall"
    },
    {
        id: 7, 
        nombre: "Overall II", 
        descripcion: "Tela no tejida a base de fibras de polietileno de alta densidad.", 
        precio: "$12,88 c/u", 
        img: overall2, 
        categoria: "Overall"
    },
    {
        id: 8, 
        nombre: "Overall Impermeable Antifluido", 
        descripcion: "Tela 100% poliéster anti fluido, tejido de Urdimbre y trama. Ligamento tafetán. Termo fijado 207 gml, secado rápido.", 
        precio: "$19,02", 
        img: overallAntifluidos, 
        categoria: "Overall"
    },
    {
        id: 9, 
        nombre: "Cubre cabeza", 
        descripcion: "Realizadas artesanalmente en cambrella quirúrgica de 75gm.", 
        precio: "$0,26 c/u", 
        img: cubrecabezas, 
        categoria: "Cubre cabeza"
    },
    {
        id: 10, 
        nombre: "Cubre zapatos", 
        descripcion: "Realizadas artesanalmente en cambrella quirúrgica de 75gm.", 
        precio: "$0,49 c/u", 
        img: cubrezapatos, 
        categoria: "Cubre zapatos"
    },
    {
        id: 11, 
        nombre: "Gel Antibacterial Isabella Aloe ", 
        descripcion: "En dos presentaciones 400ML 1 X 24 / 250ML 1 X 140", 
        precio: "$4,00 c/u - $3,40 c/u", 
        img: gelisabella, 
        categoria: "Gel"
    },
    {
        id: 12, 
        nombre: "Vaporal Gel Antibacterial", 
        descripcion: "En dos presentaciones 250ML 1 X 12 / 60ML  1448  1 X 12 ", 
        precio: "$3,80 c/u - $1,90 c/u", 
        img: gelVaporal, 
        categoria: "Gel"
    },
    {
        id: 13, 
        nombre: "Jabón Líquido Sahara", 
        descripcion: "Almendras, Frutos Rojos, Lavanda   Fco. 500ML 1 X 12", 
        precio: "$2,40 c/u", 
        img: jabónSahara, 
        categoria: "jabon"
    }
]

export default dataProductos