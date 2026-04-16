import { describe, expect, it } from 'vitest';
import {
	about,
	contactConfig,
	outcomeHighlights,
	services,
	siteMetadata,
	siteProfile
} from '../src/lib/content/site';

describe('portfolio content configuration', () => {
	it('defines the client-facing homepage identity', () => {
		expect(siteProfile.name).toBe('Bill Raymond');
		expect(siteProfile.primaryCta.href).toBe('#contact');
		expect(siteProfile.secondaryCta.href).toBe('#outcomes');
		expect(siteMetadata.title).toContain('Bill Raymond');
		expect(siteMetadata.description).toContain('AI');
	});

	it('includes services, outcomes, and contact settings for the homepage', () => {
		expect(services).toHaveLength(3);
		expect(services.map((service) => service.title)).toContain('AI strategy and positioning');

		expect(outcomeHighlights).toHaveLength(3);
		expect(outcomeHighlights[0]?.impact).toContain('Result:');

		expect(about.body.length).toBeGreaterThan(0);
		expect(contactConfig.formAction).toBe('https://formspree.io/f/placeholder');
		expect(contactConfig.method).toBe('POST');
	});
});
