
<script lang="ts">
  import { bookmarks, addBookmark } from "../util/bookmarks";
  import { createEventDispatcher } from "svelte";
  import { popoverContent } from "../util/popover";

  export let c: any;
  export let cList: any[];
  export let dept: string;
  export let highlight: number;

  $: isBookmarked = $bookmarks.some(b => b === c.id);
  $: prereqs = c.Prerequisite ? c.Prerequisite.map(p => cList.find(c => c.id === p.id)) : [];

  const dispatch = createEventDispatcher();
  function selected() {
    dispatch("selected", { id: c.id });
  }
  function alerter() {
    addBookmark(c.id);
    popoverContent.set({
      message: "Saved " + c.Name,
      icon: "bookmarkcheck"
    });
  }
</script>

<label for="{c.id}" on:dblclick="{alerter}">
  <input id="{c.id}" name="{dept}" type="radio" on:click="{selected}">
  <article class="hl-{highlight}">
    <h3>
      <span>{c.Name}</span>
      {#if isBookmarked}
      <svg><use xlink:href="/icon/bootstrap.svg#bookmarkcheck" /></svg>
      {/if}
    </h3>
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
    background-color: var(--selected);
    border-color: var(--selected);
  }

  article {
    background-color: var(--bg-secondary);
    border: 3px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    padding: 15px 20px;
    font-size: 0.7em;
    transition-duration: 0.2s;
    user-select: none;
    -webkit-user-select: none;

    &.hl-1, &.hl-2, &.hl-3 {
      color: var(--text-primary);
    }
    &.hl-1 {
      background-color: var(--prerequisite);
    }
    &.hl-2 {
      border-color: var(--future);
    }
    &.hl-3 {
      background-color: var(--future);
    }

    &:hover {
      border-color: var(--selected);
    }

    h3 {
      display: flex;
      justify-content: space-between;
      margin: 0;
      text-transform: uppercase;

      svg {
        padding: 3px 0;
        height: 18px;
        width: 18px;
      }
    }
    p {
      color: var(--text-secondary);
      font-size: 0.85em;
      margin-top: 5px;
      margin-bottom: 0;

      &.rr {
        font-size: 0.8em;
      }
    }
  }
</style>