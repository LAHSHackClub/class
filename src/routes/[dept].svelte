
<script lang="ts" context="module">
  import { getDatabase } from "../util/database";
  
  export async function load({ params }) {
    // Get dept data and parse it
    const { ok, data } = await getDatabase(params.dept);
    if (!ok) return { status: 500, error: new Error(`Server Error`) };
    const uniqueLevels = data.map(l => l.Level).filter((v, i, a) => a.findIndex(x => x.name === v.name) === i).sort((a, b) => a.name.localeCompare(b.name));

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
  import { analytics } from "../util/analytics";
  import { currentDepartment, departmentExtraInfo } from "../util/department";
  import { generateHighlighter } from "../util/highlight";
  import { onMount, onDestroy } from "svelte";
  
  export let classes: any[];
  export let levels: any[];
  export let dept: string;

  // Maps current dept to dept parameter
  $: $currentDepartment = dept;
  let deptUnsub: any;
  onMount(() => {
    deptUnsub = currentDepartment.subscribe(async d => {
      highlights = {};
      await analytics.increment(d);
    });
  });
  onDestroy(() => deptUnsub ? deptUnsub() : null);

  // Enables dynamic highlighting of classes
  let highlights: { [id: string]: number } = {};
  function generateHighlight(e: CustomEvent) {
    const implicitEnabled = $departmentExtraInfo.EnableImplicitJump.name === "True";
    highlights = generateHighlighter(classes, e.detail.id, implicitEnabled)
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

<PathwayHeader dept={dept} />
<PathwayKey displayInstructions="{Object.keys(highlights).length === 0}" />
<hr>
<div class="pathway">
  {#each levels as level}
  <section>
    <h2>{level.name}</h2>
    {#each classesFromLevel(level.name) as c}
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
    margin: 20px 0;
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
      background-color: var(--bg-secondary);
      border-radius: 5px;
      font-size: 0.85rem;
      margin-top: 6px;
      margin-bottom: 0;
      padding: 5px 20px;
      text-transform: uppercase;
      user-select: none;
      -webkit-user-select: none;
    }
  }
</style>