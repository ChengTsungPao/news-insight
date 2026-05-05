# News Insight - Frontend

A Flutter application designed to provide a better, more focused news reading experience. Built for both iOS and Android mobile platforms.

## Features

- Bottom navigation bar with Home and Account tabs
- Account page with profile header and settings list
- Appearance settings with Light / Dark / Follow System options (modal bottom sheet)
- Cross-platform support (iOS & Android)

## Code Structure

```
lib/
  main.dart                  # App entry point, MyApp, theme state
  pages/
    home_page.dart           # Home screen
    account_page.dart        # Account / settings screen
  widgets/
    main_shell.dart          # Bottom navigation shell
    profile_header.dart      # Profile avatar + name/email header
    settings_tile.dart       # Reusable settings list item
    appearance_sheet.dart    # Theme picker modal bottom sheet
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **[Flutter SDK](https://docs.flutter.dev/get-started/install)**: Follow the official instructions to install the Flutter SDK.
- **[Android Studio](https://developer.android.com/studio)**: Required for Android app development and emulation.
- **[Xcode](https://developer.apple.com/xcode/)**: Required for iOS app development and emulation (macOS only).

### Installation & Setup

1. **Clone the repository and access the frontend:**
   ```bash
   git clone <repository-url>
   cd news_insight/frontend
   ```

2. **Install dependencies:**
   ```bash
   flutter pub get
   ```

3. **Run the app:**
   Start your emulator or connect a physical device, then run `flutter run`.
   
   > **Note for iOS users:** You need to open the iOS Simulator first before running the app. You can do this quickly from the terminal by running:
   > ```bash
   > open -a Simulator
   > ```
   > Once the simulator is open, `flutter run` will detect it and deploy the app automatically.

   ```bash
   flutter run
   ```