<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.postcss';
</script>

<Header />
<main>
	<slot />
</main>

<Footer />
