<script>
	import { languageStore } from '$lib/store';
	import Slide from '../slide.svelte';
</script>

<Slide id="sommaire">
	{#if $languageStore === 'fr'}
		<p>Sommaire de la présentation :</p>
	{:else if $languageStore === 'en'}
		<p>Summary of the presentation :</p>
	{/if}

	<ul><li class="text-2xl"><a href="#/what-is-holochain">Qu'est-ce que Holochain ?</a></li></ul>

	<div class="flex justify-around">
		<div>
			{#if $languageStore === 'fr'}
				<p>4 réseaux sociaux :</p>
			{:else if $languageStore === 'en'}
				<p>4 social networks :</p>
			{/if}
			<ul>
				<li><a href="#/fluxsocial">FluxSocial</a></li>
				<li><a href="#/hylo">Hylo</a></li>
				<li><a href="#/hummhive">HummHive</a></li>
				<li><a href="#/corenexus">CoreNexus</a></li>
			</ul>
		</div>
		<div>
			<p>2 frameworks :</p>
			<ul>
				<li><a href="#/ad4m">AD4M</a></li>
				<li><a href="#/neighborhoods">Neighbourhoods</a></li>
			</ul>
		</div>
	</div>
</Slide>
