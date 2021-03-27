ROOT_DIR = $(dir $(realpath $(firstword $(MAKEFILE_LIST))))

docker-build:
	docker build . -t aoirint/crispy-anemone

run-start: docker-build
	docker run --rm -it \
		--env-file "$(ROOT_DIR)/.env.local" \
		-v "$(ROOT_DIR)/build:/code/build" \
		-p "127.0.0.1:3000:3000" \
		aoirint/crispy-anemone \
		npm run start

run-build: docker-build
	docker run --rm -it \
		--env-file "$(ROOT_DIR)/.env.local" \
		-v "$(ROOT_DIR)/build:/code/build" \
		aoirint/crispy-anemone \
		npm run build
