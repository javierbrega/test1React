# Proyecto React con Vite

Este proyecto es un ejemplo básico de cómo configurar un proyecto de React utilizando Vite. Los pasos a continuación detallan cómo limpiar la instalación inicial y preparar el proyecto para su desarrollo.

## Pasos para Configurar el Proyecto

### 1. Crear un nuevo proyecto con Vite

1. **Instalar Vite**:
   
   npm create vite@latest mi-proyecto-react --template react

2. **Entro al Proyecto**:

cd mi-proyecto-react

3. **Instalar las dependencias**:

npm install

4. **Limpiar la instalación de React**:

1a.**Eliminar archivos innecesarios**:

src/App.css

src/logo.svg

2a.**Modificar src/App.jsx**:

function App() {
  return (
    <div>
      {/* Aquí puedes empezar a escribir tu código */}
    </div>
  );
}

export default App;

3a. **Limpiar src/index.css (si decides mantenerlo)**:

body {
  font-family: Arial, sans-serif;
  padding: 20px;
  text-align: center;
}

4a. **Limpiar src/main.jsx**:

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Si decides no usar estilos globales, elimina esta línea

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

5.  **Veroficar la configuración**

Añade un simple componente en src/App.jsx para comprobar que todo está funcionando:

function App() {
  return (
    <div>
      <h1>¡Hola, Mundo!</h1>
      <p>Tu configuración de React con Vite está lista para funcionar.</p>
    </div>
  );
}

export default App;

6. **Añadir estilos básicos**
Crear src/index.css con el siguiente contenido:

body {
  font-family: Arial, sans-serif;
  padding: 20px;
  text-align: center;
  background-color: #f0f0f0;
}

h1 {
  color: #333;
}

p {
  color: #666;
}

7. **Importar index.css en src/main.jsx:**

import './index.css';

Ventajas de usar Vite con React
Rendimiento: Vite es extremadamente rápido debido a su uso de ESM (Módulos de ECMAScript) y no necesita realizar una reconstrucción completa cada vez que se hace un cambio.

Configuración mínima: Comparado con herramientas tradicionales como Webpack, Vite ofrece una configuración inicial más simple.

Hot Module Replacement (HMR): Actualizaciones instantáneas en el navegador cuando cambias el código, sin necesidad de recargar toda la página.

8. **Ejecutar el Proyecto**

1a. Iniciar el servidor de desarrollo:

npm run dev

2a. Construir el proyecto para producción:

npm run build

3a. Previsualizar la construcción:

npm run serve
