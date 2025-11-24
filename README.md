# 🎬 AppServer-MYSQL

Aplicación web para gestión de películas con backend Node.js/Express y MySQL, y frontend HTML/CSS/JavaScript.

## 📋 Características

- ✅ CRUD completo de películas (Crear, Leer, Actualizar, Eliminar)
- ✅ Interfaz moderna y responsive
- ✅ Validación de datos con Zod
- ✅ Base de datos MySQL
- ✅ API RESTful
- ✅ CORS configurado

## 🚀 Inicio Rápido

### Requisitos

- Node.js (v16 o superior)
- MySQL (v8.0 o superior)
- npm

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/TU_USUARIO/AppServer-MYSQL.git
cd AppServer-MYSQL
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura la base de datos:
   - Crea una base de datos MySQL llamada `movies`
   - Ejecuta el script SQL para crear la tabla (ver `database-setup.sql` o crea la tabla manualmente)

4. Configura las variables de entorno (opcional):
   - Crea un archivo `.env` basado en `.env.example`
   - O edita directamente `models/database/movie.js` con tus credenciales

5. Pobla la base de datos (opcional):
```bash
node seed-peliculas.js
```

6. Inicia el servidor:
```bash
# Modo desarrollo (con nodemon)
npm run dev

# Modo producción
npm start
```

7. Abre el frontend:
   - Abre `web/index.html` en tu navegador
   - O usa un servidor local: `python -m http.server 8000` en la carpeta `web`

## 📁 Estructura del Proyecto

```
AppServer-MYSQL/
├── app.js                 # Servidor principal
├── package.json           # Dependencias
├── controllers/           # Controladores de la API
│   └── movie.js
├── models/                # Modelos de datos
│   ├── database/         # Modelo con MySQL
│   └── local/            # Modelo con JSON (alternativo)
├── routes/               # Rutas de la API
│   └── movie.js
├── middlewares/          # Middlewares
│   └── cors.js
├── schemas/              # Validaciones con Zod
│   └── movie.js
├── web/                  # Frontend
│   ├── index.html
│   └── styless.css
└── seed-peliculas.js     # Script para poblar la BD
```

## 🔌 API Endpoints

- `GET /movies` - Obtener todas las películas
- `GET /movies/:id` - Obtener una película por ID
- `POST /movies` - Crear una nueva película
- `PATCH /movies/:id` - Actualizar una película
- `DELETE /movies/:id` - Eliminar una película

## 🌐 Despliegue

Para desplegar el proyecto en la web, consulta la [Guía de Despliegue](GUIA_DESPLIEGUE.md).

**Resumen rápido:**
1. Backend: Railway, Render o Heroku
2. Frontend: Netlify, Vercel o Firebase Hosting
3. Base de datos: MySQL en la nube (Railway, PlanetScale, etc.)

## 🛠️ Tecnologías

- **Backend:** Node.js, Express
- **Base de Datos:** MySQL
- **Validación:** Zod
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **UI:** SweetAlert2

## 📝 Licencia

ISC

## 👤 Autor

Tu nombre aquí

---

Para más detalles sobre el despliegue, consulta [GUIA_DESPLIEGUE.md](GUIA_DESPLIEGUE.md)

