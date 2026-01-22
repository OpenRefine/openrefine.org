# Quick Reference: Version Compatibility Feature

## 🎯 What This Does

Adds OpenRefine version filtering to the extension gallery so users can see which extensions work with their version.

## 📋 Files Summary

| File | Size | Purpose |
|------|------|---------|
| `src/data/extensions.json` | 15 KB | 25 extensions with metadata |
| `src/pages/extensions.tsx` | 14.5 KB | React gallery component |
| `src/pages/extensions.module.css` | 7.9 KB | Styling for gallery |
| `src/utils/versionUtils.ts` | 2.0 KB | Version comparison logic |

## 🚀 Key Functions

### Version Comparison
```typescript
import { isCompatible, compareVersions, formatVersionRange } from '../utils/versionUtils';

// Check compatibility
isCompatible('3.9', '3.8.7', null) // → true
isCompatible('3.7', '3.8.7', null) // → false

// Compare versions
compareVersions('3.9', '3.8') // → 1 (3.9 > 3.8)

// Format for display
formatVersionRange('3.8.7', null) // → "3.8.7+"
formatVersionRange('3.8', '3.9') // → "3.8 - 3.9"
```

## 🎨 UI Components

### Extension Card
- Shows compatibility badge for selected version
- Displays version range
- Color-coded status/difficulty/compatibility badges

### Version Selector
```tsx
<select value={selectedVersion} onChange={(e) => setSelectedVersion(e.target.value)}>
  {getOpenRefineVersions().map(version => (
    <option key={version} value={version}>{version}</option>
  ))}
</select>
```

## 📝 Data Format

```json
{
  "id": 1,
  "minVersion": "3.8.7",      // Minimum supported version
  "maxVersion": null,          // null = no upper limit
  "status": "maintained",      // maintained | archived | legacy
  "difficulty": "intermediate" // beginner | intermediate | advanced
}
```

## 🔄 Filter Logic

```typescript
// All conditions must be true:
const matches = 
  matchesSearch &&              // Search query
  matchesCategory &&            // Category filter
  matchesStatus &&              // Status filter
  matchesDifficulty &&          // Difficulty filter
  isCompatible(selectedVersion, minVersion, maxVersion); // ← NEW
```

## 🎯 Version Examples

### OpenRefine 3.8.7
- Can install: minVersion ≤ 3.8.7
- Cannot install: minVersion > 3.8.7

### OpenRefine 4.0
- Can install: minVersion ≤ 4.0
- Can install: extensions with maxVersion ≥ 4.0

### Archive Old Versions
- Mark as "legacy" with older minVersion
- Users see it's archived but can still select old version to view

## 🧪 Test Cases

```typescript
// Version parsing
parseVersion('3.8.7')   // {major: 3, minor: 8, patch: 7}
parseVersion('3.8')     // {major: 3, minor: 8, patch: undefined}
parseVersion('3.8.7+')  // {major: 3, minor: 8, patch: 7}

// Compatibility
isCompatible('3.9', '3.8', null)    // true
isCompatible('3.7', '3.8', null)    // false
isCompatible('3.9', '3.8', '4.0')   // true
isCompatible('4.1', '3.8', '4.0')   // false (too new)
```

## 📊 Supported Versions

The gallery supports versions from 2.6 to 4.0:
```
4.0, 3.9, 3.8, 3.7, 3.6, 3.5, 3.4, 3.3, 3.2, 3.1, 3.0, 2.8, 2.7, 2.6
```

To add a new version, update `getOpenRefineVersions()` in `versionUtils.ts`:
```typescript
export function getOpenRefineVersions(): string[] {
  return [
    '4.1',  // Add new version here
    '4.0',
    // ...
  ];
}
```

## 🎨 CSS Classes

```css
.badgeCompatible {
  background-color: #06b6d4;  /* Cyan */
  color: white;
}

.badgeMaintained {
  background-color: #10b981;  /* Green */
}

.badgeArchived {
  background-color: #f59e0b;  /* Orange */
}

.badgeLegacy {
  background-color: #6b7280;  /* Gray */
}
```

## 🔧 Common Tasks

### Add Extension
1. Edit `src/data/extensions.json`
2. Add object with all required fields
3. Set `minVersion` and `maxVersion`
4. Run `npm run build`

### Update Extension Version
```json
// Change minVersion
"minVersion": "3.9"  // Was 3.8.7

// Or add max version
"maxVersion": "4.0"  // New limit
```

### Mark as Archived
```json
"status": "archived"  // Was "maintained"
```

## 📈 Performance

- Version comparison: **O(1)** - constant time
- Extension filtering: **O(n)** - linear time
- No external API calls
- All logic runs client-side

## 🌐 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers
- ✅ Dark mode

## 🔗 Integration Points

### Current
- Website gallery at `/extensions`
- Version filtering on client-side

### Future
- OpenRefine app fetches `extensions.json`
- Auto-detects app version
- Shows compatible extensions in app

## 💡 Tips

1. **Search + Version** - Combine search with version filter for precise results
2. **Status Filter** - Use "Maintained" to see only current extensions
3. **Difficulty** - Beginner extensions are easier to install
4. **Version Range** - "3.8.7+" means works with 3.8.7 and newer

## 🐛 Troubleshooting

**Extensions not showing?**
- Check version compatibility
- Verify category matches
- Check status filter

**Version selector not appearing?**
- Clear browser cache
- Refresh page
- Check browser console for errors

**Build failing?**
- Run `npm install --legacy-peer-deps`
- Check TypeScript syntax in versionUtils.ts
- Verify JSON syntax in extensions.json

---

**Build Status:** ✅ SUCCESS
**Last Updated:** January 22, 2026
