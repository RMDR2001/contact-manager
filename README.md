# Administrador de Contactos

Una aplicación React para gestionar contactos, con múltiples vistas y características interactivas.

## Componentes Principales

### 1. App (`App.jsx`)
- Componente principal que orquesta toda la aplicación
- Maneja el estado global para:
  - Vista actual (lista/grid)
  - Contacto destacado
- Renderiza el header y el contenedor principal de contactos

### 2. Header (`components/Header.jsx`)
- Barra de navegación superior
- Muestra el título de la aplicación
- Contiene enlaces a secciones principales:
  - Contactos
  - Favoritos
  - Configuración

### 3. ContactList (`components/ContactList.jsx`)
- Renderiza los contactos en formato lista
- Características:
  - Muestra nombre y teléfono de cada contacto
  - Resalta el contacto actualmente seleccionado
  - Permite seleccionar un contacto al hacer clic

### 4. ContactCard (`components/ContactCard.jsx`)
- Muestra contactos en formato tarjeta
- Características:
  - Diseño tipo card con avatar
  - Muestra nombre, teléfono y email
  - Resalta la tarjeta seleccionada
  - Animación hover

### 5. ContactDetail (`components/ContactDetail.jsx`)
- Muestra información detallada del contacto seleccionado
- Características:
  - Avatar del contacto
  - Información completa (nombre, teléfono, email)
  - Diseño destacado

## Características Principales

- **Vistas Múltiples**: Alterna entre vista lista y grid
- **Contacto Destacado**: Selección y visualización de detalles
- **Diseño Responsivo**: Se adapta a diferentes tamaños de pantalla
- **Interactividad**: Animaciones y feedback visual
- **Estado Global**: Manejo eficiente del estado con React Hooks

## Estructura de Archivos

## Estilos

- Diseño moderno y limpio
- Paleta de colores profesional
- Animaciones suaves
- Feedback visual para interacciones

## Estado del Proyecto

Versión inicial con funcionalidades básicas implementadas:
- ✅ Visualización de contactos
- ✅ Cambio de vistas
- ✅ Selección de contacto destacado
- ✅ Diseño responsivo
