
<script lang="ts">
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();
	const click = (e: MouseEvent) => dispatch("toggle", e);
</script>

<nav class="container">
	<div class="menu">
		<h2>LAHS Classes</h2>
		<button on:click="{click}">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
				<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
			</svg>
		</button>
	</div>
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

		.menu {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.menu button {
			background: none;
			border: none;
			border-radius: 5px;
			color: #fff;
			cursor: pointer;
			display: grid;
			place-items: center;
			height: 40px;
			width: 40px;
		}

		.menu button svg {
			height: 100%;
			width: 100%;
		}
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