
<script lang="ts" context="module">
  import { getDatabase } from "../util/pathway";
  
  export async function load({ params }) {
    const { ok, data } = await getDatabase(params.dept);
    if (!ok) return { status: 500, error: new Error(`Server Error`) };
		return {
      props: {
        classes: data,
        levels: data.map(i => i.Level.name).filter((v, i, a) => a.indexOf(v) === i).sort(),
        dept: params.dept
      }
    };
	}
</script>

<script lang="ts">
  import Class from "$lib/Class.svelte";
  import { onMount } from "svelte";
  export let classes;
  export let levels: string[];
  export let dept: string;

  let highlights: { [id: string]: number } = {};
  function selected(e: any) {
    highlights = {};
    const x = classes.find(c => c.id === e.detail.id);

    // Highlight futures; classes with this one as a prereq
    classes.filter(c => {
      if (c.Prerequisite?.length < 1) return false;
      if (c.Prerequisite.some(p => p.id === e.detail.id))
        highlights[c.id] = 3;
    });

    // Highlight classes without prereqs
    classes.filter(c => {
      if (c.Prerequisite?.length < 1)
        highlights[c.id] = 2;
    });

    // Highlight shared prereq classes (sidesteps)
    classes.filter(c => {
      if (c.Prerequisite?.length < 1) return false;
      if (c.Prerequisite.every(l => x.Prerequisite.some(p => p.id === l.id)))
        highlights[c.id] = 3;
    });

    // Highlight all prereq classes
    if (x.Prerequisite?.length > 0)
      x.Prerequisite.forEach(p => { highlights[p.id] = 1; });
  }

  // Enables scrolling vertically
  let el: Element;
  function transformScroll(e: any) {
    if (!e.deltaY || e.deltaX > 0) return;
    e.currentTarget.scrollLeft += e.deltaY;
  }
  onMount(() => el.addEventListener("wheel", transformScroll));
</script>

<h1>Pathway: <span>{dept}</span></h1>
<div class="description">
  <ul class="key">
    <li>Selected Class</li>
    <li>Prerequisite Class</li>
    <li>Recommended Future Class</li>
    <li>Available Future Class</li>
  </ul>
  <p>Pathway description, key, and other media</p>
</div>
<hr>
<div class="pathway" bind:this="{el}">
  {#each levels as level}
  <section>
    <h2>{level}</h2>
    {#each classes.filter(c => c.Level.name === level) as c}
    <Class
      c="{c}" cList="{classes}" dept="{dept}"
      highlight="{highlights[c.id]}" on:selected="{selected}" />
    {/each}
  </section>
  {/each}
</div>

<style lang="scss">
  h1 span {
    text-transform: uppercase;
  }

  hr {
    border: none;
    border-bottom: 3px solid #34b;
    margin: 35px 0;
  }

  .description {
    display: flex;
    flex-direction: row;
    font-size: 0.8em;

    > * {
      flex: 1 1;
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