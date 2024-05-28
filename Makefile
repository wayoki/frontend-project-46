install:
	npm ci

gendiff:
	node bin/gendiff.js

test:
	npm test

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix