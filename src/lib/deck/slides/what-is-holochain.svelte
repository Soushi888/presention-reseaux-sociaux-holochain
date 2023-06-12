<script>
	import Slide from '../slide.svelte';
</script>

<Slide>
	<p>Qu'est-ce qu'Holochain ?</p>
	<Slide>
		<ul>
			<li>
				Holochain est un framework pour créer des applications et un protocole p2p open source.
			</li>
			<li>Il permet de créer des applications distribuées, sécurisées, scalables et équitables.</li>
			<li>Chaque application Holochain peut créer son propre réseau.</li>
			<li>
				Ce type d’application est agent-centric (centré sur les utilisateurs) comparé au model
				data-centric (centré sur la source des données) des blockchain.
			</li>
			<li>Chaque agent (périphérique / machine) du réseau détient sa propre “source-chain”.</li>
			<li>Les données sont signées par l’agent qui les a créées.</li>
			<li>Les données sont stockées localement sur chaque agent.</li>
			<li>
				Le réseau Holo est une plateforme d'hébergement peer-to-peer distribuée pour les
				applications Holochain (hApps).
			</li>
		</ul>

		<div class="flex justify-center">
			<div class="bg-slate-300 p-5 rounded-lg flex justify-center items-center h-60 w-fit">
				<img src="1.1-architecture-comparison.png" alt="architecture comparison" />
			</div>
		</div>
	</Slide>
</Slide>
