
<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let c: any;
  export let cList: any[];
  export let dept: string;
  export let highlight: number;
  $: prereqs = c.Prerequisite ? c.Prerequisite.map(p => cList.find(c => c.id === p.id)) : [];

  const dispatch = createEventDispatcher();
  function selected() {
    dispatch("selected", { id: c.id });
  }
</script>

<label for="{c.id}">
  <input id="{c.id}" name="{dept}" type="radio" on:click="{selected}">
  <article class="hl-{highlight}">
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
    border-color: #23a;
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

    &.hl-1 {
      background-color: #c63;
    }
    &.hl-2 {
      border-color: #3a8;
    }
    &.hl-3 {
      background-color: #3a8;
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