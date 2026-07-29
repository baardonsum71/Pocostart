# Local build + Apple Transporter (no EAS credits)

Use this until Expo/EAS credits renew (1 August). Builds run on your Mac via Xcode / Gradle.

## Prerequisites

- Mac with Xcode (latest stable) + command line tools
- Apple Developer account + app created in App Store Connect (`com.pocostart.app`)
- CocoaPods (`sudo gem install cocoapods` or Homebrew)
- [Transporter](https://apps.apple.com/app/transporter/id1450874784) from the Mac App Store
- Signing: open the iOS project once in Xcode and select your Team (Automatic signing)

```bash
# one-time
xcode-select --install
brew install cocoapods   # if needed
```

Set your team id (optional, helps automation):

```bash
export APPLE_TEAM_ID=XXXXXXXXXX   # from developer.apple.com → Membership
```

## iOS → IPA → Transporter

```bash
npm run build:ios:local
```

Output: `dist/ios/poco-start.ipa`

1. Open **Transporter**
2. Sign in with Apple ID (developer)
3. Drag in `dist/ios/poco-start.ipa`
4. **Deliver** → appears in App Store Connect → TestFlight / Review

### Manual Xcode path (if the script fails)

```bash
npx expo prebuild --platform ios
cd ios && pod install && open *.xcworkspace
```

In Xcode: select any iOS Device → **Product → Archive** → **Distribute App** → App Store Connect → Export. Then upload the IPA with Transporter.

## Android → AAB → Play Console

```bash
npm run build:android:local
```

Upload `dist/android/poco-start.aab` in Google Play Console.

## Website (pocostart.com)

Static site in `/website`. Deploy to Cloudflare Pages / Netlify / Vercel and point DNS:

- `A` / `CNAME` for `pocostart.com` → your host
- Add `www` the same way

Local preview:

```bash
npm run site
```

App Store privacy / support URLs:

- https://pocostart.com/privacy.html
- https://pocostart.com/terms.html
- https://pocostart.com
