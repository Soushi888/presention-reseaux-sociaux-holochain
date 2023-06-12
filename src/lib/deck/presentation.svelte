<script lang="ts">
	import Code from './code.svelte';
	import Markdown from './markdown.svelte';
	import Slide from './slide.svelte';
	import FluxSocial from './slides/fluxSocial.svelte';
	import HummHives from './slides/hummHives.svelte';
	import Hylo from './slides/hylo.svelte';
	import Sommaire from './slides/sommaire.svelte';
	import WhatIsHolochain from './slides/what-is-holochain.svelte';
</script>

<Slide>
	<p>Réseaux sociaux avec</p>
	<img src="/Holochain-Logo-Colors.png" alt="Holochain Logo" />
</Slide>

<Sommaire />

<WhatIsHolochain />

<Slide><p>Réseaux Sociaux</p></Slide>

<FluxSocial />

<Hylo />

<HummHives />
