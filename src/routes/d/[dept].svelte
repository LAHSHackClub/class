
<script lang="ts" context="module">
  import { getDatabase } from "../../util/database";
  
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
  import IconButton from "$lib/IconButton.svelte";
  import PathwayHeader from "$lib/PathwayHeader.svelte";
  import PathwayKey from "$lib/PathwayKey.svelte";
  import { currentDepartment } from "../../util/department";
  import { generateHighlighter } from "../../util/highlight";
  
  export let classes: any[];
  export let levels: string[];
  export let dept: string;

  // Maps current dept to dept parameter
  $: $currentDepartment = dept;

  // Enables dynamic highlighting of classes
  let highlights: { [id: string]: number } = {};
  function generateHighlight(e: CustomEvent) {
    highlights = generateHighlighter(classes, e.detail.id)
  }

  function classesFromLevel(level: string) {
    return classes
      .filter(c => c.Level.name === level)
      .sort((a, b) => a.Name.localeCompare(b.Name));
  }

  function scroll(dir: number) {
    let el = document.querySelector(".pathway");
    el.scrollBy({
      left: dir * 100,
      behavior: "smooth"
    });
  }
</script>

<PathwayHeader dept="{dept}" />
<PathwayKey />
<hr>
<div class="pathway">
  {#each levels as level}
  <section>
    <h2>{level}</h2>
    {#each classesFromLevel(level) as c}
    <Class on:selected="{generateHighlight}"
      c="{c}" dept="{dept}" highlight="{highlights[c.id]}" />
    {/each}
  </section>
  {/each}
  <div class="controls">
    <span><IconButton icon="arrow-left" on:click="{() => {scroll(-1)}}" /></span>
    <span><IconButton icon="arrow-right" on:click="{() => {scroll(1)}}" /></span>
  </div>
</div>

<style lang="scss">
  hr {
    border: none;
    border-bottom: 3px solid var(--bg-secondary);
    margin: 25px 0;
    margin-bottom: 15px;
  }

  .pathway {
    display: flex;
    column-gap: 20px;
    min-height: 300px;
    padding-bottom: 50px;
    overflow-x: auto;
    position: relative;

    .controls {
      border-radius: 5px;
      color: var(--text-primary);
      display: flex;
      place-items: center;
      column-gap: 5px;
      padding: 5px 0;
      position: fixed;
      bottom: 30px;
      right: 40px;
      z-index: 5;
      opacity: 0.5;
      transition-duration: 0.2s;

      > span {
        background: var(--interactable-secondary);
        border-radius: 5px;
        transition-duration: 0.2s;
      }
      > span:hover {
        background: var(--interactable-primary);
      }

      &:hover {
        opacity: 1;
      }
    }
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