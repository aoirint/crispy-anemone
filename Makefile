ROOT_DIR = $(dir $(realpath $(firstword $(MAKEFILE_LIST))))

docker-build:
	docker build . -t aoirint/crispy-anemone

run-build: docker-build
	docker run --rm -it \
		-v "$(ROOT_DIR)/build:/code/build" \
		aoirint/crispy-anemone \
		npm run build

