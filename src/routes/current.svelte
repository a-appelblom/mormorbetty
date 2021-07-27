<script lang="ts">
	import Rss from '$lib/current/Rss.svelte';
	import Twitter from '$lib/current/Twitter.svelte';

	import type { FeedObject } from '$lib/types';

	import { onMount } from 'svelte';

	let RSS;
	let feed: FeedObject[];
	let rssUrl =
		'https://rss.aftonbladet.se/rss2/small/collections?authors=553f08d9-b7e2-449e-bfec-cbc11d2c4363';

	onMount(async () => {
		fetch(rssUrl)
			.then((response) => response.text())
			.then((str) => new window.DOMParser().parseFromString(str, 'text/xml'))
			.then((data) => {
				console.log(data);
				const items = data.querySelectorAll('item');
				RSS = Array.from(items);
				feed = RSS.map((item) => {
					console.log(item);
					return {
						title: item.querySelector('title').innerHTML.replace(/^<\!\[CDATA\[|\]\]>$/g, ''),
						link: item.querySelector('link').innerHTML,
						description: item
							.querySelector('description')
							.innerHTML.replace(/^<\!\[CDATA\[|\]\]>$/g, ''),
						imageUrl: item.querySelector('enclosure').getAttribute('url'),
						pubDate: item.querySelector('pubDate').innerHTML
					};
				});
				console.log(feed);
			});
	});
</script>

<div class="grid grid-cols-2 gap-6 mt-12">
	<Rss {feed} />

	<Twitter />
</div>

<style>
</style>
