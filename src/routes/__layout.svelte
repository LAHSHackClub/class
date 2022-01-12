
<script lang="ts">
	import Sidebar from "$lib/Sidebar.svelte";

	let isOpen = false;
	function toggle() {
		isOpen = !isOpen;
	}
</script>

<div class="split" class:full="{isOpen}">
	<section class="sidebar"><Sidebar on:toggle="{toggle}" /></section>
	<section class="page" class:full="{isOpen}">
		<div><slot /></div>
	</section>
</div>

<style lang="scss" global>
	:root {
		font-family: "Poppins", sans-serif;
		font-size: 20px;

		--bg-primary: #345;
		--bg-secondary: #234;
		
		--interactable-primary: #0bd;
		--interactable-secondary: #37a;

		--text-primary: #fff;
		--text-secondary: #dde;
		--text-link: #0df;

		--selected: #09c;
		--future: #0a8;
		--prerequisite: #a35;
	}

	body {
		color: var(--text-primary);
		margin: 0;
	}

	h1, h2 {
		margin: 10px 0;
	}

	a {
		color: var(--text-link);
	}

	.split {
		background-color: var(--bg-secondary);
		display: flex;
		width: 100%;
		min-height: 100vh;
	}

	.sidebar {
		display: flex;
		justify-content: flex-end;
	}

	.page {
		box-sizing: border-box;
		display: flex;
		justify-content: flex-start;
		background-color: var(--bg-primary);
		border-top-left-radius: 25px;
		flex: 1 1;
		max-height: 100vh;
		overflow-y: auto;
		padding: 30px 40px;
		position: sticky;
		top: 0;

		> div {
			max-width: calc(100vw - 400px);
		}
		&.full > div {
			max-width: calc(100vw - 160px);
		}
	}
</style>