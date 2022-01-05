
<div class="split">
	<section class="sidebar">
		<div class="container">
			<h2>Classes</h2>
			<h3>Saved</h3>
			<h3>Departments</h3>
		</div>
	</section>
	<section class="page">
		<h1>Department Name</h1>
	</section>
</div>

<style lang="scss">
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

		.container {
			max-width: 300px;
			padding: 30px;
		}
	}

	.page {
		background-color: #222;
		flex: 2 1;
		padding: 30px;
	}
</style>