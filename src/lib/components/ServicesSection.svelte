<script lang="ts">
	import type { Service } from '$lib/content/site';

	type Props = {
		services: Service[];
	};

	let { services }: Props = $props();
</script>

<section id="services" class="section-shell" aria-labelledby="services-title">
	<div class="section-header">
		<p class="eyebrow">Flexible consulting</p>
		<h2 id="services-title" class="section-title">Support that adapts to the shape of the work.</h2>
		<p class="section-copy">
			I’m not here to force your problem into a prepackaged box. These are the ways I most
			often help teams build momentum.
		</p>
	</div>

	<div class="grid gap-5 lg:grid-cols-3">
		{#each services as service}
			<article class="content-card reveal">
				<p class="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-ink)]">
					{service.title}
				</p>
				<p class="mt-4 text-base leading-7 text-[var(--text-muted)]">{service.summary}</p>
				<ul class="mt-6 space-y-3 text-sm leading-6 text-[var(--text-soft)]">
					{#each service.details as detail}
						<li class="flex gap-3">
							<span class="mt-2 h-2 w-2 rounded-full bg-[var(--accent-coral)]"></span>
							<span>{detail}</span>
						</li>
					{/each}
				</ul>
			</article>
		{/each}
	</div>
</section>
