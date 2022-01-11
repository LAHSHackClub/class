
<script lang="ts">
  export let icon: string;
</script>

<button on:click>
  <svg><use xlink:href="/icon/bootstrap.svg#{icon}" /></svg>
</button>

<style>
  button {
    background: none;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    display: grid;
    place-items: center;
    height: 40px;
    width: 40px;
  }

  button svg {
    height: 100%;
    width: 100%;
  }
</style>