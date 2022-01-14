
<script lang="ts">
	import { PopoverContent, popoverContent } from "../util/popover";
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

	let content: PopoverContent;
	let timeout: any;
	onMount(() => {
		popoverContent.subscribe(p => {
			content = p;
			if (timeout) clearTimeout(timeout);
			timeout = setTimeout(() => {
				popoverContent.set(null);
			}, 2000);
		});
	});
</script>

{#if content}
<div class="contextmenu" transition:fly="{{y:15}}">
  <svg><use xlink:href="/icon/bootstrap.svg#{content.icon}" /></svg>
	<p>{content.message}</p>
</div>
{/if}

<style lang="scss">
	.contextmenu {
		background-color: #123e;
		border-radius: 20px;
		box-shadow: 0 0 20px var(--bg-secondary);
		color: var(--text-primary);
		display: grid;
		place-items: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 5;
		margin: auto;
		padding: 40px;
		width: 200px;
		height: 200px;

		svg {
			width: 100px;
			height: 100px;
		}

		p {
			margin-bottom: 0;
			text-align: center;
		}
	}
</style>