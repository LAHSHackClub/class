
<script lang="ts">
	import Sidebar from "$lib/Sidebar.svelte";
</script>

<div class="split">
	<section class="sidebar"><Sidebar /></section>
	<section class="page">
		<div><slot /></div>
	</section>
</div>

<style lang="scss" global>
	:root {
		font-family: "Poppins", sans-serif;
		font-size: 20px;

		--bg-primary: #191930;
		--bg-secondary: #001;
		--text-primary: #eef;
		--text-secondary: #ccf;
		--text-link: #0af;
	}

	body {
		color: var(--text-primary);
		margin: 0;
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
		flex: 1 1;
	}

	.page {
		display: flex;
		justify-content: flex-start;
		background-color: var(--bg-primary);
		border-top-left-radius: 25px;
		flex: 2 1;
		padding: 30px 60px;

		> div {
			max-width: 900px;
		}
	}
</style>