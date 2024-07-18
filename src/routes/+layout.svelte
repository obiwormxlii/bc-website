<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<main class="grid grid-cols-1 w-screen">
	<slot />
</main>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
	<section id="contact" class="py-20">
		<h2 class="text-4xl font-bold font-Marcellus text-center text-primary mb-12">Contact Us</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
			<iframe
				src="https://forms.monday.com/forms/embed/c49006bc043cb4583a0b104cf2ea9c4a?r=use1"
				class="w-full h-96"
			></iframe>
			<!-- <div>
				<form>
					<input
						type="text"
						placeholder="Name"
						required
						class="w-full p-3 mb-4 border border-gray-300 rounded"
					/>
					<input
						type="email"
						placeholder="Email"
						required
						class="w-full p-3 mb-4 border border-gray-300 rounded"
					/>
					<textarea
						placeholder="Message"
						required
						class="w-full p-3 mb-4 border border-gray-300 rounded h-32"
					></textarea>
					<button
						type="submit"
						class="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded transition-colors"
						>Send</button
					>
				</form>
			</div> -->
			<div>
				<h3 class="text-2xl font-Marcellus font-bold text-primary mb-4">Get in Touch</h3>
				<p class="mb-2">
					100 Folly Landing Rd, Warwick, RI 02886
					<br />Up the stairs, second door to the right
				</p>
				<p class="mb-2">Phone: (401) 595-7936</p>
				<p>Email: info@bcmarinecanvasri.com</p>
			</div>
		</div>
	</section>
</div>

<footer class="bg-gray-800 text-white py-8 text-center">
	<p>&copy; 2024 Luxury Boat Services. All rights reserved.</p>
</footer>

<style>
</style>
