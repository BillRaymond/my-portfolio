export type SiteProfile = {
	name: string;
	role: string;
	tagline: string;
	intro: string;
	location: string;
	availability: string;
	primaryCta: {
		label: string;
		href: string;
	};
	secondaryCta: {
		label: string;
		href: string;
	};
	stats: Array<{
		label: string;
		value: string;
	}>;
};

export type Service = {
	title: string;
	summary: string;
	details: string[];
};

export type OutcomeHighlight = {
	client: string;
	title: string;
	summary: string;
	impact: string;
};

export type ContactConfig = {
	formAction: string;
	method: 'POST';
	successMessage: string;
	email: string;
	linkedin: string;
	calendly: string;
};

export type SiteMetadata = {
	title: string;
	description: string;
	keywords: string;
	ogTitle: string;
	ogDescription: string;
};

export const siteMetadata: SiteMetadata = {
	title: 'Bill Raymond | AI Leadership Portfolio',
	description:
		'Bill Raymond helps organizations shape AI strategy, guide cross-functional delivery, and turn emerging technology into credible client and product outcomes.',
	keywords:
		'Bill Raymond, AI leadership, AI strategy, consulting, portfolio, product leadership, digital transformation',
	ogTitle: 'Bill Raymond | AI Leadership Portfolio',
	ogDescription:
		'Client-focused AI leadership portfolio featuring consulting services, selected outcomes, and a contact path for new engagements.'
};

export const siteProfile: SiteProfile = {
	name: 'Bill Raymond',
	role: 'AI Leadership Consultant',
	tagline: 'Creative AI leadership that turns ambiguous opportunities into grounded, shippable work.',
	intro:
		'I partner with teams that want the upside of AI without the theater. That means sharper strategy, practical roadmaps, clearer storytelling, and execution that earns trust with stakeholders.',
	location: 'Based in the United States, collaborating remotely with distributed teams.',
	availability: 'Open to consulting engagements, strategy sprints, and advisory partnerships.',
	primaryCta: {
		label: 'Start a Conversation',
		href: '#contact'
	},
	secondaryCta: {
		label: 'See Selected Outcomes',
		href: '#outcomes'
	},
	stats: [
		{ value: 'Strategy to delivery', label: 'Support across vision, planning, and launch' },
		{ value: 'Cross-functional', label: 'Built for product, design, engineering, and leadership teams' },
		{ value: 'AI with judgment', label: 'Focused on credible adoption, not novelty for its own sake' }
	]
};

export const services: Service[] = [
	{
		title: 'AI strategy and positioning',
		summary:
			'I help leaders define where AI genuinely creates leverage, which bets deserve attention now, and how to communicate that strategy without hype.',
		details: [
			'Executive workshops and strategy sessions',
			'Offer and roadmap framing for internal or client-facing initiatives',
			'Decision support for prioritization, messaging, and stakeholder alignment'
		]
	},
	{
		title: 'Product and delivery leadership',
		summary:
			'When the direction is set, I translate it into concrete delivery plans, clearer team collaboration, and momentum that survives real-world constraints.',
		details: [
			'Discovery-to-delivery planning for AI-enabled products',
			'Cross-functional operating rhythm across product, design, and engineering',
			'Hands-on leadership for ambiguous, fast-moving initiatives'
		]
	},
	{
		title: 'Advisory support for client work',
		summary:
			'I step into high-trust conversations with clients and partners to sharpen offers, shape narratives, and guide engagement design.',
		details: [
			'Proposal and engagement shaping',
			'Client-facing storytelling and workshop facilitation',
			'Ongoing thought partnership for growth-stage teams and leaders'
		]
	}
];

export const outcomeHighlights: OutcomeHighlight[] = [
	{
		client: 'Selected client outcome',
		title: 'Aligned a fuzzy AI initiative into a credible delivery plan',
		summary:
			'Worked with leadership to turn broad AI ambition into a focused roadmap, clearer internal narrative, and practical next steps teams could actually execute.',
		impact: 'Result: stronger stakeholder confidence and a path from exploration to delivery.'
	},
	{
		client: 'Selected client outcome',
		title: 'Reframed technical complexity into a story buyers could understand',
		summary:
			'Helped connect product strategy, AI capability, and client messaging so a promising offer felt concrete, differentiated, and easier to sell.',
		impact: 'Result: a sharper market story and more confident client conversations.'
	},
	{
		client: 'Selected client outcome',
		title: 'Created momentum across a cross-functional team under ambiguity',
		summary:
			'Introduced structure, decision clarity, and communication patterns that let design, engineering, and product move together instead of in parallel silos.',
		impact: 'Result: faster alignment, fewer stalled decisions, and healthier execution.'
	}
];

export const about = {
	heading: 'Grounded, collaborative, and allergic to empty AI theater.',
	body: [
		'I bring a leadership style that is warm, pragmatic, and creative. I like ambitious work, but I care just as much about whether the work makes sense for the people who have to live with it.',
		'That usually means translating between disciplines, finding the real decision hiding inside the noise, and helping teams move with more clarity and less churn.',
		'If we work together, expect thoughtful structure, direct communication, and a bias toward tangible outcomes.'
	]
};

export const contactConfig: ContactConfig = {
	formAction: 'https://formspree.io/f/placeholder',
	method: 'POST',
	successMessage:
		'Replace the placeholder Formspree endpoint in src/lib/content/site.ts before launch so messages reach you.',
	email: 'bill@example.com',
	linkedin: 'https://www.linkedin.com/in/bill-raymond/',
	calendly: 'https://calendly.com/'
};
