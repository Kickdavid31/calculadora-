# Calculadora React

Una calculadora funcional creada con React que permite realizar operaciones matemáticas básicas.

## Descripción

Este proyecto es una calculadora básica creada con React que incluye:
- Componentes reutilizables (Boton, Pantalla, BotonClear)
- Manejo de estado para la entrada de datos
- Integración con la librería mathjs para evaluación de expresiones
- Operaciones básicas: suma, resta, multiplicación y división
- Funcionalidad de limpiar pantalla

## Tecnologías utilizadas

- React
- CSS3
- mathjs

## Instalación

1. Clona este repositorio
```bash
git clone https://github.com/Kickdavid31/calculadora-.git
```

2. Instala las dependencias
```bash
npm install
```

3. Ejecuta la aplicación
```bash
npm start
```

La aplicación se abrirá en [http://localhost:3000](http://localhost:3000)

## Scripts disponibles

### `npm start`
Ejecuta la aplicación en modo desarrollo.

### `npm run build`
Construye la aplicación para producción en la carpeta `build`.

### `npm test`
Ejecuta las pruebas en modo interactivo.

## Estructura del proyecto

```
src/
├── component/
│   ├── boton.jsx
│   ├── botonClear.jsx
│   └── pantalla.jsx
├── css/
│   ├── Boton.css
│   ├── botonClear.css
│   └── pantalla.css
├── img/
└── App.js
```
