.PHONY: build up down start stop restart logs ps login

build:
	docker-compose build

up:
	docker-compose up -d

watch:
	WATCH_FILES=1 docker-compose up -d
	docker-compose logs --tail=10 -f

down:
	docker-compose down

debug: down
	WATCH_FILES=1 docker-compose -f docker-compose.yml -f ./docker/debug.yml up -d
	docker-compose logs --tail=100 -f

start:
	docker-compose start

stop:
	docker-compose stop

restart: down watch

logs:
	docker-compose logs --tail=10 -f

ps:
	docker-compose ps

login:
	docker-compose run -w /application app /bin/bash

setup:
	docker-compose run -w /application app /bin/bash -c "npm install && npm run setup"
