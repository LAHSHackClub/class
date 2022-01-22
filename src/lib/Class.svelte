
<script lang="ts">
  import { bookmarks, toggleBookmark } from "../util/bookmarks";
  import { createEventDispatcher } from "svelte";
  import { popoverContent } from "../util/popover";

  export let c: any;
  export let dept: string = "default";
  export let highlight: number = 0;
  $: isBookmarked = $bookmarks.some(b => b === c.id);

  const dispatch = createEventDispatcher();
  function selected() {
    dispatch("selected", { id: c.id });
  }
  function alerter() {
    const added = toggleBookmark(c.id, window.localStorage);
    popoverContent.set({
      message: (added ? "Saved " : "Removed ") + c.Name,
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
    <p class="desc">{c.Description}</p>
    {#if c.Tags}
    <div class="tags">
      {#each c.Tags as t}
      <span class="tag">{t.name}</span>
      {/each}
    </div>
    {/if}
    {#if c.Media}
    <div class="media">
      {#each c.Media as m}
      <a href="{m.url}" target="_blank">
        <img src="{m.url}" alt="{m.alt}">
      </a>
      {/each}
    </div>
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

    .media a, .tags span {
      background-color: transparent;
      border-color: var(--text-secondary);
    }
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

      .media a, .tags span {
        background-color: transparent;
        border-color: var(--text-secondary);
      }
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

      span {
        flex: 1 1;
      }

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
    }

    .media {
      display: flex;
      column-gap: 10px;
      flex-wrap: wrap;
      margin-top: 10px;

      a {
        background-color: var(--bg-primary);
        border: 1.5px solid var(--bg-primary);
        border-radius: 5px;
        display: grid;
        place-items: center;
        min-height: 42px;
        min-width: 42px;
      }

      img {
        border-radius: 5px;
        max-height: 42px;
        max-width: 42px;
      }
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;

      span {
        background-color: var(--bg-primary);
        border: 1.5px solid transparent;
        border-radius: 5px;
        color: var(--text-secondary);
        font-size: 0.7em;
        margin-right: 5px;
        padding: 3px 5px;
      }
    }
  }
</style>