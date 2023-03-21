// Obtener todos los botones de compra
const botonesCompra = document.querySelectorAll('button');

// Agregar un evento de clic a cada botón de compra
botonesCompra.forEach((boton) => {
  boton.addEventListener('click', () => {
    alert('¡Gracias por tu compra!');
  });
});

// Obtener todas las imágenes de producto
const imagenesProducto = document.querySelectorAll('img');

// Agregar un evento de mouseover a cada imagen de producto
imagenesProducto.forEach((imagen) => {
  imagen.addEventListener('mouseover', () => {
    imagen.style.transform = 'scale(1.1)';
  });
  
  // Agregar un evento de mouseout a cada imagen de producto
  imagen.addEventListener('mouseout', () => {
    imagen.style.transform = 'scale(1)';
  });
});
