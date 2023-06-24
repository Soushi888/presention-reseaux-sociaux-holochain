<script lang="ts">
	import '../app.postcss';
	import Slides from '$lib/deck/slides.svelte';
	import { languageStore } from '$lib/store';
</script>

<svelte:head>
	{#if $languageStore === 'fr'}
		<title>Réseaux sociaux avec Holochain</title>
	{:else if $languageStore === 'en'}
		<title>Social Networks with Holochain</title>
	{/if}
</svelte:head>

<Slides />
