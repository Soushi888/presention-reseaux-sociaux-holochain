<script>
	import { languageStore } from '$lib/store';
	import Slide from '../slide.svelte';
</script>

<Slide id="hummhive">
	<div class="flex justify-center items-center gap-20">
		<img src="hummhive-logo.png" alt="HummHive logo" class="h-16" />
		<a href="https://humm.earth" target="_blank">https://humm.earth</a>
	</div>

	{#if $languageStore === 'fr'}
		<ul>
			<li>
				Le protocole HummHive et l'application HummHive permettent aux utilisateurs de créer, de
				stocker et de partager des histoires et des médias en toute liberté et sans interférence ni
				intermédiaire.
			</li>
			<li>
				HummHive permet aux utilisateurs de gérer leur propre public et de choisir qui peut accéder
				à leurs histoires et à leurs médias.
			</li>
			<li>
				HummHive permet aux utilisateurs de prendre des responsabilités radicales et de choisir
				comment ils veulent que l'application fonctionne pour eux.
			</li>
		</ul>
	{:else}
		<ul>
			<li>
				The HummHive protocol and HummHive app allow users to create, store and share stories and
				media freely and without interference or intermediaries.
			</li>
			<li>
				HummHive allows users to manage their own audience and choose who can access their stories
				and media.
			</li>
			<li>
				HummHive allows users to take radical responsibility and choose how they want the app to
				work for them.
			</li>
		</ul>
	{/if}

	<div class="flex justify-between max-h-[300px] gap-5">
		<img src="hummHive.png" alt="HummHive 1" class="w-1/5" />
		<img src="hummHive2.png" alt="HummHive 2" class="w-2/5" />
		<img src="hummHive3.png" alt="HummHive 3" class="w-2/4" />
	</div>
</Slide>
