<script lang="ts">
	import type { FeedObject } from '$lib/types';

	export let feedItem: FeedObject;
	const { description, imageUrl, link, pubDate, title } = feedItem;
</script>

<a href={link}>
	<article
		class="container mx-auto flex flex-col items-center justify-around h-full px-4 py-8 border-4 border-primary hover:border-secondary rounded-3xl gap-8"
	>
		<h2 class="font-bold text-secondary">
			{title}
		</h2>
		<p class="text-secondary">{description}</p>
		<img class="object-contain w-full" src={imageUrl} alt={title} />
		<span class="text-secondary">{pubDate}</span>
	</article>
</a>
