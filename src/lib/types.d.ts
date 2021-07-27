/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
export interface Locals {
	userid: string;
}

interface FeedObject {
	title: string;
	link: string;
	imageUrl: string;
	description: string;
	pubDate: string;
}
