<script lang="ts">
	import { dev } from '$app/env';

	export const hydrate = dev;
</script>

<div class="w-full col-span-1 h-screen overflow-y-scroll">
	<h2 class="text-2xl text-center font-bold">Mitt eviga twittrande</h2>
	<!-- svelte-ignore a11y-missing-content -->
	<a
		class="twitter-timeline w-full"
		data-lang="sv"
		href="https://twitter.com/AsaharaM?ref_src=twsrc%5Etfw"
	/> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>
