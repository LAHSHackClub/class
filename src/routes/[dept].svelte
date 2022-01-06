
<script lang="ts" context="module">
  export async function load({ params, fetch }) {
		const url = `https://db.lahs.club/cache/9ef0d1b5876b479f97530f714f126c32.json`;
		const res = await fetch(url);

		if (res.ok && params.dept) return {
      props: {
        classes: await res.json(),
        dept: params.dept
      }
    };

		return {
			status: 500,
			error: new Error(`Server Error`)
		};
	}
</script>

<script lang="ts">
  import { onMount } from "svelte";
  export let classes;
  export let dept;

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
  <section>
    <h2>Introductory</h2>
    <article>
      <h3>Intro to {dept}</h3>
      <p>Here is a brief description of the class that gives a general overview</p>
    </article>
    <article>
      <h3>Intro to Engineering & Design</h3>
      <p>Here is a brief description of the class that gives a general overview</p>
    </article>
    <article>
      <h3>Intro to Engineering & Design</h3>
      <p>Here is a brief description of the class that gives a general overview</p>
    </article>
  </section>
  <section>
    <h2>Year 1</h2>
    <article>
      <h3>Intro to Engineering & Design</h3>
      <p>Here is a brief description of the class that gives a general overview</p>
    </article>
    <article>
      <h3>Intro to Engineering & Design</h3>
      <p>Here is a brief description of the class that gives a general overview</p>
    </article>
  </section>
  <section>
    <h2>Year 2</h2>
    <article>
      <h3>Intro to Engineering & Design</h3>
      <p>Here is a brief description of the class that gives a general overview</p>
    </article>
    {#each classes as c}
    <article>
      <h3>{c.Name}</h3>
      <p>{c.Description}</p>
    </article>
    {/each}
  </section>
  <section>
    <h2>Year 3</h2>
    <article>
      <h3>AP Psychology</h3>
    </article>
  </section>
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