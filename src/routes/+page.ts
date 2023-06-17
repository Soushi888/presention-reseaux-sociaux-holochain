import { languageStore } from '$lib/store';
import type { PageLoad } from './$types';

export const ssr = false;

export const load: PageLoad = async ({ url }) => {
	const lang = url.searchParams.get('lang') ?? 'en';

	languageStore.set(lang);
};
