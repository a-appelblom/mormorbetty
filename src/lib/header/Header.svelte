<script lang="ts">
	import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
	import { page } from '$app/stores';
	import logo from './makoto.jpeg';
</script>

<header class="fixed z-40 w-full">
	<div class="corner">
		<a href="/">
			<img class="rounded-full" src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Start</a></li>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">Om Mig</a></li>
			<!-- <li class:active={$page.path === '/todos'}><a sveltekit:prefetch href="/todos">Todos</a></li> -->
			<li class:active={$page.path === '/current'}>
				<a sveltekit:prefetch href="/current">Skriverier</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner text-primary">
		<a
			class="text-primary hover:bg-primary-trans p-2 rounded-xl"
			href="https://twitter.com/AsaharaM"
			target="_blank"
			rel="noopener noreferrer"
		>
			<FaTwitter />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		@apply m-4;
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 3em;
		height: 3em;
		object-fit: contain;
	}

	nav {
		@apply flex justify-center;
	}

	svg {
		width: auto;
		height: 4em;
		display: block;
	}

	path {
		fill: var(--accent-color);
	}

	ul {
		@apply flex flex-col-reverse sm:flex-row;
		position: relative;
		padding: 0;
		margin: 0;
		height: 4em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--accent-color);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	a {
		transition: color 0.2s linear;
		transition: background-color 0.2s linear;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--primary-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;
		transition: background-color 0.2s linear;
	}

	a:hover {
		color: var(--secondary-color);
	}
</style>
