<script>
	import { languageStore } from '$lib/store';
	import Slide from '../slide.svelte';
</script>

<Slide id="ad4m">
	<div class="flex justify-center items-center gap-4">
		<img src="ad4m-logo.png" alt="AD4M logo" />
		<p class="text-xl font-bold">Agent-Centric Distributed Application Meta-ontology</p>
		<a href="https://ad4m.dev" target="_blank">https://ad4m.dev</a>
	</div>

	{#if $languageStore === 'fr'}
		<ul>
			<li>AD4M imite le monde réel par le biais de réseaux humains et de langues.</li>
			<li>
				<u>Agnostique technologiquement</u> : Conçue pour permettre l'intéroparibilité entre diverses
				technologies telles que Holochain, les blockchains, d'autres systèmes décentralisés, des API
				centralisées, etc.
			</li>
			<li>Approche sémantique : Agents, langage et perspectives</li>
		</ul>
	{:else}
		<ul>
			<li>AD4M mimics the real world through human networks and languages.</li>
			<li>
				<u>Technologically agnostic</u>: Designed to enable interoperability between various
				technologies such as Holochain, blockchains, other decentralized systems, centralized APIs,
				etc.
			</li>
			<li>Semantic approach: Agents, language, and perspectives</li>
		</ul>
	{/if}

	<div class="flex justify-center">
		<img src="shared-perspective.png" alt="AD4M Shared perspective" class="h-[400px]" />
	</div>
</Slide>
