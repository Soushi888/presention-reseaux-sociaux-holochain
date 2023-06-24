<script lang="ts">
	import { languageStore } from '$lib/store';
	import Slide from './slide.svelte';
	import AD4M from './slides/AD4M.svelte';
	import Conclusion from './slides/conclusion.svelte';
	import CoreNexus from './slides/coreNexus.svelte';
	import FluxSocial from './slides/fluxSocial.svelte';
	import HummHives from './slides/hummHives.svelte';
	import Hylo from './slides/hylo.svelte';
	import Neighborhoods from './slides/neighborhoods.svelte';
	import Sommaire from './slides/sommaire.svelte';
	import WhatIsHolochain from './slides/what-is-holochain.svelte';
</script>

<Slide>
	{#if $languageStore === 'fr'}
		<p>Réseaux sociaux avec</p>
	{:else}
		<p>Social Networks with</p>
	{/if}
	<img src="/Holochain-Logo-Colors.png" alt="Holochain Logo" />
</Slide>

<Sommaire />

<WhatIsHolochain />

<Slide>
	{#if $languageStore === 'fr'}
		<p>Réseaux sociaux</p>
	{:else}
		<p>Social Networks</p>
	{/if}
</Slide>

<FluxSocial />

<Hylo />

<HummHives />

<CoreNexus />

<Slide><p>Frameworks</p></Slide>

<AD4M />

<Neighborhoods />

<Conclusion />
