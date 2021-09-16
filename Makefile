.ONESHELL:
SHELL:=/usr/bin/env sh
ROOT_DIR:="$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))"
.DEFAULT: help
.PHONY: help
ifndef VERBOSE
.SILENT:
endif

init: generate-env pull

generate-env:
	echo "Copying .env file if it does not exist...";
	[ -f "${ROOT_DIR}/.env" ] || cp -n "${ROOT_DIR}/.env.sample" "${ROOT_DIR}/.env" 2>/dev/null

pull:
	echo "Pulling docker images...";
	docker-compose pull

down:
	docker-compose down --remove-orphans

up: down pull
	docker-compose up
upd:
	docker-compose up -d

prism: up

verify: upd
	docker-compose run pact-cli verify  --provider-base-url="https://virtserver.swaggerhub.com/shrikeh/Diving/1.0.0" --provider="Shrikeh.net Diving Kit Provider"

logs: upd
	docker-compose logs -f

stub: down
	docker-compose run pact-stub

reload: down upd logs
