<script>
	import { languageStore } from '$lib/store';
	import Slide from '../slide.svelte';
</script>

<Slide id="hylo">
	<div class="flex justify-center items-center gap-4">
		<img src="hylo-logo.png" alt="Hylo logo" class="h-24" />
		<a href="https://hylo.com" target="_blank">https://hylo.com</a>
	</div>

	{#if $languageStore === 'fr'}
		<ul>
			<li>
				Hylo est un outil de coordination open-source dirigé par la communauté et destiné aux
				groupes engagés (purpose-driven).
			</li>
			<li>
				Fonctionnalités : discussions, offres et demandes, ressources, projets, événements, cartes
				géographiques, riches annuaires de membres et messages directs.
			</li>
			<li>Actuellement en version Web 2. Développement de la version Holochain en cours.</li>
		</ul>
	{:else}
		<ul>
			<li>Hylo is a community-driven, open-source coordination tool for purpose-driven groups.</li>
			<li>
				Features: discussions, offers and requests, resources, projects, events, maps, rich member
				directories, and direct messages.
			</li>
			<li>Currently in Web 2. Holochain version in development.</li>
		</ul>
	{/if}

	<div class="flex h-[300px] justify-between">
		<img src="hylo-groups.png" alt="Hylo groups" class="w-1/2" />
		<img src="Devices.png" alt="Hylo devices" />
	</div>
</Slide>
