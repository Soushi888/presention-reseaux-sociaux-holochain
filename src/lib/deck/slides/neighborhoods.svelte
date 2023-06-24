<script>
	import { languageStore } from '$lib/store';
	import Slide from '../slide.svelte';
</script>

<Slide id="neighborhoods">
	<div class="flex justify-center items-center gap-4">
		<p class="text-3xl font-bold">Neighborhoods</p>
		<img src="neighborhoods_banner.webp" alt="Neighborhoods banner" class="w-60" />
		<a href="https://neighbourhoods.network" target="_blank">https://neighbourhoods.network</a>
	</div>

	<div class="flex justify-between items-center">
		{#if $languageStore === 'fr'}
			<ul class="w-1/2">
				<li>Architecture de <u>senseur social</u>.</li>
				<li>
					Un <u>"sensemaker"</u> qui préserve les expressions de la culture du groupe en tant que
					<u>métadonnées</u>
					afin d'améliorer l'utilisabilité de ces données lorsqu'elles sont portées dans de nouveaux
					contextes par des individus et dans le cadre d'un accord de groupe à groupe.
				</li>
				<li>
					Élargit considérablement la capacité à raisonner sur la réputation, la crédibilité et
					d'autres données sociales de manière nuancée.
				</li>
				<li>
					Une place de marché d'outils de coordination sociale de base avec un système de crédit
					mutuel (Jeton $NHT) intégré afin d'encourager la création de modules standardisés et
					interopérables.
				</li>
			</ul>
		{:else}
			<ul class="w-1/2">
				<li>Social sensor architecture.</li>
				<li>
					A <u>sensemaker</u> that preserves expressions of group culture as <u>metadata</u> in order
					to improve the usability of that data when carried into new contexts by individuals and as
					part of group-to-group agreements.
				</li>
				<li>
					Significantly expands the ability to reason about reputation, credibility, and other
					social data in nuanced ways.
				</li>
				<li>
					A marketplace of basic social coordination tools with an integrated mutual credit system
					($NHT Token) to incentivize the creation of standardized, interoperable modules.
				</li>
			</ul>
		{/if}

		<div class="flex justify-center w-1/3">
			<img src="neighborhoods_schema.png" alt="Neighborhoods schema" />
		</div>
	</div>
</Slide>
