
<script lang="ts" context="module">
  import { getDatabase } from "../util/database";
  
  export async function load({ params }) {
    const { ok, data } = await getDatabase(params.dept);
    if (!ok) return { status: 500, error: new Error(`Server Error`) };
    const uniqueLevels = data.map(i => i.Level.name).filter((v, i, a) => a.indexOf(v) === i).sort();
		return {
      props: { classes: data, levels: uniqueLevels, dept: params.dept }
    };
	}
</script>

<script lang="ts">
  import Class from "$lib/Class.svelte";
  import { generateHighlighter } from "../util/highlight";
  import { onMount } from "svelte";
  export let classes: any[];
  export let levels: string[];
  export let dept: string;

  // Enables dynamic highlighting of classes
  let highlights: { [id: string]: number } = {};
  function generateHighlight(e: CustomEvent) {
    highlights = generateHighlighter(classes, e.detail.id)
  }
</script>

<header>
  <h1>Pathway: <span>{dept}</span></h1>
  <button>Pathway Description</button>
  <a href="">Pathway Video</a>
</header>
<ul class="key">
  <li>Selected</li>
  <li>Prerequisite</li>
  <li>Recommended Follow-Up</li>
  <li>Available Follow-Up</li>
</ul>
<hr>
<div class="pathway">
  {#each levels as level}
  <section>
    <h2>{level}</h2>
    {#each classes.filter(c => c.Level.name === level) as c}
    <Class
      c="{c}" cList="{classes}" dept="{dept}"
      highlight="{highlights[c.id]}" on:selected="{generateHighlight}" />
    {/each}
  </section>
  {/each}
</div>

<style lang="scss">
  header {
    display: flex;
    align-items: center;
    column-gap: 15px;

    h1 {
      flex: 1 1;
    }

    h1 span {
      text-transform: uppercase;
    }

    a, button {
      background-color: var(--interactable-secondary);
      border-radius: 5px;
      border: none;
      color: #fff;
      font-family: inherit;
      font-size: 0.6rem;
      font-weight: bold;
      text-decoration: none;
      text-transform: uppercase;
      padding: 8px 20px;
    }
  }

  hr {
    border: none;
    border-bottom: 3px solid var(--bg-secondary);
    margin: 25px 0;
  }

  .key {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 15px;
    font-size: 0.8rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .pathway {
    display: flex;
    column-gap: 50px;
    padding-bottom: 50px;
    overflow-x: auto;
  }

  section {
    flex: 1 1;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    min-width: 320px;
    max-width: 400px;

    h2 {
      font-size: 1rem;
    }
  }
</style>