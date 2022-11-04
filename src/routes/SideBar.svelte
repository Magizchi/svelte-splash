<script>
	// @ts-nocheck

	import ImageLogo from '$lib/images/logo.png';
	import { error } from '@sveltejs/kit';

	export function load({ params }) {
		if (params.slug === 'hello-world') {
			return {
				title: 'Hello world!',
				content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
			};
		}

		throw error(404, 'Not found');
	}

	let categories = [
		{ name: 'Animals' },
		{ name: 'Wallpapers' },
		{ name: 'Photography' },
		{ name: 'Gaming' }
	];
</script>

<aside
	class="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-full container-snap"
>
	<div class="flex flex-col">
		<button on:click class="flex px-5 gap-2 my-6 w-[190] items-center">
			<img src={ImageLogo} alt="ImageLogo" class="w-full" />
		</button>
		<!-- link pas active -->
		<a
			href="/"
			class="flex items-center px-5 gap-3  text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize"
			>Position
		</a>
		<!-- Link active -->
		<a
			href="/"
			class="flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize"
			>Position 2</a
		>
		<h3 class="mt-2 px-5 text-base 2xl:text-xl">Discover category</h3>
		{#each categories as category}
			<a
				class="flex items-center px-5 gap-3  text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize"
				href="/category/:id">{category.name}</a
			>
		{/each}
	</div>
</aside>

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	.container-snap::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.container-snap {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
