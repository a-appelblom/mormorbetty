<script lang="ts">
	import FeedCard from '$lib/current/FeedCard.svelte';

	import type { FeedObject } from '$lib/types';

	export let feed: FeedObject[];
</script>

<div class="overflow-y-scroll h-screen col-span-1 grid grid-cols-1 gap-8 w-full">
	<h2 class="text-2xl text-center font-bold">Mitt jobb på Aftonbladet/Sportbladet</h2>
	{#if feed?.length > 0}
		{#each feed as feedItem}
			<FeedCard {feedItem} />
		{/each}
	{/if}
</div>
