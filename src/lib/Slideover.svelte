
<script lang="ts">
  import IconButton from "./IconButton.svelte";
  import { slideoverContent } from "../util/slideover";
  import { fade, fly } from "svelte/transition";

  function closeSlideover() {
    $slideoverContent = null;
  }
</script>

{#if $slideoverContent}
<div class="cover" transition:fade>
  <section class="slideover" transition:fly="{{x: -100}}">
    <span class="close">
      <IconButton icon="play" on:click="{closeSlideover}" />
    </span>
    <div class="content">
      <svelte:component this="{$slideoverContent}"></svelte:component>
    </div>
  </section>
</div>
{/if}

<style lang="scss">
  .cover {
    background-color: #000a;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
  .slideover {
    background-color: #345;
    border-top-right-radius: 15px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 30px 10px;
    width: calc(380px + 15vw);

    .content {
      width: 380px;
      margin-left: auto;
    }

    .close {
      position: absolute;
      top: 44px;
      right: 20px;
    }
  }
</style>