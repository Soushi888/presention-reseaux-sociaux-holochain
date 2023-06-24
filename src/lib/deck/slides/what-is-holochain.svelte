<script>
	import { languageStore } from '$lib/store';
	import Slide from '../slide.svelte';
</script>

<Slide id="what-is-holochain">
	{#if $languageStore === 'fr'}
		<p>Qu'est-ce qu'Holochain ?</p>

		<ul>
			<li>
				Holochain est un framework pour créer des applications et un <u>protocole p2p open source</u
				>.
			</li>
			<li>Il permet de créer des applications distribuées, sécurisées, scalables et équitables.</li>
			<li>Chaque application Holochain est son propre réseau.</li>
			<li>
				Ce type d’application est <u>agent-centric</u> (centré sur les utilisateurs) comparé au model
				data-centric (centré sur la source des données) des blockchains et du web traditionnel.
			</li>
			<li>
				Chaque agent (périphérique / machine) du réseau détient sa propre <u>“source-chain”</u>.
			</li>
			<li>Les données sont signées par l’agent qui les a créées et sont stockés localement.</li>
			<li>
				Le <u>réseau Holo</u> est une plateforme d'hébergement peer-to-peer distribuée pour les applications
				Holochain (hApps).
			</li>
		</ul>
	{:else}
		<p>What is Holochain ?</p>

		<ul>
			<li>
				Holochain is a framework for building applications and an <u>open source p2p protocol</u>.
			</li>
			<li>It allows to create distributed, secure, scalable and fair applications.</li>
			<li>Each Holochain application is its own network.</li>
			<li>
				This type of application is <u>agent-centric</u> (user-centric) compared to the data-centric
				model of blockchains and the traditional web.
			</li>
			<li>
				Each agent (device / machine) in the network holds its own <u>“source-chain”</u>.
			</li>
			<li>Data is signed by the agent that created it and stored locally.</li>
			<li>
				The <u>Holo network</u> is a distributed peer-to-peer hosting platform for Holochain applications
				(hApps).
			</li>
		</ul>
	{/if}

	<div class="flex justify-center">
		<div class="bg-slate-300 p-5 rounded-lg flex justify-center items-center h-60 w-fit">
			<img src="architecture-comparison.png" alt="architecture comparison" />
		</div>
	</div>
</Slide>
