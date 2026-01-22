# Interactive Extension Gallery Feature

## Overview

This feature transforms the static OpenRefine extensions page into a dynamic, interactive gallery that provides a superior discovery and browsing experience for users looking for extensions.

## Files Created/Modified

### New Files

1. **`/src/data/extensions.json`**
   - Centralized extension registry with structured metadata
   - Contains 25 extensions with comprehensive information
   - Easy to update and maintain

2. **`/src/pages/extensions.tsx`**
   - React component implementing the interactive gallery
   - Search, filter, and sort functionality
   - Responsive design for mobile and desktop

3. **`/src/pages/extensions.module.css`**
   - Custom styling for the extensions gallery
   - Dark mode support
   - Responsive grid layout

### Removed Files

- **`/src/pages/extensions.md`** - Replaced by the new TypeScript/React implementation

## Features Implemented

### 🔍 Search Functionality
- Real-time search across extension names, descriptions, tags, and authors
- Clear button to reset search
- Instant results as you type

### 🎯 Advanced Filtering
- **Category Filter**: Filter by extension categories (AI & Machine Learning, Data Import/Export, Geospatial, etc.)
- **Status Filter**: Filter by maintenance status (Maintained, Archived, Legacy)
- **Difficulty Filter**: Filter by installation difficulty (Beginner, Intermediate, Advanced)
- **Sort Options**: Sort by name, recently updated, or category

### 📱 Extension Cards
Each extension card displays:
- Extension name and description
- Status badge (Maintained/Archived/Legacy)
- Difficulty badge (Beginner/Intermediate/Advanced)
- Author information with link
- Category
- Compatible OpenRefine version
- Last update date
- Tags for quick identification
- Direct link to GitHub repository

### 🎨 Visual Design
- Clean, modern card-based layout
- Responsive grid that adapts to screen size
- Hover effects for better interactivity
- Color-coded badges for quick visual scanning
- Dark mode support
- Consistent with existing OpenRefine website design

### 📊 User Experience Enhancements
- Results counter showing filtered/total extensions
- Clear all filters button when no results found
- Disclaimer about extension functionality
- Link to installation instructions
- Additional resources section (Reconciliation Services & Client Libraries)

## Extension Data Structure

Each extension in `extensions.json` follows this schema:

```json
{
  "id": 1,
  "name": "Extension Name",
  "description": "Detailed description of what the extension does",
  "author": "Author Name",
  "authorUrl": "https://github.com/author",
  "repository": "https://github.com/repo/extension",
  "category": "Category Name",
  "minVersion": "3.8.7",
  "maxVersion": null,
  "status": "maintained|archived|legacy",
  "difficulty": "beginner|intermediate|advanced",
  "tags": ["tag1", "tag2"],
  "installation": "url-based|manual|docker|distribution",
  "lastUpdated": "2026-01-15"
}
```

## Categories Available

1. **AI & Machine Learning** - AI-powered extensions
2. **Data Import/Export** - Import and export functionality
3. **Data Format Conversion** - Format transformation tools
4. **Wikimedia** - Wikimedia-specific extensions
5. **Expression Language** - Expression language support
6. **UI Enhancement** - User interface improvements
7. **Visualization** - Data visualization tools
8. **Geospatial** - Geographic data processing
9. **Data Integration** - External service integration
10. **Data Standards** - Standards compliance
11. **Analysis & Visualization** - Analysis tools
12. **Text Analysis** - Text processing and NLP
13. **Text Processing** - String manipulation
14. **Data Utilities** - General utilities
15. **Healthcare** - Healthcare-specific tools
16. **Distribution** - OpenRefine distributions

## Future Enhancements (Optional)

### GitHub API Integration
The gallery can be enhanced to fetch real-time data from GitHub:

```typescript
// Example: Fetch repository stats
const fetchGitHubStats = async (repoUrl: string) => {
  const apiUrl = repoUrl.replace('github.com', 'api.github.com/repos');
  const response = await fetch(apiUrl);
  const data = await response.json();
  return {
    stars: data.stargazers_count,
    lastUpdated: data.updated_at,
    description: data.description
  };
};
```

### User Ratings System
Could integrate with a backend service to store user ratings:
- 5-star rating system
- User reviews
- Download statistics

### Installation Helper
Could add direct installation instructions:
- Copy-paste installation URLs
- Step-by-step installation guides
- Compatibility checker

## Maintenance

### Adding a New Extension

1. Open `/src/data/extensions.json`
2. Add a new object with the next sequential ID
3. Fill in all required fields
4. Test the build: `npm run build`
5. Commit and push

Example:
```json
{
  "id": 26,
  "name": "New Extension",
  "description": "Description here",
  "author": "Author Name",
  "authorUrl": "https://github.com/author",
  "repository": "https://github.com/repo",
  "category": "Data Import/Export",
  "minVersion": "3.9",
  "maxVersion": null,
  "status": "maintained",
  "difficulty": "beginner",
  "tags": ["import", "export"],
  "installation": "url-based",
  "lastUpdated": "2026-01-22"
}
```

### Updating Extension Information

1. Locate the extension in `/src/data/extensions.json`
2. Update the relevant fields (commonly `lastUpdated`, `status`, `minVersion`)
3. Test and deploy

### Adding New Categories

1. Add extensions with the new category to `extensions.json`
2. The category will automatically appear in the filter dropdown
3. No code changes needed!

## Testing

### Local Development
```bash
cd openrefine.org
npm install --legacy-peer-deps
npm run start
```

Visit: http://localhost:3000/extensions

### Production Build
```bash
npm run build
npm run serve
```

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Dark mode support
- Accessibility features included

## Performance

- Client-side filtering for instant results
- Optimized rendering with React
- No external API calls (currently)
- Fast page load times

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- ARIA labels on interactive elements
- Sufficient color contrast
- Clear focus indicators

## Benefits Achieved

✅ **Improved User Experience** - Users can find relevant extensions faster  
✅ **Better Discovery** - Lesser-known extensions gain visibility  
✅ **Version Clarity** - Users immediately see compatibility  
✅ **Easier Maintenance** - Centralized data in JSON format  
✅ **Community Growth** - Extensions are more discoverable  
✅ **Mobile-Friendly** - Works great on all devices  
✅ **Scalable** - Easy to add more extensions  

## Screenshots

The gallery features:
- A prominent search bar at the top
- Filter controls for category, status, difficulty, and sorting
- Grid layout of extension cards
- Visual badges for quick identification
- Clean, professional design matching OpenRefine branding

## Support

For questions or issues with the extension gallery:
- Open an issue on the OpenRefine GitHub repository
- Contact the OpenRefine community via the forum
- Submit pull requests for improvements

## License

This feature is part of the OpenRefine website and follows the same license:
- Creative Commons Attribution 4.0 International License for content
- BSD-3-Clause for code
