import { defaulLanguage, languageStore } from '$lib/store';
import type { PageLoad } from './$types';

export const ssr = false;

export const load: PageLoad = async ({ url }) => {
	const lang = url.searchParams.get('lang') ?? defaulLanguage;

	languageStore.set(lang);
};
