
<div class="split">
	<section class="sidebar">
		<div class="container">
			<h2>LAHS Classes</h2>
			<p class="sublinks">about ⋄ lahs.+ ⋄ privacy</p>
			<h3>Saved Lists</h3>
			<a href="">2021 - 2022</a>
			<h3>Departments</h3>
			<div class="links">
				<a href="">All Classes</a>
				<a href="">Electives</a>
				<a href="">English</a>
				<a href="">Fine Arts</a>
				<a href="">Math</a>
				<a href="">Science</a>
			</div>
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
			width: 300px;
			padding: 30px;
		}

		.sublinks {
			font-size: 0.8em;
		}

		h3 {
			margin-top: 30px;
			margin-bottom: 10px;
		}

		.links {
			display: flex;
			flex-direction: column;
			row-gap: 10px;
		}

		a {
			border: 2px solid #339;
			border-radius: 5px;
			color: #ddf;
			display: block;
			font-size: 0.9em;
			text-decoration: none;
			padding: 8px 30px;
			transition-duration: 0.1s;

			&:hover {
				background-color: #44c;
				border-color: #44c;
				color: #eef;
			}
		}
	}

	.page {
		background-color: #223;
		flex: 2 1;
		padding: 30px 60px;
	}
</style>