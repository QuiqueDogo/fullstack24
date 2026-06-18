# Fullstack Technical Test

Aplicación Fullstack para registro y consulta de usuarios.

## Tecnologías

### Backend

- FastAPI
- SQLAlchemy
- PostgreSQL
- Pydantic

### Frontend

- React
- Vite
- Ant Design
- Zustand
- Axios

---

# Requisitos

- Python 3.12+
- Node.js 20+
- PostgreSQL 15+

---

# Configuración Backend

Entrar al directorio backend

```bash
cd backend
```

# Crear entorno virtual

```bash
python -m venv venv
```

# Activar entorno virtual

```bash
Windows
venv\Scripts\activate

Linux / Mac
source venv/bin/activate
```

# Instalar dependencias

```bash
pip install -r requirements.txt
```
# Crear entorno virtual

```bash
python -m venv venv
```

# Activar entorno virtual

```bash
Windows
venv\Scripts\activate
``` 
```bash
Linux / Mac
source venv/bin/activate
```
# Instalar dependencias

```bash
pip install -r requirements.txt
```
# Crear archivo .env

```bash
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/usersdb
```

# Iniciar API

```bash
uvicorn app.main:app --reload
``` 

# La API estará disponible en:

```bash
http://localhost:8000
```

# Swagger:

```bash
http://localhost:8000/docs
```

--- 

# Entrar al directorio frontend

```bash
cd frontend
```

# Instalar dependencias

```bash
npm install
```

# Ejecutar proyecto

```bash
npm run dev
```

# Aplicación disponible en:

```bash
http://localhost:5173
```