<script lang="ts">
	import { slide } from 'svelte/transition';
	let qAndA = $state([
		{
			Q: 'What about Eisenglass?',
			A: 'Strataglass is the modern version of Eisenglass. Modern boat windows are made with press-polished vinyl, which makes them last longer without yellowing, and are more resistant to scratches',
			active: false
		},
		{ Q: 'Q', A: 'A', active: false }
	]);

	function onclick(index) {
		for (let i = 0; i < qAndA.length; i++) {
			if (i === index) {
				qAndA[i].active = !qAndA[i].active;
			} else {
				qAndA[i].active = false;
			}
		}
	}
</script>

{#snippet QnA(q, a, active, index)}
	<div class="hs-accordion pb-3 active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
		<button
			class="hs-accordion-toggle font-Marcellus group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
			onclick={() => onclick(index)}
		>
			{q}
			<svg
				class="{active
					? 'hidden'
					: 'block'} flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg
			>
			<svg
				class="{active
					? 'block'
					: 'hidden'} flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg
			>
		</button>
		{#if active}
			<div
				id="hs-basic-with-title-and-arrow-stretched-collapse-one"
				transition:slide
				class="w-full overflow-hidden transition-[height] duration-300"
				aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
			>
				<p class="text-gray-600 dark:text-neutral-400">
					{a}
				</p>
			</div>
		{/if}
	</div>
{/snippet}

<!-- FAQ -->
<div class="max-w-[85rem] w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
	<!-- Grid -->
	<div class="grid md:grid-cols-5 gap-10">
		<div class="md:col-span-2">
			<div class="max-w-xs">
				<h2 class="text-2xl font-Marcellus font-bold md:text-4xl md:leading-tight dark:text-white">
					Frequently<br />asked questions
				</h2>
				<p class="mt-1 hidden md:block text-gray-600 dark:text-neutral-400">
					Answers to the most frequently asked questions.
				</p>
			</div>
		</div>
		<!-- End Col -->

		<div class="md:col-span-3">
			<!-- Accordion -->
			<div class="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
				{#each qAndA as { Q: q, A: a, active }, index}
					{@render QnA(q, a, active, index)}
				{/each}
			</div>
			<!-- End Accordion -->
		</div>
		<!-- End Col -->
	</div>
	<!-- End Grid -->
</div>
<!-- End FAQ -->
