
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
	}

	body {
		margin: 0;
	}

	a {
		color: #0af;
	}

	.split {
		color: #eef;
		display: flex;
		width: 100%;
		min-height: 100vh;
	}

	.sidebar {
		display: flex;
		justify-content: flex-end;
		background-color: #001;
		flex: 1 1;
	}

	.page {
		display: flex;
		justify-content: flex-start;
		background-color: #191930;
		flex: 2 1;
		padding: 30px 60px;

		> div {
			max-width: 900px;
		}
	}
</style>