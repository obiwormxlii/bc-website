<script lang="ts">
	const menuItemClasses = 'text-primary hover:text-secondary transition-colors text-xl';
</script>

<header class="bg-white shadow-md h-24">
	<div class="container mx-auto py-6 flex justify-center items-center h-full">
		<nav class="hidden lg:block">
			<ul class="flex md:space-x-6 gap-2 m-4 font-Marcellus">
				<li>
					<a href="./" class={menuItemClasses}>CARE & UPKEEP</a>
				</li>
				<li>
					<a href="./blog" class={menuItemClasses}>UPHOLSTERY</a>
				</li>
				<li>
					<a href="./" class={menuItemClasses}>CANVAS</a>
				</li>
			</ul>
		</nav>
		<div class="w-40 m-4">
			<a href="./">
				<img src="logo.svg" alt="BC Marine Logo" class="w-full h-full object-contain" />
			</a>
		</div>
		<nav class="hidden lg:block">
			<ul class="flex md:space-x-6 gap-2 m-4 font-Marcellus">
				<li>
					<a href="./" class={menuItemClasses}>AQUATRACTION</a>
				</li>
				<li>
					<a href="./blog" class={menuItemClasses}>ABOUT US</a>
				</li>
				<li>
					<a href="./" class={menuItemClasses}>CONTACT</a>
				</li>
			</ul>
		</nav>
	</div>
</header>
