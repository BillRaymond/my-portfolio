<svelte:head>
	<title>Bill Raymond | AI Leadership Portfolio</title>
	<meta
		name="description"
		content="Bill Raymond helps teams shape AI strategy, guide delivery, and turn ambiguous opportunities into grounded client and product outcomes."
	/>
</svelte:head>

<script lang="ts">
	import { onMount } from 'svelte';
	import { withGsapContext } from '$lib';
	import {
		about,
		contactConfig,
		outcomeHighlights,
		services,
		siteProfile
	} from '$lib/content/site';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import OutcomesSection from '$lib/components/OutcomesSection.svelte';
	import ServicesSection from '$lib/components/ServicesSection.svelte';

	let page: HTMLElement | undefined;

	onMount(() => {
		if (!page) {
			return;
		}

		return withGsapContext(page, (gsap) => {
			gsap.set('.reveal', { y: 26, opacity: 0 });
			gsap.set('.orb', { scale: 0.92, opacity: 0.5 });

			gsap
				.timeline({ defaults: { ease: 'power3.out' } })
				.to('.reveal', {
					y: 0,
					opacity: 1,
					duration: 0.75,
					stagger: 0.08
				})
				.to(
					'.orb',
					{
						scale: 1,
						opacity: 1,
						duration: 1.2,
						stagger: 0.14
					},
					0.12
				);

			gsap.to('.orb-coral', {
				y: 12,
				x: 8,
				duration: 4.6,
				repeat: -1,
				yoyo: true,
				ease: 'sine.inOut'
			});

			gsap.to('.orb-gold', {
				y: -10,
				x: -10,
				duration: 5.2,
				repeat: -1,
				yoyo: true,
				ease: 'sine.inOut'
			});
		});
	});
</script>

<div bind:this={page} class="portfolio-shell">
	<div class="background-wash" aria-hidden="true"></div>

	<header class="site-header">
		<a class="brand-mark" href="#top" aria-label="Bill Raymond home">BR</a>
		<nav class="site-nav" aria-label="Primary">
			<a href="#services">Services</a>
			<a href="#outcomes">Outcomes</a>
			<a href="#about">About</a>
			<a href="#contact">Contact</a>
		</nav>
	</header>

	<main id="top" class="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 pb-16 pt-6 sm:px-8 lg:px-10">
		<HeroSection profile={siteProfile} />
		<ServicesSection {services} />
		<OutcomesSection outcomes={outcomeHighlights} />
		<AboutSection {about} />
		<ContactSection contact={contactConfig} />
	</main>
</div>
