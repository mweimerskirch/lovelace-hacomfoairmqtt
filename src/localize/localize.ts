import * as en from './languages/en.json';
import * as de from './languages/de.json';
import * as fr from './languages/fr.json';
import * as lb from './languages/lb.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const languages: any = {
  en,
  fr,
  de,
  lb,
};

export function localize(string: string, search = '', replace = ''): string {
  const lang = (localStorage.getItem('selectedLanguage') || 'en').replace(/['"]+/g, '').replace('-', '_');

  let translated: string;

  try {
    translated = string.split('.').reduce((o, i) => o[i], languages[lang]);
  } catch (e) {
    translated = string.split('.').reduce((o, i) => o[i], languages['en']);
  }

  if (translated === undefined) translated = string.split('.').reduce((o, i) => o[i], languages['en']);

  if (search !== '' && replace !== '') {
    translated = translated.replace(search, replace);
  }
  return translated;
}
