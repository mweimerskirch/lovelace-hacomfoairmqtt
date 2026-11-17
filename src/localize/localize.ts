import de from './languages/de.json';
import en from './languages/en.json';
import fr from './languages/fr.json';
import lb from './languages/lb.json';

const languages: Record<string, unknown> = { en, de, fr, lb };

let currentLanguage = 'en';

/** Called by the card with hass.locale.language so that labels follow the user's profile language. */
export function setLanguage(language: string | undefined): void {
  if (language) {
    currentLanguage = language;
  }
}

function lookup(lang: string, key: string): string | undefined {
  const value = key
    .split('.')
    .reduce<unknown>((o, k) => (o && typeof o === 'object' ? (o as Record<string, unknown>)[k] : undefined), languages[lang]);
  return typeof value === 'string' ? value : undefined;
}

export function localize(key: string, language?: string): string {
  const lang = (language || currentLanguage).toLowerCase();
  return lookup(lang, key) ?? lookup(lang.split(/[-_]/)[0], key) ?? lookup('en', key) ?? key;
}
