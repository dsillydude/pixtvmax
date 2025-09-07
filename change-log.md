# Change Log - Kijiweni to PixTv Max White-Label Conversion

## Summary
This document lists every file that was changed during the white-label conversion from "Kijiweni" to "PixTv Max".

## Frontend Changes

### Core Configuration Files
- **pubspec.yaml**: Updated package name from `kijweni_tv_max` to `pix_tv_max` and description to "PixTv Max - Premium Streaming App"

### Dart Source Files
- **lib/main.dart**: 
  - Updated all import statements to use `pix_tv_max` package name
  - Changed app class name from `KijweniTvMaxApp` to `PixTvMaxApp`
  - Updated app title from "KIJIWENI TV MAX" to "PixTv Max"
  - Updated AppBar title from "KIJIWENI TV MAX" to "PixTv Max"

- **All .dart files**: Global replacement of import statements from `package:kijweni_tv_max/` to `package:pix_tv_max/`

- **lib/screens/info_screen.dart**: Changed display text from "Bado haujajiunga na KijiweniTV Max" to "Bado haujajiunga na PixTv Max"

- **lib/screens/paywall_screen.dart**: Changed welcome text from "Karibu KijiweniTV Max" to "Karibu PixTv Max"

### Web Configuration Files
- **web/index.html**: 
  - Updated meta tag `apple-mobile-web-app-title` from "kijweni_tv_max" to "pix_tv_max"
  - Updated page title from "kijweni_tv_max" to "pix_tv_max"

- **web/manifest.json**: 
  - Updated app name and short_name from "kijweni_tv_max" to "pix_tv_max"
  - Updated description to "PixTv Max - Premium Streaming App"

## Backend Changes

### Configuration Files
- **package.json**: 
  - Updated package name from "kijiweni-backend" to "pix-tv-max-backend"
  - Updated description from "KIJIWENI TV MAX Backend Server..." to "PixTv Max Backend Server..."
  - Updated keywords from "kijiweni" to "pix-tv-max"
  - Updated author from "KIJIWENI Team" to "PixTv Max Team"

### Server Code
- **server.js**: 
  - Updated header comment from "KIJIWENI TV MAX Backend Server" to "PixTv Max Backend Server"
  - Updated health check message from "KIJIWENI Backend is running" to "PixTv Max Backend is running"
  - Updated default admin email from "admin@kijiweni.tv" to "admin@pixtvmax.tv"
  - Updated buyer email domain from "@kijiweni.tv" to "@pixtvmax.tv"
  - Updated startup console message from "KIJIWENI Backend server" to "PixTv Max Backend server"

## Files NOT Changed
- All third-party dependency names and versions were preserved as requested
- API endpoints and functional code remain unchanged
- Database schemas and behavior are preserved
- Asset files (images, fonts, icons) remain unchanged
- Environment configuration files (.env) remain unchanged but may need manual updates

## Reasons for Changes
All changes were made solely for the purpose of white-labeling the application from "Kijiweni" to "PixTv Max". No functional code, business logic, or third-party integrations were modified beyond what was necessary for the name change.

