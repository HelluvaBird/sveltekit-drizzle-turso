<h1>Welcome to SvelteKit - Drizzle - Turso</h1>
<div class="grid">
	<a href="/create">Create</a>
	<a href="/read">Read</a>
	<a href="/update">Update</a>
	<a href="/delete">Delete</a>
</div>

<style>
	.grid {
		display: grid;
		max-width: 1280px;
		justify-items: start;
		justify-content: start;
		gap: 2rem;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		.grid {
			grid-template-columns: repeat(1, minmax(0, 1fr));
		}
	}
	@media (min-width: 768px) {
		.grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (min-width: 1024px) {
		.grid {
			grid-template-columns: repeat(4, auto);
		}
	}
</style>
