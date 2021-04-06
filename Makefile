install:
	npm ci

brain-games:
	node src/bin/brain-games.js

brain-even:
	node src/bin/brain-even.js

brain-calc:
	node src/bin/brain-calc.js

brain-gcd:
	node src/bin/brain-gcd.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
