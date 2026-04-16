<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { siteMetadata } from '$lib/content/site';

	let { children } = $props();
</script>

<svelte:head>
	<title>{siteMetadata.title}</title>
	<meta name="description" content={siteMetadata.description} />
	<meta name="keywords" content={siteMetadata.keywords} />
	<meta property="og:title" content={siteMetadata.ogTitle} />
	<meta property="og:description" content={siteMetadata.ogDescription} />
	<meta property="og:type" content="website" />
	<meta name="theme-color" content="#f15a29" />
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
