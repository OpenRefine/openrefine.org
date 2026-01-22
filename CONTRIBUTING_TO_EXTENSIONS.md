# Quick Start Guide: Adding/Updating Extensions

## For Contributors: How to Add a New Extension

### Step 1: Edit the Data File

Open `/src/data/extensions.json` and add your extension at the end of the array:

```json
{
  "id": 26,
  "name": "Your Extension Name",
  "description": "A clear, concise description of what your extension does and its key features.",
  "author": "Your Name or Organization",
  "authorUrl": "https://github.com/yourusername",
  "repository": "https://github.com/yourusername/your-extension",
  "category": "Choose from existing categories",
  "minVersion": "3.8",
  "maxVersion": null,
  "status": "maintained",
  "difficulty": "beginner",
  "tags": ["tag1", "tag2", "tag3"],
  "installation": "url-based",
  "lastUpdated": "2026-01-22"
}
```

### Step 2: Choose the Right Values

#### Category (choose one):
- `"AI & Machine Learning"` - AI/ML powered tools
- `"Data Import/Export"` - Import/export functionality
- `"Data Format Conversion"` - Format transformation
- `"Wikimedia"` - Wikimedia-specific
- `"Expression Language"` - Expression language support
- `"UI Enhancement"` - UI improvements
- `"Visualization"` - Data visualization
- `"Geospatial"` - Geographic data
- `"Data Integration"` - External services
- `"Data Standards"` - Standards compliance
- `"Analysis & Visualization"` - Analysis tools
- `"Text Analysis"` - NLP and text mining
- `"Text Processing"` - String manipulation
- `"Data Utilities"` - General utilities
- `"Healthcare"` - Healthcare-specific
- `"Distribution"` - OpenRefine distributions

#### Status (choose one):
- `"maintained"` - Actively maintained
- `"archived"` - No longer maintained but functional
- `"legacy"` - Historical reference only

#### Difficulty (choose one):
- `"beginner"` - Easy to install and use
- `"intermediate"` - Moderate complexity
- `"advanced"` - Requires technical expertise

#### Installation (choose one):
- `"url-based"` - Install via URL
- `"manual"` - Manual installation required
- `"docker"` - Docker-based installation
- `"distribution"` - Part of a distribution

### Step 3: Test Your Changes

```bash
cd openrefine.org
npm run build
```

If the build succeeds, your extension is properly formatted!

### Step 4: Preview Locally

```bash
npm run start
```

Visit http://localhost:3000/extensions to see your extension in the gallery.

### Step 5: Submit a Pull Request

1. Fork the repository
2. Create a new branch: `git checkout -b add-extension-name`
3. Commit your changes: `git commit -m "Add [Extension Name] to gallery"`
4. Push to your fork: `git push origin add-extension-name`
5. Open a Pull Request on GitHub

---

## For Maintainers: Updating Extension Information

### Update Extension Status

If an extension is no longer maintained:

```json
{
  "id": 5,
  "status": "archived",  // Change from "maintained"
  "lastUpdated": "2026-01-22"  // Update date
}
```

### Update Version Compatibility

When a new OpenRefine version is released:

```json
{
  "id": 1,
  "minVersion": "3.9",  // Update if needed
  "maxVersion": "4.0",  // Set if there's a maximum
  "lastUpdated": "2026-01-22"
}
```

### Update Repository Information

If a repository moves:

```json
{
  "id": 3,
  "repository": "https://github.com/new-org/extension",
  "authorUrl": "https://github.com/new-org",
  "lastUpdated": "2026-01-22"
}
```

---

## Common Scenarios

### Scenario 1: Extension Has New Features

Update the description and tags:

```json
{
  "id": 7,
  "description": "Updated description with new features...",
  "tags": ["existing-tag", "new-feature-tag"],
  "lastUpdated": "2026-01-22"
}
```

### Scenario 2: Extension Changed Category

Simply change the category field:

```json
{
  "id": 10,
  "category": "New Category Name",
  "lastUpdated": "2026-01-22"
}
```

### Scenario 3: Extension Is Deprecated

Mark as legacy and update description:

```json
{
  "id": 15,
  "status": "legacy",
  "description": "[DEPRECATED] Original description...",
  "lastUpdated": "2026-01-22"
}
```

---

## Validation Checklist

Before submitting, ensure:

- [ ] `id` is unique and sequential
- [ ] `name` is clear and descriptive
- [ ] `description` is informative (50-200 words)
- [ ] `author` is correctly attributed
- [ ] `authorUrl` is a valid GitHub/GitLab/Codeberg URL
- [ ] `repository` is a valid repository URL
- [ ] `category` matches an existing category exactly
- [ ] `minVersion` is in format "X.Y" or "X.Y.Z"
- [ ] `maxVersion` is null or in format "X.Y" or "X.Y.Z"
- [ ] `status` is one of: maintained, archived, legacy
- [ ] `difficulty` is one of: beginner, intermediate, advanced
- [ ] `tags` is an array of relevant keywords (3-6 recommended)
- [ ] `installation` is one of: url-based, manual, docker, distribution
- [ ] `lastUpdated` is in format "YYYY-MM-DD"
- [ ] JSON is valid (no trailing commas, proper quotes)
- [ ] Build passes: `npm run build`

---

## Tips for Writing Good Extension Descriptions

### ✅ Good Description
```
"Adds geographic coordinate processing functions: decToGMS() converts decimal 
degrees to degrees/minutes/seconds format, and geoDistance() calculates great 
circle distance between coordinate pairs using the Haversine formula."
```

**Why it's good:**
- Explains what it does
- Lists key functions
- Mentions specific capabilities
- Clear and concise

### ❌ Poor Description
```
"A great extension for working with geo data."
```

**Why it's poor:**
- Too vague
- No specific features mentioned
- Not informative
- Users won't understand what it does

---

## Choosing Good Tags

Tags help users discover your extension through search.

### ✅ Good Tags
```json
"tags": ["geospatial", "coordinates", "GIS", "distance", "mapping"]
```

- Specific and relevant
- Include technology names
- Use common search terms
- 4-6 tags is ideal

### ❌ Poor Tags
```json
"tags": ["good", "useful", "awesome", "best"]
```

- Too generic
- Not searchable
- Not descriptive

---

## Need Help?

- Check existing extensions in `extensions.json` for examples
- Ask in the OpenRefine forum: https://forum.openrefine.org/
- Open a GitHub issue for questions
- Review the full documentation in `EXTENSIONS_GALLERY_README.md`

---

## Quick Commands Reference

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run start

# Build for production
npm run build

# Serve production build locally
npm run serve

# Check for errors
npm run build 2>&1 | grep -i error
```

---

**Happy Contributing! 🎉**

Your contributions help make OpenRefine's extension ecosystem more discoverable and useful for everyone.
