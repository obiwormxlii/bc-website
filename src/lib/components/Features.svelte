<script lang="ts">
	import { fade } from 'svelte/transition';

	const images = [
		{
			link: 'https://www.bcmarinecanvasri.com/images/aquatraction/aquatraction-ranger.jpg',
			alt: 'Center Console Boat With Aquatraction'
		},
		{
			link: 'https://www.bcmarinecanvasri.com/images/enclosures/powerboat-enclosure.jpg',
			alt: 'Fore and Aft Enclosure on a Carver 42SS'
		},
		{
			link: 'https://www.bcmarinecanvasri.com/images/dodgers/traditional-dodger.jpg',
			alt: 'Traditional Dodger on a Sailboat'
		}
	];
	let currentTab = $state(0);
</script>

<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
	<div class="relative p-6 md:p-16">
		<!-- Grid -->
		<div class="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
			<div class="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
				<h2
					class="text-2xl font-Marcellus text-gray-800 font-bold sm:text-3xl dark:text-neutral-200"
				>
					Premium Products for a Premium Feel
				</h2>

				<!-- Tab Navs -->
				<div class="grid gap-4 mt-5 md:mt-10" aria-label="Tabs">
					<button
						type="button"
						class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700"
						id="tabs-with-card-item-3"
						data-hs-tab="#tabs-with-card-3"
						aria-controls="tabs-with-card-3"
						onclick={() => (currentTab = 0)}
					>
						<span class="flex">
							<svg
								class="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="currentColor"
								><path
									d="M20.0834 10.4999L21.2855 11.2212C21.5223 11.3633 21.599 11.6704 21.457 11.9072C21.4147 11.9776 21.3559 12.0365 21.2855 12.0787L12.0001 17.6499L2.71463 12.0787C2.47784 11.9366 2.40106 11.6295 2.54313 11.3927C2.58536 11.3223 2.64425 11.2634 2.71463 11.2212L3.91672 10.4999L12.0001 15.3499L20.0834 10.4999ZM20.0834 15.1999L21.2855 15.9212C21.5223 16.0633 21.599 16.3704 21.457 16.6072C21.4147 16.6776 21.3559 16.7365 21.2855 16.7787L12.5145 22.0412C12.1979 22.2313 11.8022 22.2313 11.4856 22.0412L2.71463 16.7787C2.47784 16.6366 2.40106 16.3295 2.54313 16.0927C2.58536 16.0223 2.64425 15.9634 2.71463 15.9212L3.91672 15.1999L12.0001 20.0499L20.0834 15.1999ZM12.5145 1.30864L21.2855 6.5712C21.5223 6.71327 21.599 7.0204 21.457 7.25719C21.4147 7.32757 21.3559 7.38647 21.2855 7.42869L12.0001 12.9999L2.71463 7.42869C2.47784 7.28662 2.40106 6.97949 2.54313 6.7427C2.58536 6.67232 2.64425 6.61343 2.71463 6.5712L11.4856 1.30864C11.8022 1.11864 12.1979 1.11864 12.5145 1.30864Z"
								></path></svg
							>
							<span class="grow ms-6">
								<span
									class="block font-Marcellus text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
									>Aquatraction</span
								>
								<span
									class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200"
									>Secure footing, lasting comfort, and unmatched durability</span
								>
							</span>
						</span>
					</button>
					<button
						type="button"
						class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 active"
						id="tabs-with-card-item-1"
						data-hs-tab="#tabs-with-card-1"
						aria-controls="tabs-with-card-1"
						onclick={() => (currentTab = 1)}
					>
						<span class="flex">
							<span class="flex">
								<svg
									class="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									><path
										d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
									/><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path
										d="M17 19h4"
									/></svg
								>
								<span class="grow ms-6">
									<span
										class="block font-Marcellus text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
										>Glass Enclosures</span
									>
									<span
										class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200"
										>Elegant strataglass or polycarbonate enclosures to extend your season</span
									>
								</span>
							</span>
						</span></button
					>

					<button
						type="button"
						class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700"
						id="tabs-with-card-item-2"
						data-hs-tab="#tabs-with-card-2"
						aria-controls="tabs-with-card-2"
						onclick={() => (currentTab = 2)}
					>
						<span class="flex">
							<svg
								class="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="currentColor"
								><path
									d="M12.998 2.04938C18.0514 2.5511 21.998 6.81465 21.998 12V13H12.998V19C12.998 20.1046 13.8935 21 14.998 21C16.1026 21 16.998 20.1046 16.998 19V18H18.998V19C18.998 21.2091 17.2072 23 14.998 23C12.7889 23 10.998 21.2091 10.998 19V13H1.99805V12C1.99805 6.81465 5.94472 2.5511 10.998 2.04938V2C10.998 1.44772 11.4458 1 11.998 1C12.5503 1 12.998 1.44772 12.998 2V2.04938Z"
								></path></svg
							>
							<span class="grow ms-6">
								<span
									class="block font-Marcellus text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
									>Biminis & Dodgers</span
								>
								<span
									class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200"
									>Sun, wind, and spray protection for the toughest weather</span
								>
							</span>
						</span>
					</button>
				</div>
				<!-- End Tab Navs -->
			</div>
			<!-- End Col -->

			<div class="lg:col-span-6">
				<div class="relative">
					<!-- Tab Content -->
					<div>
						<div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
							<img
								class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
								src={images[currentTab].link}
								alt={images[currentTab].alt}
							/>
						</div>
					</div>
					<!-- End Tab Content -->

					<!-- SVG Element -->
					<div class="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
						<svg
							class="w-16 h-auto text-orange-500"
							width="121"
							height="135"
							viewBox="0 0 121 135"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
								stroke="currentColor"
								stroke-width="10"
								stroke-linecap="round"
							/>
							<path
								d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
								stroke="currentColor"
								stroke-width="10"
								stroke-linecap="round"
							/>
							<path
								d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
								stroke="currentColor"
								stroke-width="10"
								stroke-linecap="round"
							/>
						</svg>
					</div>
					<!-- End SVG Element -->
				</div>
			</div>
			<!-- End Col -->
		</div>
		<!-- End Grid -->

		<!-- Background Color -->
		<div class="absolute inset-0 grid grid-cols-12 size-full">
			<div
				class="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800"
			></div>
		</div>
		<!-- End Background Color -->
	</div>
</div>
<!-- End Features -->
