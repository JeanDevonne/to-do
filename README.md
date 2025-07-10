# React + Vite

Esta aplicación es un proyecto desarrollado con React y Vite, lo que permite un entorno de desarrollo moderno, rápido y eficiente.

## Guía experta para ejecutar y administrar la aplicación

### 1. Clonación del repositorio

Primero, clona este repositorio en tu máquina local usando Git. Reemplaza la URL por la de tu repositorio si es diferente:

```bash
git clone https://github.com/usuario/nombre-del-repo.git
cd nombre-del-repo
```

### 2. Prerrequisitos

Asegúrate de tener instalado lo siguiente en tu sistema:

- [Node.js](https://nodejs.org/) (versión recomendada: 18.x o superior)
- [npm](https://www.npmjs.com/) (se instala junto con Node.js)

Puedes verificar la instalación ejecutando:

```bash
node -v
npm -v
```

### 3. Instalación de dependencias

Desde la raíz del proyecto, instala todas las dependencias necesarias ejecutando:

```bash
npm install
```

Esto descargará e instalará todos los paquetes definidos en `package.json`.

### 4. Ejecución en modo desarrollo

Para iniciar el servidor de desarrollo con recarga en caliente (HMR), ejecuta:

```bash
npm run dev
```

- La terminal mostrará la URL local (por defecto: [http://localhost:5173](http://localhost:5173)).
- Cualquier cambio en el código fuente se reflejará automáticamente en el navegador.

### 5. Construcción para producción

Para generar una versión optimizada y lista para producción, ejecuta:

```bash
npm run build
```

- Los archivos optimizados se generarán en la carpeta `dist/`.
- Esta build puede ser desplegada en cualquier servidor estático.
