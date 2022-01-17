
<script lang="ts" context="module">
  import { aggregate } from "../util/database";
  
  export async function load() {
    const data = await aggregate();
    if (!data) return { status: 500, error: new Error(`Server Error`) };
		return { props: { classes: data } };
	}
</script>

<script lang="ts">
  import Class from "$lib/Class.svelte";
  import { bookmarks } from "../util/bookmarks";
  export let classes: any[];

  let searchQuery: string = "";
  function classMatch(query: string) {
    return classes
      .filter(x => $bookmarks.includes(x.id))
      .filter(x => x.Name.toLowerCase().indexOf(query.toLowerCase()) > -1)
      .sort((a, b) => a.Name.localeCompare(b.Name));
  }
</script>

<h1>Saved Classes</h1>
<input type="text" name="" id="" placeholder="Search classes" bind:value="{searchQuery}">
<hr>
{#if classMatch(searchQuery).length > 0}
<section>
  {#each classMatch(searchQuery) as c}
  <Class c="{c}" />
  {/each}
</section>
{:else}
<p>No classes found - double click a class to add it here!</p>
{/if}

<style lang="scss">
  input {
    background-color: var(--bg-secondary);
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    color: var(--text-secondary);
    font-family: inherit;
    padding: 8px 20px;
    width: 100%;

    &:focus {
      outline: var(--interactable-secondary) 2px solid;
    }
  }

  hr {
    border: none;
    border-bottom: 3px solid var(--bg-secondary);
    margin: 12px 0;
    margin-bottom: 20px;
  }

  section {
    display: grid;
    column-gap: 20px;
    row-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    padding-bottom: 100px;
  }
</style>