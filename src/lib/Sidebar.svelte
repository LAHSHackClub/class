
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
		<h2>LAHS Classes</h2>
		<IconButton icon="menu" on:click="{click}" />
	</div>
	<p class="sublinks"><a href="/help">help picking courses</a> &bull; <a href="/privacy">privacy</a></p>
	<hr>
	<div class="links">
		<NavLink href="/saved" icon="bookmarks">Saved Classes</NavLink>
	</div>
	<h3>Departments</h3>
	<div class="links">
		<NavLink href="/" icon="">All Classes</NavLink>
		<NavLink href="/avid" icon="star">AVID</NavLink>
		<NavLink href="/elective" icon="star">Elective</NavLink>
		<NavLink href="/english" icon="journal">English</NavLink>
		<NavLink href="/math" icon="calculator">Math</NavLink>
		<NavLink href="/pe" icon="star">PE/Health & Athletics</NavLink>
		<NavLink href="/perf-arts" icon="star">Performing Arts</NavLink>
		<NavLink href="/science" icon="lightbulb">Science</NavLink>
		<NavLink href="/social-studies" icon="star">Social Studies</NavLink>
		<NavLink href="/ted" icon="star">TED</NavLink>
		<NavLink href="/art" icon="brush">Visual Arts</NavLink>
		<NavLink href="/language" icon="star">World Language</NavLink>
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
			padding-top: 32px;
			height: 60px;
		}
	}

	.container {
		width: 260px;
		padding: 30px;

		.menu {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 15px;
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

  hr {
    border: none;
    border-bottom: 3px solid var(--bg-primary);
    margin: 25px 0;
  }
	
	.links {
		display: flex;
		flex-direction: column;
		row-gap: 10px;
		margin-top: 15px;
	}
</style>