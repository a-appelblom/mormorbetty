<script lang="ts">
	import { homePage as content } from '$lib/content';

	const { hero } = content;

	const image = 'Makopyon.jpeg';
	const video = 'sakura.mp4';
</script>

<div class="h-screen relative overflow-hidden">
	<div class="grid xl:grid-cols-3 2xl:grid-cols-4 w-full h-full">
		<div
			class="flex flex-col h-full w-full items-start justify-center z-20 bg-gradient-to-r from-primary p-8"
		>
			<div class="grid gap-4 w-full sm:w-1/2 h-1/2">
				<h3 class="text-white text-3xl">{hero.left.title}</h3>
				<p class="text-xl text-white font-bold">{hero.left.text}</p>
			</div>
		</div>
		<div class="hidden xl:block relative xl:col-span-1 2xl:col-span-2" />
		<div
			class="flex flex-col h-full w-full items-end justify-center z-20 bg-gradient-to-l from-secondary p-8"
		>
			<div class="grid gap-4 w-full sm:w-1/2 h-1/2 text-right">
				<h3 class="text-black text-3xl">{hero.right.title}</h3>
				<p class="text-xl mix-blend-dodge font-bold">{hero.right.text}</p>
			</div>
		</div>
	</div>
	<video
		class="hidden xl:block absolute inset-0 object-cover z-10 opacity-20 rotate-180"
		src={video}
		muted
		loop
		autoplay
	/>
	<img class="absolute inset-0" src={image} alt="" />
</div>

<!-- markup (zero or more items) goes here -->
<style>
	/* your styles go here */
</style>
