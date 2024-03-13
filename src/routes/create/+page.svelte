<script lang="ts">
</script>

<div class="max-w-7xl mx-auto py-32">
	<form action="?/create" method="post" class="grid grid-cols-1">
		<h1>Create Post</h1>
		<label for="title">Title</label>
		<input type="text" name="title" id="title" />
		<label for="content">Content</label>
		<input type="text" name="content" id="content" />
		<button type="submit">Create Post</button>
	</form>
</div>

<style>
	.grid {
		display: grid;
	}

	.grid-cols-1 {
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}

	.max-w-7xl {
		max-width: 80rem;
	}

	.mx-auto {
		margin-inline-start: auto;
		margin-inline-end: auto;
	}

	.py-32 {
		padding-block-start: 8rem;
		padding-block-end: 8rem;
	}

	input {
		border-width: 2px;
		border-radius: 0.5rem;
		padding: 0.25rem;
	}

	input:focus {
		border-color: blueviolet;
		outline: none;
	}

	button {
		padding-block: 1rem;
		background-color: black;
		color: white;
		border-radius: 0.5rem;
		margin-block-start: 2rem;
		font-weight: 700;
	}

	button:hover {
		background-color: rgba(0, 0, 0, 0.8);
	}
</style>
