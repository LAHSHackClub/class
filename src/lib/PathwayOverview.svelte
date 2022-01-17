
<script lang="ts">
  import { currentDepartment, departmentExtraInfo } from "../util/department";
</script>

<h2>{$currentDepartment.replace("-", " ")} Overview</h2>
<hr>
{#each $departmentExtraInfo.Media as m}
  <p><a href="{m.url}" target="_blank">{m.name}</a></p>
{/each}
<p class="desc">{$departmentExtraInfo.Description}</p>
{#each $departmentExtraInfo.Status as s}
  <p class="status">{s.name}</p>
{/each}
<p class="status-explainer">
  <a href="/integrity"><small>What does this tag mean?</small></a>
</p>
<br>

<style lang="scss">
  h2 {
    font-size: 1.2em;
    text-transform: uppercase;
  }
  hr {
    border: none;
    border-bottom: 3px solid var(--bg-secondary);
    margin: 20px 0;
    width: 150px;
  }
  p {
    font-size: 0.8rem;
  }
  .desc {
    margin-bottom: 30px;
  }
  .status {
    background-color: var(--bg-secondary);
    border-radius: 5px;
    font-size: 0.8rem;
    margin: 0;
    margin-top: 10px;
    padding: 5px 20px;
  }
  .status-explainer {
    margin-top: 0;

    a {
      color: var(--interactable-secondary);
    }
  }
</style>