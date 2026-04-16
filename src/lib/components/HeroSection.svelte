<script lang="ts">
	import type { SiteProfile } from '$lib/content/site';

	type Props = {
		profile: SiteProfile;
	};

	let { profile }: Props = $props();
</script>

<section class="hero-panel section-shell overflow-hidden" aria-labelledby="hero-title">
	<div class="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.9fr)] lg:items-end">
		<div class="space-y-7">
			<p class="eyebrow reveal">AI leadership for client-facing teams</p>
			<div class="space-y-5">
				<h1 id="hero-title" class="display-title reveal">{profile.name}</h1>
				<p class="max-w-2xl text-xl leading-8 text-[var(--text-soft)] reveal sm:text-2xl">
					{profile.tagline}
				</p>
				<p class="max-w-2xl text-base leading-8 text-[var(--text-muted)] reveal">
					{profile.intro}
				</p>
			</div>

			<div class="flex flex-col gap-4 sm:flex-row reveal">
				<a class="button-primary" href={profile.primaryCta.href}>{profile.primaryCta.label}</a>
				<a class="button-secondary" href={profile.secondaryCta.href}>{profile.secondaryCta.label}</a>
			</div>

			<div class="flex flex-wrap gap-3 pt-2 reveal">
				<span class="pill">{profile.role}</span>
				<span class="pill">{profile.location}</span>
				<span class="pill">{profile.availability}</span>
			</div>
		</div>

		<aside class="hero-card reveal" aria-label="Portfolio overview">
			<div class="orb orb-coral" aria-hidden="true"></div>
			<div class="orb orb-gold" aria-hidden="true"></div>
			<div class="space-y-6">
				<p class="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-ink)]">
					How I help
				</p>
				<ul class="space-y-4">
					{#each profile.stats as stat}
						<li class="grid gap-1 border-t border-[var(--border-strong)]/45 pt-4 first:border-t-0 first:pt-0">
							<span class="text-lg font-semibold text-[var(--text-strong)]">{stat.value}</span>
							<span class="text-sm leading-6 text-[var(--text-muted)]">{stat.label}</span>
						</li>
					{/each}
				</ul>
			</div>
		</aside>
	</div>
</section>
