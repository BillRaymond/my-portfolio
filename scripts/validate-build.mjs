import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

execSync('npm run build', { stdio: 'inherit' });

const homepagePath = path.join(process.cwd(), 'build', 'index.html');

if (!fs.existsSync(homepagePath)) {
	throw new Error('Expected build/index.html to exist after production build.');
}

const html = fs.readFileSync(homepagePath, 'utf8');

const requiredSnippets = [
	'Bill Raymond',
	'Flexible consulting',
	'Selected outcomes',
	'Start a conversation',
	'https://formspree.io/f/placeholder'
];

for (const snippet of requiredSnippets) {
	if (!html.includes(snippet)) {
		throw new Error(`Expected production build to include: ${snippet}`);
	}
}

const orderedSections = ['id="services"', 'id="outcomes"', 'id="about"', 'id="contact"'];
let lastIndex = -1;

for (const marker of orderedSections) {
	const index = html.indexOf(marker);

	if (index === -1) {
		throw new Error(`Expected production build to include section marker: ${marker}`);
	}

	if (index < lastIndex) {
		throw new Error(`Expected section marker to appear after the previous one: ${marker}`);
	}

	lastIndex = index;
}

console.log('Static build validation passed.');
