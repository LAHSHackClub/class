
<script lang="ts" context="module">
  export async function load({ params, fetch }) {
		const url = `https://db.lahs.club/cache/9ef0d1b5876b479f97530f714f126c32.json`;
		const res = await fetch(url);

    if (!res.ok) return { status: 500, error: new Error(`Server Error`) };

    const data = await res.json();
		if (params.dept) return {
      props: {
        classes: data,
        levels: data.map(i => i.Level.name).filter((v, i, a) => a.indexOf(v) === i).sort(),
        dept: params.dept
      }
    };
	}
</script>

<script lang="ts">
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
    <article>
      <h3>{c.Name}</h3>
      <p>{c.Description}</p>
      <p>{JSON.stringify(c.Prerequisite)}</p>
    </article>
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

    article {
      background-color: #237;
      border-radius: 5px;
      padding: 15px 20px;
      font-size: 0.7em;

      h3 {
        margin: 0;
        text-transform: uppercase;
      }
      p {
        color: var(--text-secondary);
        margin-top: 5px;
        margin-bottom: 0;
      }
    }
  }
</style>