<script>
	import { languageStore } from '$lib/store';
	import Slide from '../slide.svelte';
</script>

<Slide>
	<p>Conclusion</p>

	{#if $languageStore === 'fr'}
		<ul>
			<li>
				La nature agent-centrique de Holochain permet : <ul>
					<li><u>Flexibilité</u></li>
					<li><u>Modularité</u></li>
					<li><u>Souverainité des données</u></li>
				</ul>
			</li>
			<li>
				Ce nouveau type d'architecture 100% pair à pair ouvre la voie à de nouvelle façons de penser
				les applications web, surtout celle de nature collaborative.
			</li>
			<li>
				Cette technologie est suffisament générique pour être naturellement interopérable avec les
				blockchains, API centralisées ou autre application Holochain. Ce qui en fait une technologie
				"niveau 0" de choix pour les applications web.
			</li>
			<li>
				Intégration avec les crypto monnaies blockchain, mais aussi avec les <u>"mutual currency"</u
				>
				(approche économique agent-centric).
			</li>
		</ul>
	{:else}
		<ul>
			<li>
				The agent-centric nature of Holochain allows: <ul>
					<li><u>Flexibility</u></li>
					<li><u>Modularity</u></li>
					<li><u>Data sovereignty</u></li>
				</ul>
			</li>
			<li>
				This new type of 100% peer-to-peer architecture opens the way to new ways of thinking web
				applications, especially those of a collaborative nature.
			</li>
			<li>
				This technology is generic enough to be naturally interoperable with blockchains,
				centralized APIs or other Holochain application. Which makes it a "level 0" technology of
				choice for web applications.
			</li>
			<li>
				Integration with blockchain cryptocurrencies, but also with <u>"mutual currency"</u>
				(agent-centric economic approach).
			</li>
		</ul>
	{/if}

	<div class="border-b-2 mt-4" />

	<div class="flex justify-center">
		<img src="/Holochain-Logo-Colors.png" alt="Holochain Logo" class="w-3/4" />
	</div>
</Slide>
