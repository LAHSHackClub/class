
<script lang="ts">
	import IconButton from "$lib/IconButton.svelte";
	import NavLink from "$lib/NavLink.svelte";
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();
	const click = (e: MouseEvent) => {
		dispatch("toggle", e); toggle = !toggle; }
	let toggle = false;
</script>

{#if toggle}
<div class="nav-hidden">
	<div class="menu">
		<IconButton icon="menu" on:click="{click}" />
	</div>
</div>
{:else}
<nav class="container">
	<div class="menu">
		<h2>classes<span class="brand">.+</span></h2>
		<IconButton icon="menu" on:click="{click}" />
	</div>
	<p class="sublinks"><a href="/help">additional help</a> &bull; <a href="/privacy">privacy</a></p>
	<hr>
	<div class="links">
		<NavLink href="/saved" icon="bookmarks">Your Saved Classes</NavLink>
	</div>
	<h3>Departments</h3>
	<div class="links">
		<NavLink href="/" icon="">All Classes</NavLink>
		<NavLink href="/elective" icon="star">AVID & Elective</NavLink>
		<NavLink href="/english" icon="journal">English</NavLink>
		<NavLink href="/math" icon="calculator">Math</NavLink>
		<NavLink href="/athletics" icon="activity">PE, Health & Athletics</NavLink>
		<NavLink href="/performing-arts" icon="camera">Performing Arts</NavLink>
		<NavLink href="/science" icon="lightbulb">Science</NavLink>
		<NavLink href="/social-studies" icon="people">Social Studies</NavLink>
		<NavLink href="/ted" icon="laptop">TED</NavLink>
		<NavLink href="/visual-arts" icon="brush">Visual Arts</NavLink>
		<NavLink href="/world-language" icon="translate">World Language</NavLink>
	</div>
</nav>
{/if}

<style lang="scss">
	.nav-hidden {
		background-color: var(--bg-primary);
		width: 60px;

		.menu {
			background-color: var(--bg-secondary);
			border-bottom-right-radius: 15px;
			display: grid;
			place-items: center;
			padding-top: 21px;
			height: 60px;
		}
	}

	.container {
		width: 240px;
		padding: 20px 25px;
		padding-bottom: 40px;

		.menu {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}

	.sublinks {
		font-size: 0.8em;
		margin-top: 5px;
		margin-bottom: 20px;
	}

	h3 {
		font-size: 1rem;
		margin-top: 20px;
		margin-bottom: 6px;
	}

  hr {
    border: none;
    border-bottom: 3px solid var(--bg-primary);
    margin: 20px 0;
		margin-top: 15px;
  }
	
	.links {
		display: flex;
		flex-direction: column;
		row-gap: 8px;
		margin-top: 10px;

		@media (min-height: 1000px) {
			row-gap: 10px;
		}
	}
</style>