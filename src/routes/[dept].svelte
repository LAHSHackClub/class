
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
  <button>
    <svg><use xlink:href="/icon/bootstrap.svg#text" /></svg>
    Pathway Description
  </button>
  <a href="">
    <svg><use xlink:href="/icon/bootstrap.svg#play" /></svg>
    Pathway Video
  </a>
</header>
<ul class="key">
  <li data-color="selected">Selected Class</li>
  <li data-color="prerequisite">Prerequisite</li>
  <li data-color="future">Recommended Follow-Up</li>
  <li data-color="future-border">Available Follow-Up</li>
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
    margin-bottom: 15px;

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
      cursor: pointer;
      display: flex;
      align-items: center;
      column-gap: 10px;
      font-family: inherit;
      font-size: 0.6rem;
      font-weight: bold;
      text-decoration: none;
      text-transform: uppercase;
      padding: 8px 16px;
      transition-duration: 0.2s;

      &:hover, &:focus {
        background-color: var(--interactable-primary);
      }

      svg {
        height: 14px;
        width: 14px;
      }
    }
  }

  hr {
    border: none;
    border-bottom: 3px solid var(--bg-secondary);
    margin: 25px 0;
  }

  .key {
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 15px;
    font-size: 0.8rem;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      align-items: center;
    }
    li::before {
      box-sizing: border-box;
      content: "";
      display: inline-block;
      height: 20px;
      width: 20px;
      background-color: var(--bg-secondary);
      border-radius: 5px;
      margin-right: 10px;
    }
    li[data-color="selected"]::before {
      background-color: var(--selected);
    }
    li[data-color="prerequisite"]::before {
      background-color: var(--prerequisite);
    }
    li[data-color="future"]::before {
      background-color: var(--future);
    }
    li[data-color="future-border"]::before {
      border: 3px solid var(--future);
    }
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