
<script lang="ts">
  import { analytics } from "../util/analytics";
  import { onMount } from "svelte";

  onMount(async () => await analytics.increment("info"));
</script>

<h1>Picking Courses</h1>
<p>. . .</p>
<hr>
<h3>Using classes<span class="brand">.+</span></h3>
<p><b>classes<span class="brand">.+</span></b> is a directory of all courses and pathways available at Los Altos High School. It shows potential options on what classes you can take, based on the school's recommended student pathways, and helps you plan your next choices.</p>
<h4>Tips:</h4>
<ol>
  <li>Click on a department on the left to see recommended class pathways.</li>
  <li>Click on any class in a pathway to see the recommended prerequisites and future options available.</li>
  <li>Click on "Pathway Overview" in the top right (if available) to see a general overview of the department.</li>
  <li>Double click on any class to save it for future reference, and double click it again to remove it.</li>
  <li>Click on attached media to view in a larger form.</li>
</ol>
<h4>It's Just a Recommendation:</h4>
<p>The "Year" number doesn't mean a grade level. It indicates how much experience in a pathway is recommended before taking a class. For example, anyone can take an Intro or Year 1 class, but to take a Year 3 class, it is recommended that you have two years of experience before (and at least one of the highlighted prior classes).</p>
<p>Some classes will have several "Recommended Before" courses highlighted. You only need one class out of those highlighted to proceed (for example, you don't need to take Drawing III, Photo II, <em>and</em> Digital Photo to take AP Studio Art - just one of them is fine). LAHS classes are open enrollment so you may be able to skip levels with teacher approval. Talk to your teacher or counselor for more details.</p>
<hr class="short">
<h3>Need more help?</h3>
<p>Your teachers and counselors are a great resource for helping you choose your next courses.</p>
<br>

<style lang="scss">
	p {
		line-height: 2;
		font-size: 0.8em;
	}

  hr {
    border: none;
    border-bottom: 3px solid var(--bg-secondary);
    margin: 25px 0;

    &.short {
      width: 15%;
    }
  }

  h4 {
    margin-bottom: 10px;
  }

  ol {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    margin: 0;
    font-size: 0.7em;
  }
</style>