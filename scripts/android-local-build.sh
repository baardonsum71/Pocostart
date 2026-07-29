#!/usr/bin/env bash
# Local Android release build — no EAS credits required.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
OUT_DIR="$ROOT/dist/android"
mkdir -p "$OUT_DIR"

echo "==> 1/3 expo prebuild (android)"
if [[ ! -d android ]]; then
  npx expo prebuild --platform android --clean
else
  npx expo prebuild --platform android
fi

echo "==> 2/3 Assemble release AAB"
cd android
./gradlew bundleRelease
cd "$ROOT"

AAB="$(find android/app/build/outputs/bundle/release -name '*.aab' | head -n 1)"
cp "$AAB" "$OUT_DIR/poco-start.aab"

echo "==> 3/3 Done"
echo "AAB ready: $OUT_DIR/poco-start.aab"
echo "Upload in Google Play Console → Production / Testing → Create release"
