# Proyecto Final Integrado

Este paquete contiene tu proyecto original (en `original_files/`) y archivos añadidos para integrar una base de datos MySQL y despliegue.

Archivos añadidos en la raíz:
- db.js -> conexión MySQL (usa dotenv)
- .env.example -> variables de entorno
- schema.sql OR schema_detected.sql -> script para crear la base de datos
- Dockerfile
- .github/workflows/node-ci.yml -> workflow CI básico
- render.yaml -> plantilla para Render deployment
- INTEGRATION_NOTE.txt / SQL_NOTE.txt -> notas de integración

## Pasos rápidos para usar localmente
1. Copia `.env.example` a `.env` y ajusta las credenciales.
2. Importa la base de datos localmente:
   ```bash
   mysql -u root -p < schema.sql
   ```
   (Si se detectó un `schema_detected.sql`, úsalo en su lugar)
3. Instala dependencias en la raíz del proyecto y arranca:
   ```bash
   npm install
   npm start
   ```

## Despliegue a Render (ejemplo)
1. Sube el contenido de este repo a GitHub.
2. Crea un Web Service en Render y conecta el repo.
3. Define variables de entorno en Render: DB_HOST, DB_USER, DB_PASS, DB_NAME.
4. Opcional: usa la base de datos gestionada de Render o conecta PlanetScale/Railway.

## Notas
- Tu proyecto original se conserva dentro de `original_files/` para que puedas comparar/pegar código.
- Si quieres que adapte automáticamente los modelos y endpoints del proyecto original a la base de datos detectada, dime y lo hago (necesito revisar `package.json`, `models`, migraciones que están en `original_files/`).


## Autenticación (registro / login)
Se agregó un módulo de autenticación básico:
- `POST /auth/register` -> { username, email, password } devuelve { user, token }
- `POST /auth/login` -> { email, password } devuelve { user, token }
Usa el token en `Authorization: Bearer <token>` para rutas protegidas (si las añades).

**Variables de entorno importantes:**
- `DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME` (para la DB)
- `JWT_SECRET` (cambia el valor por defecto en producción)

## Scripts útiles
- `npm run init-db` -> ejecuta `init-db.sh` para importar `schema.sql` (requiere cliente mysql instalado)

## Despliegue automático (GitHub -> Render)
Para desplegar automáticamente desde GitHub a Render necesitarás:
1. Subir este repositorio a GitHub.
2. Crear un Web Service en Render y conectar el repo.
3. Definir estas variables de entorno en Render (Dashboard > Environment):
   - `DB_HOST`
   - `DB_USER`
   - `DB_PASS`
   - `DB_NAME`
   - `JWT_SECRET`
4. (Opcional) Si quieres que GitHub Actions despliegue automáticamente, necesitarás generar un API key de Render y almacenarlo como `RENDER_API_KEY` en GitHub Secrets, y adaptar el workflow para usar esa key. Yo puedo generar el workflow ejemplo si lo deseas.
