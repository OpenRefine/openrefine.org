# OpenRefine Extension Gallery - Version Compatibility Feature

## Overview

Enhanced the interactive extension gallery with **OpenRefine version compatibility filtering**, allowing users to see which extensions are compatible with their installed OpenRefine version.

## New Features

### 🎯 Version Compatibility Filtering

**User-Facing Features:**
- **Version Selector** - Dropdown to select OpenRefine version (2.6 through 4.0)
- **Automatic Filtering** - Extensions are filtered to show only compatible versions
- **Compatibility Badge** - Cards show a "Compatible" badge when they match the selected version
- **Real-time Updates** - Results update instantly when version is changed

### 📊 Technical Implementation

#### New Files:
- **`/src/utils/versionUtils.ts`** - Version comparison and compatibility logic
  - `parseVersion()` - Parse version strings (e.g., "3.8.7" → {major: 3, minor: 8, patch: 7})
  - `compareVersions()` - Compare two versions
  - `isCompatible()` - Check if an extension is compatible with a version
  - `getOpenRefineVersions()` - Get list of available versions
  - `formatVersionRange()` - Format version ranges for display

#### Modified Files:
- **`/src/pages/extensions.tsx`**
  - Added version utility imports
  - Added `selectedVersion` state
  - Updated filter logic to include version compatibility
  - Enhanced ExtensionCard component with compatibility badge
  - Added version dropdown in controls
  - Improved reset filters to include version

- **`/src/pages/extensions.module.css`**
  - Added `.badgeCompatible` styling (cyan color)

## How It Works

### Version Compatibility Logic

```typescript
// Example: Check if extension works with OpenRefine 3.9
isCompatible('3.9', '3.8.7', null) // → true (3.9 >= 3.8.7)
isCompatible('3.9', '3.8.7', '3.8') // → false (3.9 > 3.8 max)
```

### Filter Precedence

When multiple filters are applied:
1. Search query matches (name, description, tags, author)
2. Category filter
3. Status filter (Maintained, Archived, Legacy)
4. Difficulty filter (Beginner, Intermediate, Advanced)
5. **Version compatibility filter** (NEW)

All conditions must match for an extension to be shown.

## User Experience

### Example Scenarios

**Scenario 1: User with OpenRefine 3.8.7**
- Selects version "3.8" in the version dropdown
- Sees all extensions compatible with 3.8+
- Maintains all other filters

**Scenario 2: User with OpenRefine 4.0**
- Sees new extensions built for 4.0
- Legacy extensions (minVersion < 3.0) are filtered out
- Can still view archived/legacy versions by changing the version dropdown

**Scenario 3: Search with Version Filter**
- User searches for "geospatial"
- Results show only geospatial extensions compatible with selected version
- Combining all filters for targeted results

## Data Structure

Extensions now properly utilize the version fields:

```json
{
  "minVersion": "3.8.7",  // Minimum compatible version
  "maxVersion": null,      // null means no upper limit (e.g., "3.8.7+")
  ...
}
```

### Version Format

- **Minimum Version** (required): Format "X.Y" or "X.Y.Z"
  - Extension works with this version and all newer versions (unless maxVersion is set)
  
- **Maximum Version** (optional): Format "X.Y" or "X.Y.Z"
  - If null: No upper limit
  - If set: Extension works up to and including this version

## Benefits

### For Users
✅ Find extensions compatible with their OpenRefine version instantly
✅ Avoid installing incompatible extensions
✅ Understand version requirements at a glance
✅ Better guidance when considering upgrades

### For Developers
✅ Clear indication of supported versions
✅ Helps users understand compatibility
✅ Encourages version-specific testing
✅ Facilitates ecosystem health

### For Project Maintainers
✅ Better ecosystem clarity
✅ Reduced support burden (fewer incompatible installations)
✅ Clear compatibility tracking
✅ Foundation for in-app extension discovery

## Integration with OpenRefine App

This feature provides the foundation for in-app integration mentioned in the goal post:

1. **API Endpoint**
   - The `extensions.json` file can be served as an API
   - OpenRefine app can fetch compatibility data
   - Filter by the app's running version

2. **Future In-App Manager**
   ```typescript
   // Pseudo-code for OpenRefine app integration
   const currentVersion = "3.9.0"; // From app
   const compatibleExtensions = extensions.filter(ext => 
     isCompatible(currentVersion, ext.minVersion, ext.maxVersion)
   );
   ```

3. **Automatic Filtering**
   - Show only compatible extensions by default
   - Option to view all extensions
   - One-click installation for compatible versions

## Testing

All functionality has been tested:
- ✅ Version parsing works for all formats (X.Y, X.Y.Z, X.Y+)
- ✅ Compatibility checks correctly identify compatible/incompatible versions
- ✅ Filter logic properly combines all filter types
- ✅ UI updates in real-time when version changes
- ✅ Badges display correctly for compatible extensions
- ✅ Build succeeds without errors

## Example: Version Compatibility in Action

### Extension: GEO Extension
```json
{
  "minVersion": "3.8",
  "maxVersion": null
}
```

**Results by version:**
- Version 2.8: ❌ Not shown (2.8 < 3.8)
- Version 3.6: ❌ Not shown (3.6 < 3.8)
- Version 3.8: ✅ Shown with "Compatible" badge
- Version 3.9: ✅ Shown with "Compatible" badge
- Version 4.0: ✅ Shown with "Compatible" badge

### Extension: VIB-Bits (Archived)
```json
{
  "minVersion": "3.4.1",
  "maxVersion": null,
  "status": "archived"
}
```

**Results by version:**
- Version 3.4.1: ✅ Shown (Compatible + Archived badge)
- Version 3.5: ✅ Shown (Compatible + Archived badge)
- Version 2.8: ❌ Not shown (Too old)

## Maintenance & Updates

### When OpenRefine Releases New Version

1. Update `/src/utils/versionUtils.ts`:
   ```typescript
   export function getOpenRefineVersions(): string[] {
     return [
       '4.1',  // Add new version here
       '4.0',
       '3.9',
       // ... rest
     ];
   }
   ```

2. Test that new version appears in dropdown
3. Extensions automatically become available for selection

### When Extension Adds Version Support

1. Edit `/src/data/extensions.json`
2. Update `minVersion` or `maxVersion` field
3. No code changes needed - UI updates automatically

## Performance

- Version comparison is O(1) - constant time operation
- Filtering is O(n) - linear scan of extensions
- Version selection doesn't require API calls
- All logic runs client-side for instant updates

## Accessibility

- Version dropdown is fully keyboard accessible
- ARIA labels on all interactive elements
- Proper focus management
- Clear visual indicators for selected version
- Compatible badge provides visual and semantic meaning

## Browser Compatibility

- Works on all modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Dark mode support
- No external dependencies for version logic

## Future Enhancements

Possible future improvements:

1. **Smart Version Detection**
   - Detect user's OpenRefine version from browser
   - Auto-select in dropdown

2. **Version Warnings**
   - Warn when viewing extensions older than current version
   - Suggest upgrade paths

3. **Installation API**
   - Direct installation URLs with version info
   - Automatic configuration for selected version

4. **Statistics**
   - Track which versions are most used
   - Identify end-of-life versions
   - Plan upgrade campaigns

---

## Summary

The version compatibility feature transforms the extension gallery into a **targeted discovery tool** that helps users find exactly the right extensions for their OpenRefine version. This directly addresses the goal post requirement to "only present extensions that are currently maintained and compatible with the current version of OpenRefine."

The implementation is clean, performant, and provides a solid foundation for future in-app extension management features within OpenRefine itself.
