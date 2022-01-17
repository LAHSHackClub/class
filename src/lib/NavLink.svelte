
<script lang="ts">
  export let href: string;
  export let icon: string;
</script>

<a href="{href}">
  <svg><use xlink:href="/icon/bootstrap.svg#{icon}" /></svg>
  <slot />
</a>

<style lang="scss">
  a {
    border: 1.5px solid var(--interactable-secondary);
    border-radius: 6px;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    column-gap: 10px;
    font-size: 0.75em;
    text-decoration: none;
    padding: 6px 15px;
    transition-duration: 0.2s;

    &:hover {
      background-color: var(--interactable-primary);
      border-color: var(--interactable-primary);
      color: var(--text-primary);
    }

    svg {
      height: 16px;
      width: 16px;
    }

    @media (min-height: 1000px) {
      padding: 8px 15px;
    }
  }
</style>