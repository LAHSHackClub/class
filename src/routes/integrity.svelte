
<script lang="ts">
  import { analytics } from "../util/analytics";
  import { onMount } from "svelte";

  onMount(async () => await analytics.increment("info"));
</script>

<h1>Verified Information Tags</h1>
<p>VITs ensure the integrity of information presented to you - find them at the bottom of each department's pathway overview.</p>
<hr>
<h3>✅ Officially Approved</h3>
<p class="tag"><small><b>1 department has this status.</b></small></p>
<p>This tag means all classes, pathway information, and attached data (like videos, media, etc) have been OK'd by an LAHS staff member. Media, course descriptions, and other information may have been provided directly by staff. This could be that department's head or a teacher in that department. The information and recommendations presented for that pathway and department are ensured to be in line with the school, and would be equivalent to using an official resource like the course selection handbook, handouts, or counselor recommendations.</p>
<h3>⏳ Pending Approval</h3>
<p class="tag"><small><b>1 department has this status.</b></small></p>
<p>This tag means we have contacted and are currently waiting for an LAHS staff member to approve the information presented. Course descriptions, media, and other info has been augmented from public documents, like the official LAHS course handbook, or from incomplete talks with staff members or teachers.</p>
<h3>🤷🏻‍♀️ Unverified</h3>
<p class="tag"><small><b>0 departments have this status.</b></small></p>
<p>This tag means we were unable to or have not yet gotten in touch with a staff member, or they refused to approve the information. If applicable, the reason for refusal is published. Since the course descriptions, pathways, media, recommendations, and other information is all still constructed using public documents, we believe the data is still reliable enough to inform decisions - however, you may want to cross-reference with provided handouts and documents.</p>
<h3>Report Incorrect Information</h3>
<p>If a part of our data is incorrect, please reach out to us at <a href="https://get.lahs.club/help">the LAHS GET support form</a>.</p>
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

  .tag {
    margin: 0;
  }
</style>