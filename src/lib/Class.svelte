
<script lang="ts">
  export let c: any;
  export let cList: any[];
  export let dept: string;
  $: prereqs = c.Prerequisite ? c.Prerequisite.map(p => cList.find(c => c.id === p.id)) : [];

  function click(e) {
    if (e.currentTarget.checked)
    console.log('h')
  }
</script>

<label for="{c.id}">
  <input id="{c.id}" name="{dept}" type="radio" on:click="{click}">
  <article>
    <h3>{c.Name}</h3>
    <p>{c.Description}</p>
    {#if prereqs.length > 0}
    <p class="rr">
      <b>RR:</b> {prereqs.map(p => p.Name).join(", ")}
    </p>
    {/if}
  </article>
</label>

<style lang="scss">
  input {
    display: none;
  }
  input:checked + article {
    background-color: #23a;
  }

  article {
    background-color: #223;
    border: 3px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    padding: 15px 20px;
    font-size: 0.7em;
    transition-duration: 0.2s;

    &:hover {
      border-color: #23a;
    }

    h3 {
      margin: 0;
      text-transform: uppercase;
    }
    p {
      color: var(--text-secondary);
      margin-top: 5px;
      margin-bottom: 0;

      &.rr {
        font-size: 0.8em;
      }
    }
  }
</style>