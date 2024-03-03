// Datos de usuarios
const usuarios = [
  {
    id: 1,
    correo: "usuario1@example.com",
    contraseña: "contraseña123",
    imagen:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    carrito: [
      { idProducto: 1, cantidad: 2 },
      { idProducto: 3, cantidad: 1 },
    ],
    favoritos: [5, 7, 9], // IDs de productos favoritos
  },
  {
    id: 2,
    correo: "usuario2@example.com",
    contraseña: "passw0rd",
    imagen:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    carrito: [
      { idProducto: 2, cantidad: 1 },
      { idProducto: 4, cantidad: 3 },
    ],
    favoritos: [3, 6, 8],
  },
  {
    id: 3,
    correo: "usuario3@example.com",
    contraseña: "securepassword",
    imagen:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    carrito: [
      { idProducto: 1, cantidad: 1 },
      { idProducto: 5, cantidad: 2 },
    ],
    favoritos: [2, 4, 7],
  },
];

// Ahora tienes una lista de usuarios con sus correos, contraseñas, imágenes de perfil, carritos y productos favoritos.

export { usuarios };
