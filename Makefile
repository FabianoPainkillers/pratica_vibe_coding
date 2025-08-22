# Makefile for backend app container management

.PHONY: build up down logs shell

# Build the Docker images
build:
	docker-compose build

# Start the backend and database containers
up:
	docker-compose up -d

# Stop the containers
down:
	docker-compose down

# View logs from the backend container
logs:
	docker-compose logs -f web

# Open a shell in the backend container
shell:
	docker-compose exec web /bin/bash

# Install dependencies (runs pip install in the container)
install:
	docker-compose run --rm web pip install --no-cache-dir --upgrade -r /code/requirements.txt
