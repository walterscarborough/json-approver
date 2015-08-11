test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--ui bdd \
		--reporter spec \
		--timeout 6s

.PHONY: test
