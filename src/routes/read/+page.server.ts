import { db } from '$lib/db/db';
import { posts } from '$lib/db/schema';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		posts: await db.select().from(posts)
	};
}) satisfies PageServerLoad;
