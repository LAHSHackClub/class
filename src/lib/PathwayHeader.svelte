
<script lang="ts">
  import PathwayOverview from "./PathwayOverview.svelte";
  import { slideoverContent } from "../util/slideover";
  export let dept: string;

  function openSlideover() {
    $slideoverContent = PathwayOverview;
  }
</script>

<header>
  <h1><span>{dept.replace("-", " ")}</span></h1>
  <button on:click="{openSlideover}">
    <svg><use xlink:href="/icon/bootstrap.svg#text" /></svg>
    <svg><use xlink:href="/icon/bootstrap.svg#play" /></svg>
    <span>|</span>
    Pathway Overview
  </button>
</header>

<style lang="scss">
  header {
    display: flex;
    align-items: center;
    column-gap: 15px;
    margin-bottom: 5px;

    h1 {
      font-size: 1.5rem;
      flex: 1 1;
    }

    h1 span {
      text-transform: uppercase;
    }

    button {
      background-color: var(--interactable-secondary);
      border-radius: 5px;
      border: none;
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      column-gap: 10px;
      font-family: inherit;
      font-size: 0.6rem;
      font-weight: bold;
      text-decoration: none;
      text-transform: uppercase;
      padding: 8px 16px;
      transition-duration: 0.2s;

      &:hover, &:focus {
        background-color: var(--interactable-primary);
      }

      svg {
        height: 14px;
        width: 14px;
      }
    }
  }
</style>