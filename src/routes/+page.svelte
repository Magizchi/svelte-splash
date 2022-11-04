<script>
	import Logo from '$lib/images/logo.png';
	import BARS from '../Bars.svelte';
	import SideBar from './SideBar.svelte';
	let toggleSideBare = true;

	function toggler() {
		toggleSideBare = !toggleSideBare;
		console.log('toggled', toggleSideBare);
	}
</script>

<section
	class="flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out"
>
	<div class="hidden md:flex h-screen flex-initial">
		<SideBar on:click={toggler} />
	</div>
	<div class="flex md:hidden flex-row">
		<div class="p-2 w-full flex flex-row justify-between items-center shadow-md">
			<button class="w-6 h-6" on:click={() => (toggleSideBare = !toggleSideBare)}>
				<BARS />
			</button>
			<a href="/" class="w-28">
				<img src={Logo} alt="LOG" />
			</a>
			<a href="/user-profile/userId" class=""> user-profile-icon </a>
		</div>
		{#if toggleSideBare}
			<div class="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10">
				<div class="absolute w-full flex justify-end items-center p-2">
					<button on:click={() => (toggleSideBare = false)}>
						<span class="bg-black text-white rounded-full p-2">x</span>
					</button>
				</div>
				<SideBar on:click={toggler} />
			</div>
		{/if}
	</div>

	<div class="pb-2 flex-1 h-screen overscroll-y-scroll">r</div>
</section>
