
<script lang="ts">
  import { fade } from "svelte/transition";
  export let displayInstructions = true;
</script>

<div class="key-wrapper">
  {#if !displayInstructions}
  <ul class="key" transition:fade="{{duration:200}}">
    <li data-color="selected">Selected Class</li>
    <li data-color="prerequisite">Recommended Before</li>
    <li data-color="future">Recommended After</li>
    <li data-color="future-border">Available After</li>
  </ul>
  {:else}
  <p class="instructions">
    💡 Click on a class to see future options and recommendations. Double click a class to save it!
  </p>
  {/if}
</div>

<style lang="scss">
  .key-wrapper {
  }

  .instructions {
    background-color: var(--bg-secondary);
    border-radius: 5px;
    box-sizing: border-box;
    color: var(--text-secondary);
    font-size: 0.7em;
    margin: -4.5px 0;
    padding: 6px 20px;
    width: 100%;
  }

  .key {
    color: var(--text-secondary);
    display: flex;
    justify-content: space-between;
    column-gap: 45px;
    row-gap: 10px;
    flex-wrap: wrap;
    font-size: 0.8rem;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;

    li {
      display: flex;
      align-items: center;
    }
    li::before {
      box-sizing: border-box;
      content: "";
      display: inline-block;
      height: 20px;
      width: 20px;
      background-color: var(--bg-secondary);
      border-radius: 5px;
      margin-right: 10px;
    }
    li[data-color="selected"]::before {
      background-color: var(--selected);
    }
    li[data-color="prerequisite"]::before {
      background-color: var(--prerequisite);
    }
    li[data-color="future"]::before {
      background-color: var(--future);
    }
    li[data-color="future-border"]::before {
      border: 3px solid var(--future);
    }
  }
</style>