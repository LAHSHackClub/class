
<script lang="ts" context="module">
  export async function load({ params, fetch }) {
		//const url = `https://db.lahs.club/cache/814bc6c60d0a4e13bc3f8bf33c8a3117.json`;
		//const res = await fetch(url);

		if (params.dept) return {
      props: {
        dept: params.dept
      }
    };

		return {
			status: 500,
			error: new Error(`Server Error`)
		};
	}
</script>

<script>
  export let dept;
</script>

<h1>Pathway: {dept}</h1>