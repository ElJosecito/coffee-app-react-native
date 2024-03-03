// Datos de productos con identificadores únicos, categorías asignadas y propiedad de azúcar
const productos = [
  {
    id: 1,
    nombre: "Espresso",
    descripcion:
      "Un café fuerte y concentrado hecho al forzar agua caliente a través de granos de café finamente molidos.",
    precio: 2.5,
    imagen: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    categoriaId: 4, // Espresso
    azucar: false,
  },
  {
    id: 2,
    nombre: "Americano",
    descripcion:
      "Un café suave y ligero hecho con una o dos partes de espresso y agua caliente.",
    precio: 2.0,
    imagen: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    categoriaId: 5, // Americano
    azucar: false,
  },
  {
    id: 3,
    nombre: "Cappuccino",
    descripcion:
      "Un café italiano clásico hecho con partes iguales de espresso, leche vaporizada y espuma de leche.",
    precio: 3.0,
    imagen: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    categoriaId: 6, // Cappuccino
    azucar: false,
  },
  {
    id: 4,
    nombre: "Latte",
    descripcion:
      "Un café suave hecho con espresso y una cantidad generosa de leche vaporizada.",
    precio: 3.5,
    imagen: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    categoriaId: 7, // Latte
    azucar: false,
  },
  {
    id: 5,
    nombre: "Robusta",
    descripcion:
      "Un café con un sabor fuerte y terroso, conocido por su alto contenido de cafeína.",
    precio: 2.75,
    imagen: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    categoriaId: 1, // Robusta
    azucar: false,
  },
  {
    id: 6,
    nombre: "Liberica",
    descripcion:
      "Un café con un sabor único, a menudo con matices afrutados o florales.",
    precio: 3.25,
    imagen: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    categoriaId: 2, // Liberica
    azucar: false,
  },
  {
    id: 7,
    nombre: "Excelsa",
    descripcion:
      "Un café con un sabor complejo y ácido, a menudo utilizado en mezclas para agregar profundidad.",
    precio: 3.0,
    imagen: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    categoriaId: 3, // Excelsa
    azucar: false,
  },
  {
    id: 8,
    nombre: "Moka",
    descripcion:
      "Un café aromatizado con chocolate y vainilla, ideal para los amantes de los sabores dulces.",
    precio: 4.25,
    imagen: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    categoriaId: 4, // Espresso
    azucar: true,
  },
];

// Duplicar cada producto con y sin azúcar
const productosConAzucar = productos.map((producto) => {
  return {
    ...producto,
    id: producto.id + productos.length,
    nombre: producto.nombre + " con Azúcar",
    azucar: true,
  };
});

const productosSinAzucar = productos.map((producto) => {
  return {
    ...producto,
    id: producto.id + productos.length * 2,
    nombre: producto.nombre + " sin Azúcar",
    azucar: false,
  };
});

// Combinar los productos originales con los productos con y sin azúcar
const todosLosProductos = [
  ...productos,
  ...productosConAzucar,
  ...productosSinAzucar,
];

// Ahora tienes todos los productos con y sin azúcar para cada café.

export { todosLosProductos };
