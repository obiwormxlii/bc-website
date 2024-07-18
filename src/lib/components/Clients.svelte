<!-- Clients -->
<script lang="ts">
	const logos = [
		{ src: './Plaskolite.svg', alt: 'Plaskolite' },
		{ src: './Strataglass.svg', alt: 'Strataglass' },
		{ src: './sunbrella-logo.svg', alt: 'Sunbrella' },
		{ src: './Aquatraction.svg', alt: 'Aquatraction' },
		{ src: './serge-ferrari.svg', alt: 'Serge Ferrari' }
	];
</script>

<div class="px-4 lg:px-6">
	<div
		class="relative py-6 md:py-10 overflow-hidden before:absolute before:top-0 before:start-0 before:z-10 before:w-20 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:top-0 after:end-0 after:w-20 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent dark:before:from-neutral-900 dark:after:from-neutral-900"
	>
		<div class="flex justify-between items-center gap-x-4">
			{#each logos as { src, alt }}
				<img class="w-14 md:w-20 h-auto text-black mx-auto dark:text-white" {src} {alt} />
			{/each}
		</div>
	</div>
</div>
<!-- End Clients -->
