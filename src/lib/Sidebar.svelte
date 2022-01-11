
<script lang="ts">
	import IconButton from "$lib/IconButton.svelte";
	import NavLink from "$lib/NavLink.svelte";
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
		<NavLink href="/" icon="bookmarks">Custom List</NavLink>
	</div>
	<h3>Departments</h3>
	<div class="links">
		<NavLink href="/" icon="">All Classes</NavLink>
		<NavLink href="/elective" icon="star">Elective</NavLink>
		<NavLink href="/english" icon="journal">English</NavLink>
		<NavLink href="/art" icon="brush">Fine Art</NavLink>
		<NavLink href="/math" icon="calculator">Math</NavLink>
		<NavLink href="/science" icon="lightbulb">Science</NavLink>
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
		margin-top: 0;
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
	}
</style>