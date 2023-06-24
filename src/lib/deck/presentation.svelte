<script lang="ts">
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
	<p>Réseaux sociaux avec</p>
	<img src="/Holochain-Logo-Colors.png" alt="Holochain Logo" />
</Slide>

<Sommaire />

<WhatIsHolochain />

<Slide><p>Réseaux Sociaux</p></Slide>

<FluxSocial />

<Hylo />

<HummHives />

<CoreNexus />

<Slide><p>Frameworks</p></Slide>

<AD4M />

<Neighborhoods />

<Conclusion />
