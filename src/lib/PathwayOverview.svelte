
<script lang="ts">
  import { currentDepartment, departmentExtraInfo } from "../util/department";
</script>

<h2>{$currentDepartment.replace("-", " ")} Overview</h2>
{#each $departmentExtraInfo.Media as m}
  <p><a href="{m.url}" target="_blank">{m.name}</a></p>
{/each}
<p>{$departmentExtraInfo.Description}</p>

<style lang="scss">
  h2 {
    font-size: 1.2em;
    text-transform: uppercase;
    padding-top: 2px;
  }
  p {
    font-size: 1rem;
  }
</style>