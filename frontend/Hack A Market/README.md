# Hack A Market - VueJS

En este proyecto hemos practicado como realizar un e-commerce desde 0 dedicandonos tanto a la parte front como a la parte back del proyecto.

A continuación adjunto los requisitos cumplidos con la entrega de este ejercicio:

## Objetivos Obligatorios 💡

- Que todos los datos de la base de datos se muestren correctamente
en el front.
- Se debe hacer logout() desde el menú (a través de un botón). Al
hacerlo todos los datos de la sesión deben borrarse (token, rol).
- Que el menú no se muestre en el Login y sí en el resto de rutas.
- Que se haga uso de SweetAlert2 para enviar mensajes al usuario
cuando sea necesario (cuando no tenga permisos para ver una ruta,
cuando se haya creado un usuario, cuando se haya editado un
cliente, ¡sé creativo/a!.
- Uso de vue-headful para cambiar el título de las páginas de forma
dinámica.
- USO DE COMENTARIOS.
- Cambia los atributos estáticos de router link (to="") por atributos
dinámicos (:to="") para mejorar la navegación.
- Crea una vista de Error o 404 para evitar que al visitar una URL que
no existe en el proyecto, la página se vea en blanco.
- Optimiza el código tanto como puedas.
- Debe haber autenticación a través de la base de datos.

## Bonus/Opcionales 💡
- Sacar el "nombre" (user, admin) de usuario/a de la base de datos y
mostrarlo en el menú.
- Opcional crear una barra de búsqueda por ID y mostrar el
producto/cliente indicado.
- Opcional crear una barra de búsqueda para filtrar productos.
- Opcional uso del CSS Spinner para mostrar el estado "cargando"
mientras los productos/clientes cargan.
- Que la aplicación sea responsive.
- Crea un estilo original para la aplicación con CSS.

## Instructions: Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
