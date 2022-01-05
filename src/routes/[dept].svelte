
<script lang="ts" context="module">
  export async function load({ params, fetch }) {
		//const url = `https://db.lahs.club/cache/814bc6c60d0a4e13bc3f8bf33c8a3117.json`;
		//const res = await fetch(url);

		if (params.dept) return {
      props: {
        dept: params.dept
      }
    };

		return {
			status: 500,
			error: new Error(`Server Error`)
		};
	}
</script>

<script>
  export let dept;
</script>

<h1>Pathway: <span>{dept}</span></h1>
<div class="pathway">
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
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    min-width: 320px;

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