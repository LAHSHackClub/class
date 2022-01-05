
<nav class="container">
	<h2>LAHS Classes</h2>
	<p class="sublinks">about ⋄ lahs.+ ⋄ <a href="/privacy">privacy</a></p>
	<h3>Saved Lists</h3>
	<div class="links">
		<a href="">Classes for Senior Year</a>
	</div>
	<h3>Departments</h3>
	<div class="links">
		<a href="/">All Classes</a>
		<a href="/elective">Elective</a>
		<a href="/english">English</a>
		<a href="/art">Fine Art</a>
		<a href="/math">Math</a>
		<a href="/science">Science</a>
	</div>
</nav>

<style lang="scss">
	.container {
		width: 260px;
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

		a {
			border: 2px solid #339;
			border-radius: 5px;
			color: var(--text-secondary);
			display: block;
			font-size: 0.8em;
			text-decoration: none;
			padding: 8px 30px;
			transition-duration: 0.1s;

			&:hover {
				background-color: #44c;
				border-color: #44c;
				color: var(--text-primary);
			}
		}
	}
</style>