
<script lang="ts">
	import Popover from "$lib/Popover.svelte";
	import Slideover from "$lib/Slideover.svelte";
</script>

<div class="fs">
	<Popover />
	<Slideover />
	<div><slot /></div>
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

	.brand {
		background: linear-gradient(to bottom, #aef, #03f);
		background-clip: text;
		color: transparent;
		margin: 0 2px;
	}

	.fs {
		box-sizing: border-box;
		display: flex;
		justify-content: flex-start;
		background-color: var(--bg-primary);
		flex: 1 1;
		max-height: 100vh;
		height: 100vh;
		overflow-y: auto;
		padding: 20px 40px;
		position: sticky;
		top: 0;

		> div {
			width: 100%;
		}
	}
</style>