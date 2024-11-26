import { translations } from "./translations";

export function t(key: keyof typeof translations | null): string {
	if (!key) return '';

	return translations[key] || key;
};
