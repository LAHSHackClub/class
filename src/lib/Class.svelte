
<script lang="ts">
  export let c: any;
  export let cList: any[];
  $: prereqs = c.Prerequisite ? c.Prerequisite.map(p => cList.find(c => c.id === p.id)) : [];
</script>

<article>
  <h3>{c.Name}</h3>
  <p>{c.Description}</p>
  {#if prereqs.length > 0}
  <p class="rr">
    <b>RR:</b> {prereqs.map(p => p.Name).join(", ")}
  </p>
  {/if}
</article>

<style lang="scss">
  article {
    background-color: #237;
    border-radius: 5px;
    padding: 15px 20px;
    font-size: 0.7em;

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