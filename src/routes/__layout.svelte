
<script lang="ts">
	import Sidebar from "$lib/Sidebar.svelte";
</script>

<div class="split">
	<section class="sidebar"><Sidebar /></section>
	<section class="page"><slot /></section>
</div>

<style lang="scss" global>
	:root {
		font-family: "Poppins", sans-serif;
		font-size: 20px;
	}

	body {
		margin: 0;
	}

	.split {
		color: #fff;
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
		background-color: #223;
		flex: 2 1;
		padding: 30px 60px;
	}
</style>