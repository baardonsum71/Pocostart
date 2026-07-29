# poco start

Spanish for beginners — **iOS & Android** · [pocostart.com](https://pocostart.com)

**Stack:** Expo · Supabase · RevenueCat  
**Price:** 49 NOK / month · 399 NOK / year  
**Languages:** EN · NO · ES · DE · FR · PT · IT · NL · SV · DA · PL  
(Users pick app language at signup; Spanish is what they learn.)

## Run

```bash
cp .env.example .env
npm install
npx expo start
```

Use **Try without an account** to explore UI without keys.

## App language

- Picker on welcome + signup
- Change anytime in Profile
- Stored as `preferred_locale` on the Supabase profile

## Pronunciation (mic)

- **Speak** tab + practice step inside lessons
- Listen to model Spanish (TTS) → speak into mic → score vs target phrase
- Uses `expo-speech-recognition` (Spanish `es-ES`) — requires a **native build** (Xcode/Android), not Expo Go
- Grant mic + speech recognition permissions when prompted

## Build without EAS credits (terminal + Transporter)

See **[docs/LOCAL_BUILD.md](docs/LOCAL_BUILD.md)**.

```bash
# iOS IPA → upload with Apple Transporter
export APPLE_TEAM_ID=XXXXXXXXXX
npm run build:ios:local

# Android AAB → Google Play Console
npm run build:android:local
```

No Expo cloud build minutes required.

## Website (pocostart.com)

Static files in `website/`. Preview: `npm run site`  
Point DNS for `pocostart.com` to your host (Cloudflare / Netlify / Vercel).

## Setup checklist

1. Supabase → run `supabase/schema.sql`, put URL + anon key in `.env`
2. App Store Connect products: `pocostart_monthly` / `pocostart_yearly`
3. RevenueCat entitlement `poco start Pro` + offerings
4. Local archive + Transporter until EAS credits return (1 Aug)

## Structure

```
app/                 screens (Expo Router)
src/i18n/            translations
src/content/         lesson structure (locale-aware)
src/lib/             Supabase + RevenueCat
website/             pocostart.com landing
scripts/             local iOS/Android builds
docs/LOCAL_BUILD.md  Transporter guide
```
