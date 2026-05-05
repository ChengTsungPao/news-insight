# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**News Insight** is a news reading application with two sub-projects:
- `frontend/` — Flutter mobile app (iOS & Android), with web, macOS, Linux, and Windows targets also scaffolded
- `backend/` — Backend API service (stack not yet defined; only a README stub exists)

## Frontend (Flutter)

All Flutter commands must be run from the `frontend/` directory.

```bash
# Install dependencies
flutter pub get

# Run on a connected device or simulator
flutter run

# Build for release
flutter build apk          # Android
flutter build ipa          # iOS
flutter build web          # Web

# Lint / static analysis
flutter analyze

# Run tests
flutter test

# Run a single test file
flutter test test/widget_test.dart
```

Hot reload is available during `flutter run` by pressing `r`; hot restart with `R`.

## Code Architecture

### Frontend
- Entry point: `frontend/lib/main.dart`
- Currently contains the default Flutter counter scaffold — the real app screens and features are yet to be built under `frontend/lib/`.
- Uses `flutter_lints` for analysis rules (configured in `analysis_options.yaml`).
- Dart SDK `^3.11.3`, Flutter Material design.

### Backend
- `backend/` is a placeholder. Prerequisites, stack, and setup instructions have not been defined yet. Fill in `backend/README.md` as the backend is built out.
