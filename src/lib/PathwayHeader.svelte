
<script lang="ts">
  export let dept: string;
</script>

<header>
  <h1>Pathway: <span>{dept}</span></h1>
  <button>
    <svg><use xlink:href="/icon/bootstrap.svg#text" /></svg>
    Pathway Description
  </button>
  <a href="">
    <svg><use xlink:href="/icon/bootstrap.svg#play" /></svg>
    Pathway Video
  </a>
</header>

<style lang="scss">
  header {
    display: flex;
    align-items: center;
    column-gap: 15px;
    margin-bottom: 15px;

    h1 {
      flex: 1 1;
    }

    h1 span {
      text-transform: uppercase;
    }

    a, button {
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