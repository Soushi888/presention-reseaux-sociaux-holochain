<script>
	import { languageStore } from '$lib/store';
	import Slide from '../slide.svelte';
</script>

<Slide>
	<Slide id="fluxsocial">
		<div class="flex justify-center items-center gap-4 font-bold">
			<p>FluxSocial</p>
			<img src="flux-logo.png" alt="FluxSocial logo" />
			<a href="https://fluxsocial.io" target="_blank">https://fluxsocial.io</a>
		</div>

		<Slide>
			{#if $languageStore === 'fr'}
				<ul>
					<li>
						Flux est une plateforme entièrement distribuée, centrée sur l'humain, qui facilite la
						coordination sociale avec plus de confidentialité, d'autonomie et de flexibilité.
					</li>
					<li>Fonctionnalités actuelles dans le style de Discord.</li>
					<li>Intégrera des fonctionnalités crypto-natives.</li>
				</ul>
			{:else}
				<ul>
					<li>
						Flux is a fully distributed, human-centric platform that makes social coordination
						easier with more privacy, autonomy, and flexibility.
					</li>
					<li>Current features in the style of Discord.</li>
					<li>Will integrate crypto-native features.</li>
				</ul>
			{/if}

			<div class="flex justify-center">
				<img src="flux_banner.png" alt="FluxSocial banner" class="w-4/5" />
			</div>
		</Slide>
	</Slide>

	<Slide>
		<p>Group Messaging & Audio</p>
		<img src="group-messaging.png" alt="Groupe Messaging with Flux" />
	</Slide>

	<Slide>
		<p>Wikis, Discussion Feeds, and More</p>
		<img src="wiki.png" alt="Wikis, Discussion Feeds, and More" />
	</Slide>

	<Slide>
		<p>Crypto-Native Functionality</p>
		<img src="crypto-native.png" alt="Crypto-Native Functionality" />
	</Slide>
</Slide>
