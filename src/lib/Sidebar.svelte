
<script lang="ts">
	import IconButton from "$lib/IconButton.svelte";
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();
	const click = (e: MouseEvent) => dispatch("toggle", e);
</script>

<nav class="container">
	<div class="menu">
		<h2>LAHS Classes</h2>
		<IconButton icon="menu" on:click="{click}" />
	</div>
	<p class="sublinks">about ⋄ lahs.+ ⋄ <a href="/privacy">privacy</a></p>
	<h3>Saved Lists</h3>
	<div class="links">
		<a href="">
			<svg><use xlink:href="/icon/bootstrap.svg#bookmarks" /></svg>
			Custom List
		</a>
	</div>
	<h3>Departments</h3>
	<div class="links">
		<a href="/">All Classes</a>
		<a href="/elective">
			<svg><use xlink:href="/icon/bootstrap.svg#star" /></svg>
			Elective
		</a>
		<a href="/english">
			<svg><use xlink:href="/icon/bootstrap.svg#journal" /></svg>
			English
		</a>
		<a href="/art">
			<svg><use xlink:href="/icon/bootstrap.svg#brush" /></svg>
			Fine Art
		</a>
		<a href="/math">
			<svg><use xlink:href="/icon/bootstrap.svg#calculator" /></svg>
			Math
		</a>
		<a href="/science">
			<svg><use xlink:href="/icon/bootstrap.svg#lightbulb" /></svg>
			Science
		</a>
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
		margin-top: 15px;

		a {
			border: 2px solid var(--interactable-secondary);
			border-radius: 5px;
			color: var(--text-primary);
			display: flex;
			align-items: center;
			column-gap: 10px;
			font-size: 0.8em;
			text-decoration: none;
			padding: 8px 20px;
			transition-duration: 0.1s;

			&:hover {
				background-color: var(--interactable-primary);
				border-color: var(--interactable-primary);
				color: var(--text-primary);
			}

			svg {
				height: 16px;
				width: 16px;
			}
		}
	}
</style>