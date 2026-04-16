<script lang="ts">
	type AboutContent = {
		heading: string;
		body: string[];
	};

	type Props = {
		about: AboutContent;
	};

	let { about }: Props = $props();
</script>

<section id="about" class="section-shell" aria-labelledby="about-title">
	<div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,1.1fr)] lg:items-start">
		<div class="section-header lg:sticky lg:top-10">
			<p class="eyebrow">About Bill</p>
			<h2 id="about-title" class="section-title">{about.heading}</h2>
		</div>

		<div class="content-card reveal">
			<div class="space-y-5 text-lg leading-8 text-[var(--text-soft)]">
				{#each about.body as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>
		</div>
	</div>
</section>
