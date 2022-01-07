
<script lang="ts" context="module">
  import { getDatabase } from "../util/pathway";
  
  export async function load({ params, fetch }) {
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

  // Enables scrolling vertically
  let el: Element;
  function transformScroll(e: any) {
    if (!e.deltaY || e.deltaX > 0) return;
    e.currentTarget.scrollLeft += e.deltaY;
  }
  onMount(() => el.addEventListener("wheel", transformScroll));
</script>

<h1>Pathway: <span>{dept}</span></h1>
<div class="pathway" bind:this="{el}">
  {#each levels as level}
  <section>
    <h2>{level}</h2>
    {#each classes.filter(c => c.Level.name === level) as c}
    <Class c="{c}" cList="{classes}" />
    {/each}
  </section>
  {/each}
</div>

<style lang="scss">
  h1 span {
    text-transform: uppercase;
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