<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	{#each data.posts as post (post.id)}
		<div>
			<p>{post.title}</p>
			<p>{post.content}</p>
		</div>
	{/each}
</div>
