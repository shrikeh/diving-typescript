.ONESHELL:
SHELL:=/usr/bin/env sh
ROOT_DIR:="$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))"
.DEFAULT: help
.PHONY: help
ifndef VERBOSE
.SILENT:
endif
down:
	docker-compose down

up: down
	docker-compose up

prism: up

