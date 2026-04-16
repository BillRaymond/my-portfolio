<script lang="ts">
	import type { OutcomeHighlight } from '$lib/content/site';

	type Props = {
		outcomes: OutcomeHighlight[];
	};

	let { outcomes }: Props = $props();
</script>

<section id="outcomes" class="section-shell" aria-labelledby="outcomes-title">
	<div class="section-header">
		<p class="eyebrow">Selected outcomes</p>
		<h2 id="outcomes-title" class="section-title">Proof that stays grounded in business reality.</h2>
		<p class="section-copy">
			These short highlights are intentionally outcome-led. They show the kind of ambiguity I help
			teams navigate and the momentum that follows.
		</p>
	</div>

	<div class="grid gap-5 lg:grid-cols-3">
		{#each outcomes as outcome}
			<article class="content-card content-card--contrast reveal">
				<p class="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-gold)]">
					{outcome.client}
				</p>
				<h3 class="mt-4 text-2xl font-semibold tracking-tight text-[var(--surface-plain)]">
					{outcome.title}
				</h3>
				<p class="mt-4 text-base leading-7 text-[color:rgba(255,247,236,0.82)]">
					{outcome.summary}
				</p>
				<p class="mt-6 text-sm leading-6 text-[var(--surface-plain)]">{outcome.impact}</p>
			</article>
		{/each}
	</div>
</section>
