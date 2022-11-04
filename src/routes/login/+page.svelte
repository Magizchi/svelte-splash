<script>
	import Logo from '$lib/images/logowhite.png';
	import Video from '$lib/images/share.mp4';
</script>

<section class="flex justify-start items-center flex-col h-screen">
	<div class="relative w-full h-full">
		<video
			src={Video}
			type="video/mp4"
			loop
			controls={false}
			muted
			autoplay
			class="w-full h-full object-cover"
		/>
	</div>
	<div
		class="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay"
	>
		<div class="p-5">
			<img src={Logo} width="130px" alt="logo" />
		</div>
		<a
			href="/"
			class="text-center bg-gradient-to-r from-cyan-400 to-blue-300 p-3 w-40 rounded-xl shadow-2xl transition hover:duration-1000 hover:bg-gradient-to-l hover:to-blue-300 hover:from-cyan-400"
		>
			Login
		</a>
	</div>
</section>
