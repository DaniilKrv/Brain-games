install:
	npm ci
	node bin/brain-games.js
	node bin/brain-even.js
publish:
	npm publish --dry-run
lint: 
	npx eslint