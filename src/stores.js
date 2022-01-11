import { writable, derived } from 'svelte/store';

export const allLoadedWxrds = writable([]);
export const displayMode = writable('Text');