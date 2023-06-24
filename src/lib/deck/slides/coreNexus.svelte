<script>
	import { languageStore } from '$lib/store';
	import Slide from '../slide.svelte';
</script>

<Slide id="corenexus">
	<div class="flex justify-center items-center gap-4">
		<img src="CoreNexus_Logo.png" alt="CoreNexus Logo" class="h-12" />
		<a href="https://corenexus.is" target="_blank">https://corenexus.is</a>
	</div>

	{#if $languageStore === 'en'}
		<ul>
			<li>
				<b>Unify your Social Networks</b> : Connect all your social profiles, and own your data. You
				retain all rights to your content, media, links, and private sharing. Your Core Network Identity
				is your key to everything.
			</li>
			<li>
				<b>Curate your Own Web</b> : Transform your experience of the web. Bring together the content
				you want, organize it any way you want, and understand what you’ve collected through powerful
				visualizations.
			</li>
			<li>
				<b>Isomorphic Views</b> : Why see your news feed in a single format? Why not view it in a 3D
				timeline, or see relationships between people and posts in an interconnected graph? Transform
				your views for powerful insights and sensemaking.
			</li>
			<li>
				<b>Organize Your Data</b> : Interested in regional posts or people? Want to know what’s similar
				in your view of the web? Want to sort by tag, title, image, or any other filtration format? It’s
				time.
			</li>
		</ul>
	{:else if $languageStore === 'fr'}
		<ul>
			<li>
				<b>Unifiez vos réseaux sociaux</b> : Connectez tous vos profils sociaux et possédez vos données.
				Vous conservez tous les droits sur votre contenu, médias, liens et partage privé. Votre identité
				de réseau central est votre clé pour tout.
			</li>
			<li>
				<b>Organisez votre propre Web</b> : Transformez votre expérience du web. Rassemblez le contenu
				que vous voulez, organisez-le comme vous le souhaitez et comprenez ce que vous avez collecté
				grâce à de puissantes visualisations.
			</li>
			<li>
				<b>Vues isomorphiques</b> : Pourquoi voir votre fil d'actualité dans un seul format ? Pourquoi
				ne pas le voir dans une chronologie 3D, ou voir les relations entre les personnes et les publications
				dans un graphe interconnecté ? Transformez vos vues pour des insights puissants et une prise
				de sens.
			</li>
			<li>
				<b>Organisez vos données</b> : Intéressé par les publications ou les personnes régionales ? Vous
				voulez savoir ce qui est similaire dans votre vue du web ? Vous voulez trier par tag, titre,
				image ou tout autre format de filtration ? Il est temps.
			</li>
		</ul>
	{/if}

	<div class="features">
		<img src="CoreNexus-features.png" alt="CoreNexus Features" />
	</div>
</Slide>
