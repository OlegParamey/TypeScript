// Create an object `translations` where the key is
// a language code (`'en'`, `'ru'`, `'de'`) and the value is
//  a greeting string.
// Use the `Record` utility type to type this object.
let translations: Record<'en' | 'ru' | 'de', string>;

translations = {
	en: 'Hello!',
	ru: 'Привет!',
	de: 'Hallo!',
};
