import type { LocaleCode, LocaleOption, TranslationTree } from './types';
import en from './locales/en';
import no from './locales/no';
import es from './locales/es';
import de from './locales/de';
import fr from './locales/fr';
import pt from './locales/pt';
import it from './locales/it';
import nl from './locales/nl';
import sv from './locales/sv';
import da from './locales/da';
import pl from './locales/pl';

export const LOCALE_OPTIONS: LocaleOption[] = [
  { code: 'en', nativeName: 'English', englishName: 'English', flag: '🇬🇧' },
  { code: 'no', nativeName: 'Norsk', englishName: 'Norwegian', flag: '🇳🇴' },
  { code: 'es', nativeName: 'Español', englishName: 'Spanish', flag: '🇪🇸' },
  { code: 'de', nativeName: 'Deutsch', englishName: 'German', flag: '🇩🇪' },
  { code: 'fr', nativeName: 'Français', englishName: 'French', flag: '🇫🇷' },
  { code: 'pt', nativeName: 'Português', englishName: 'Portuguese', flag: '🇵🇹' },
  { code: 'it', nativeName: 'Italiano', englishName: 'Italian', flag: '🇮🇹' },
  { code: 'nl', nativeName: 'Nederlands', englishName: 'Dutch', flag: '🇳🇱' },
  { code: 'sv', nativeName: 'Svenska', englishName: 'Swedish', flag: '🇸🇪' },
  { code: 'da', nativeName: 'Dansk', englishName: 'Danish', flag: '🇩🇰' },
  { code: 'pl', nativeName: 'Polski', englishName: 'Polish', flag: '🇵🇱' },
];

export const catalogs: Record<LocaleCode, TranslationTree> = {
  en,
  no,
  es,
  de,
  fr,
  pt,
  it,
  nl,
  sv,
  da,
  pl,
};

export function isLocaleCode(value: string): value is LocaleCode {
  return value in catalogs;
}
