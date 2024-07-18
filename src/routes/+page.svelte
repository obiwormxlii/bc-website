<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Features from '$lib/components/Features.svelte';
</script>

<Hero />
<hr class="w-3/4 mt-20 justify-self-center" />
<Features />
<!-- <section
	class="hero bg-cover bg-center flex items-center justify-center h-full md:h-[80vh]"
	style="background-image: url('hero.jpg');"
>
	<div
		class="bg-primary md:bg-opacity-90 bg-opacity-50 p-12 lg:w-1/2 w-full rounded-xl text-center text-white text-wrap"
	>
		<h1 class="text-5xl font-bold mb-6 font-Marcellus">Elevate Your Boating Experience</h1>
		<p class="text-xl mb-8">Premium boat canvas solutions crafted with innovation and style</p>
		<a
			href="#contact"
			class="bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded transition-colors"
			>Book Now</a
		>
	</div>
</section> -->
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
	<section id="services" class="pb-20 pt-10">
		<h2 class="text-4xl font-bold font-Marcellus text-center text-primary mb-4">Our Services</h2>
		<hr class="mb-8" />
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
				<h3 class="text-2xl font-Marcellus font-bold text-primary mb-4">Canvas Enclosures</h3>
				<p>Strataglass and polycarbonate solutions for ultimate clarity and protection.</p>
			</div>
			<div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
				<h3 class="text-2xl font-Marcellus font-bold text-primary mb-4">Biminis & Dodgers</h3>
				<p>Custom-designed for perfect fit and superior sun protection.</p>
			</div>
			<div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
				<h3 class="text-2xl font-Marcellus font-bold text-primary mb-4">Upholstery & Covers</h3>
				<p>High-quality materials for comfort and durability in marine environments.</p>
			</div>
		</div>
	</section>
	<section id="about" class="bg-white rounded-lg shadow-md p-8 mb-12 w-full place-items-center">
		<h3 class="text-3xl font-Marcellus font-bold text-primary mb-6">
			Why Choose BC Marine Canvas?
		</h3>
		<div></div>
		<ul class="space-y-4 text-gray-800">
			<li class="flex items-start">
				<svg
					class="w-6 h-6 text-secondary mr-2 flex-shrink-0"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"
					></path>
				</svg>
				<span>Family-owned and operated with a passion for boating</span>
			</li>
			<li class="flex items-start">
				<svg
					class="w-6 h-6 text-secondary mr-2 flex-shrink-0"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"
					></path>
				</svg>
				<span>Cutting-edge 3D modeling and CNC cutting for precise fits</span>
			</li>
			<li class="flex items-start">
				<svg
					class="w-6 h-6 text-secondary mr-2 flex-shrink-0"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"
					></path>
				</svg>
				<span>Premium materials and attention to detail in every project</span>
			</li>
			<li class="flex items-start">
				<svg
					class="w-6 h-6 text-secondary mr-2 flex-shrink-0"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"
					></path>
				</svg>
				<span>Authorized Aquatraction foam boat flooring dealer</span>
			</li>
		</ul>
	</section>
	<section id="testimonials" class="bg-primary p-12 lg:p-20 text-white">
		<h2 class="text-4xl font-Marcellus ont-bold text-center mb-12">What Our Clients Say</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div class="bg-white p-8 rounded-lg shadow-md text-gray-800">
				<p class="mb-4">
					"The attention to detail and level of service is unmatched. Truly a premium experience."
				</p>
				<cite class="block text-primary italic">- John D., Yacht Owner</cite>
			</div>
			<div class="bg-white p-8 rounded-lg shadow-md text-gray-800">
				<p class="mb-4">
					"They've transformed my boating experience. I wouldn't trust my vessel with anyone else."
				</p>
				<cite class="block text-primary italic">- Sarah L., Sailing Enthusiast</cite>
			</div>
		</div>
	</section>
</div>
