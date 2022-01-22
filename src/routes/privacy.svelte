
<script lang="ts">
  import { analytics } from "../util/analytics";
  import { onMount } from "svelte";

  onMount(async () => await analytics.increment("info"));
</script>

<h1>Privacy Policy</h1>
<p>This privacy policy and data usage report is effective as of January 10, 2022.</p>
<hr>
<h3>A LAHS Hack Club Project</h3>
<p><b>classes<span class="brand">.+</span></b> (classes.lahs.plus) is run by Los Altos High School's Hack Club. We are a programming and maker club with a wide variety of projects we work on - you might have seen some of our work around!</p>
<p>If you are interested in learning more about us, <a href="https://get.lahs.club">check out our GET program for websites</a> or <a href="https://lahs.club">our main page.</a></p>
<h3>App Data Usage</h3>
<p>This website features a double-click save feature that allows users to save classes to lists for future reference and planning. In order for this feature to work, we use your web browser's built-in storage functionality. We do not upload or have access to any of the data you enter into this app.</p>
<p>Other basic information may be logged to monitor usage and maintain app health for all users. No personal information is collected. Data on this site was obtained through public documents and teachers who have consented to provide additions, and approved by relevant staff members. <a href="/integrity">Read more about our data integrity reporting.</a></p>
<h3>Contact</h3>
<p>If you have feedback, please reach out to us at <a href="https://get.lahs.club/help">the LAHS GET support form</a>.</p>
<br>

<style>
	p {
		line-height: 2;
		font-size: 0.8em;
	}

  hr {
    border: none;
    border-bottom: 3px solid var(--bg-secondary);
    margin: 12px 0;
    margin-bottom: 20px;
  }
</style>