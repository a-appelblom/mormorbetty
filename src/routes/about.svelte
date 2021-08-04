<script lang="ts">
	import { aboutPage as content } from '$lib/content';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="container mx-auto mt-16">
	<div class="w-full flex flex-col items-center">
		<h1 class="text-primary text-4xl">{content.hero.title}</h1>
		<p class="text-primary">{content.hero.subtitle}</p>
	</div>
	<div class="container flex flex-col items-center justify-around gap-8">
		{#each content.sections as section}
			<div
				class="grid grid-cols-1 md:grid-cols-3 w-full gap-4 rounded-3xl border-primary border-4 bg-secondary-trans p-8"
			>
				<div class="col-span-2 flex flex-col justify-center gap-8">
					<h3 class="text-primary text-3xl">{section.title}</h3>
					<p class="text-primary">{section.text}</p>
				</div>
				<img
					class="col-span-1 max-w-full h-auto object-contain place-self-center"
					src={section.image}
					alt=""
				/>
			</div>
		{/each}
	</div>
</div>

<style>
</style>
