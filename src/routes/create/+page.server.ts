import { db } from '$lib/db/db';
import { posts } from '$lib/db/schema';
import type { Actions } from '@sveltejs/kit';

export const actions = {
	async create({ request }) {
		const data = await request.formData();
		const title = data.get('title')?.toString() ?? '';
		const content = data.get('content')?.toString() ?? '';

		await db.insert(posts).values({
			title,
			content,
			userId: 1
		});
	}
} satisfies Actions;
