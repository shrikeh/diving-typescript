.ONESHELL:
SHELL:=/usr/bin/env sh
ROOT_DIR:="$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))"
.DEFAULT: help
.PHONY: help
ifndef VERBOSE
.SILENT:
endif
down:
	docker-compose down --remove-orphans

up: down

upd:
	docker-compose up -d

prism: up

verify: up
	docker-compose run pact-cli verify  --provider-base-url="https://virtserver.swaggerhub.com/shrikeh/Diving/1.0.0/" --provider="Shrikeh.net Diving Kit Provider"

logs: upd
	docker-compose logs -f
