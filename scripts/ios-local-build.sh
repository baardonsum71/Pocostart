#!/usr/bin/env bash
# Local iOS build — no EAS credits required.
# Produces an IPA you can upload with Apple Transporter.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

# CocoaPods needs UTF-8
export LANG="${LANG:-en_US.UTF-8}"
export LC_ALL="${LC_ALL:-en_US.UTF-8}"

CONFIG="${CONFIG:-Release}"
TEAM_ID="${APPLE_TEAM_ID:-RK7WNK33A8}"
BUNDLE_ID="${BUNDLE_ID:-com.pocostart.app}"
OUT_DIR="${OUT_DIR:-$ROOT/dist/ios}"
ARCHIVE_PATH="$OUT_DIR/pocostart.xcarchive"
EXPORT_PATH="$OUT_DIR/export"
IPA_PATH="$OUT_DIR/poco-start.ipa"

mkdir -p "$OUT_DIR"

echo "==> 1/5 Ensure native iOS project (expo prebuild)"
if [[ ! -d ios ]]; then
  npx expo prebuild --platform ios --clean
else
  npx expo prebuild --platform ios
fi

echo "==> 2/5 Install CocoaPods"
cd ios
pod install
cd "$ROOT"

WORKSPACE="$(find ios -maxdepth 1 -name '*.xcworkspace' | head -n 1)"
if [[ -z "$WORKSPACE" ]]; then
  echo "ERROR: No .xcworkspace found in ios/ after pod install"
  exit 1
fi
SCHEME="${SCHEME:-$(basename "$WORKSPACE" .xcworkspace)}"
echo "Using workspace=$WORKSPACE scheme=$SCHEME"

EXPORT_PLIST="$OUT_DIR/ExportOptions.plist"
cat > "$EXPORT_PLIST" <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>method</key>
  <string>app-store-connect</string>
  <key>destination</key>
  <string>export</string>
  <key>signingStyle</key>
  <string>automatic</string>
  <key>uploadSymbols</key>
  <true/>
  <key>manageAppVersionAndBuildNumber</key>
  <false/>
EOF

if [[ -n "$TEAM_ID" ]]; then
  cat >> "$EXPORT_PLIST" <<EOF
  <key>teamID</key>
  <string>${TEAM_ID}</string>
EOF
fi

cat >> "$EXPORT_PLIST" <<EOF
</dict>
</plist>
EOF

echo "==> 3/5 Archive with xcodebuild (team=$TEAM_ID)"
# -allowProvisioningUpdates lets Xcode create/download profiles automatically
xcodebuild \
  -workspace "$WORKSPACE" \
  -scheme "$SCHEME" \
  -configuration "$CONFIG" \
  -destination 'generic/platform=iOS' \
  -archivePath "$ARCHIVE_PATH" \
  -allowProvisioningUpdates \
  clean archive \
  CODE_SIGN_STYLE=Automatic \
  DEVELOPMENT_TEAM="$TEAM_ID" \
  PRODUCT_BUNDLE_IDENTIFIER="$BUNDLE_ID"

echo "==> 4/5 Export IPA"
rm -rf "$EXPORT_PATH"
xcodebuild \
  -exportArchive \
  -archivePath "$ARCHIVE_PATH" \
  -exportPath "$EXPORT_PATH" \
  -exportOptionsPlist "$EXPORT_PLIST" \
  -allowProvisioningUpdates \
  DEVELOPMENT_TEAM="$TEAM_ID"

EXPORTED_IPA="$(find "$EXPORT_PATH" -name '*.ipa' | head -n 1)"
if [[ -z "$EXPORTED_IPA" ]]; then
  echo "ERROR: No IPA found in $EXPORT_PATH"
  exit 1
fi
cp "$EXPORTED_IPA" "$IPA_PATH"

echo "==> 5/5 Done"
echo ""
echo "IPA ready: $IPA_PATH"
echo ""
echo "Upload with Apple Transporter:"
echo "  1. Open Transporter (Mac App Store)"
echo "  2. Sign in with your Apple Developer account"
echo "  3. Drag in: $IPA_PATH"
echo "  4. Deliver → App Store Connect"
echo ""
echo "Or CLI (if transporter is installed):"
echo "  xcrun altool --upload-app -f \"$IPA_PATH\" -t ios -u \"APPLE_ID\" -p \"APP_SPECIFIC_PASSWORD\""
