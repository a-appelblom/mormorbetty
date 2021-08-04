<script lang="ts">
	import { dev } from '$app/env';

	export const hydrate = dev;
</script>

<div class="grid grid-cols-1 gap-8 w-full col-span-1 p-4 overflow-y-scroll">
	<h2 class="text-primary text-2xl text-center font-bold">Mitt eviga twittrande</h2>
	<!-- svelte-ignore a11y-missing-content -->
	<a
		class="twitter-timeline"
		data-lang="sv"
		data-theme="dark"
		href="https://twitter.com/AsaharaM?ref_src=twsrc%5Etfw">Tweets by AsaharaM</a
	> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>
