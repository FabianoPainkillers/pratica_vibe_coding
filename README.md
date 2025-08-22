# Pratica Vibe Coding - Todo App

A modern Todo application with a FastAPI backend and a simple frontend interface. This project demonstrates a full-stack application using Docker containerization, PostgreSQL database, and RESTful API architecture.

## Features

- Create, read, update, and delete Todo items
- FastAPI backend with SQLAlchemy ORM
- PostgreSQL database for data persistence
- Docker and Docker Compose for easy deployment
- Simple and responsive frontend interface

## Tech Stack

### Backend
- FastAPI - Modern, fast web framework for building APIs
- SQLAlchemy - SQL toolkit and ORM
- Pydantic - Data validation and settings management
- PostgreSQL - Relational database
- Uvicorn - ASGI server implementation

### Frontend
- HTML5/CSS3 - Structure and styling
- JavaScript - Frontend logic and API interaction

### Infrastructure
- Docker - Containerization
- Docker Compose - Multi-container orchestration
- Make - Build automation

## Getting Started

### Prerequisites

- Docker and Docker Compose installed on your system
- Git for cloning the repository

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/FabianoPainkillers/pratica_vibe_coding.git
   cd pratica_vibe_coding
   ```

2. Create a `.env` file in the root directory with the following environment variables:
   ```
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=postgres
   POSTGRES_DB=todoapp
   POSTGRES_HOST=db
   POSTGRES_PORT=5432
   ```

3. Build and start the containers:
   ```bash
   make build
   make up
   ```

4. The application will be available at:
   - Backend API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs
   - Frontend: Open `frontend/index.html` in your browser

### Available Make Commands

- `make build` - Build the Docker images
- `make up` - Start the backend and database containers
- `make down` - Stop the containers
- `make logs` - View logs from the backend container
- `make shell` - Open a shell in the backend container
- `make install` - Install dependencies in the container

## API Endpoints

- `GET /todos/` - List all todos
- `POST /todos/` - Create a new todo
- `GET /todos/{todo_id}` - Get a specific todo by ID

## Development

### Local Development

For local development without Docker:

1. Set up a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the application:
   ```bash
   uvicorn app.main:app --reload
   ```

### Database Migrations

This project uses Alembic for database migrations:

```bash
alembic revision --autogenerate -m "Description of changes"
alembic upgrade head
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
