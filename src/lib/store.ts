import { writable } from 'svelte/store';

export const defaulLanguage = 'fr';

export const languageStore = writable(defaulLanguage);
