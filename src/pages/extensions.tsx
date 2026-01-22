import React, { useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import extensionsData from '../data/extensions.json';
import styles from './extensions.module.css';
import { 
  isCompatible, 
  getOpenRefineVersions, 
  formatVersionRange 
} from '../utils/versionUtils';

// Types
interface Extension {
  id: number;
  name: string;
  description: string;
  author: string;
  authorUrl: string;
  repository: string;
  category: string;
  minVersion: string;
  maxVersion: string | null;
  status: 'maintained' | 'archived' | 'legacy';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  installation: string;
  lastUpdated: string;
  stars?: number;
}

// Badge Components
const StatusBadge = ({ status }: { status: Extension['status'] }) => {
  const statusConfig = {
    maintained: { label: 'Maintained', className: styles.badgeMaintained },
    archived: { label: 'Archived', className: styles.badgeArchived },
    legacy: { label: 'Legacy', className: styles.badgeLegacy }
  };
  
  const config = statusConfig[status];
  return <span className={`${styles.badge} ${config.className}`}>{config.label}</span>;
};

const DifficultyBadge = ({ difficulty }: { difficulty: Extension['difficulty'] }) => {
  const difficultyConfig = {
    beginner: { label: 'Beginner', className: styles.difficultyBeginner },
    intermediate: { label: 'Intermediate', className: styles.difficultyIntermediate },
    advanced: { label: 'Advanced', className: styles.difficultyAdvanced }
  };
  
  const config = difficultyConfig[difficulty];
  return <span className={`${styles.badge} ${config.className}`}>{config.label}</span>;
};

// Extension Card Component
const ExtensionCard = ({ extension, currentVersion }: { extension: Extension; currentVersion: string }) => {
  const versionText = formatVersionRange(extension.minVersion, extension.maxVersion);
  const isCompatibleWithVersion = isCompatible(currentVersion, extension.minVersion, extension.maxVersion);
    
  return (
    <div className={styles.extensionCard}>
      <div className={styles.cardHeader}>
        <h3 className={styles.extensionName}>{extension.name}</h3>
        <div className={styles.badges}>
          <StatusBadge status={extension.status} />
          <DifficultyBadge difficulty={extension.difficulty} />
          {isCompatibleWithVersion && (
            <span className={`${styles.badge} ${styles.badgeCompatible}`}>Compatible</span>
          )}
        </div>
      </div>
      
      <p className={styles.description}>{extension.description}</p>
      
      <div className={styles.metadata}>
        <div className={styles.metadataItem}>
          <span className={styles.metadataLabel}>Author:</span>
          <a href={extension.authorUrl} target="_blank" rel="noopener noreferrer" className={styles.metadataValue}>
            {extension.author}
          </a>
        </div>
        <div className={styles.metadataItem}>
          <span className={styles.metadataLabel}>Category:</span>
          <span className={styles.metadataValue}>{extension.category}</span>
        </div>
        <div className={styles.metadataItem}>
          <span className={styles.metadataLabel}>Version:</span>
          <span className={styles.metadataValue}>{versionText}</span>
        </div>
        <div className={styles.metadataItem}>
          <span className={styles.metadataLabel}>Updated:</span>
          <span className={styles.metadataValue}>{new Date(extension.lastUpdated).toLocaleDateString()}</span>
        </div>
      </div>
      
      <div className={styles.tags}>
        {extension.tags.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
      
      <div className={styles.cardFooter}>
        <a 
          href={extension.repository} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.buttonPrimary}
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

// Main Extensions Page
export default function Extensions(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedVersion, setSelectedVersion] = useState('4.0');
  const [sortBy, setSortBy] = useState('name');

  // Extract unique categories, statuses, and difficulties
  const categories = useMemo(() => {
    const cats = new Set((extensionsData as Extension[]).map((ext: Extension) => ext.category));
    return ['all', ...Array.from(cats).sort()];
  }, []);

  const statuses = ['all', 'maintained', 'archived', 'legacy'];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  // Filter and sort extensions
  const filteredExtensions = useMemo(() => {
    let filtered = (extensionsData as Extension[]).filter((ext: Extension) => {
      const matchesSearch = 
        ext.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ext.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ext.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        ext.author.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || ext.category === selectedCategory;
      const matchesStatus = selectedStatus === 'all' || ext.status === selectedStatus;
      const matchesDifficulty = selectedDifficulty === 'all' || ext.difficulty === selectedDifficulty;
      const matchesVersion = isCompatible(selectedVersion, ext.minVersion, ext.maxVersion);
      
      return matchesSearch && matchesCategory && matchesStatus && matchesDifficulty && matchesVersion;
    });

    // Sort extensions
    filtered.sort((a: Extension, b: Extension) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'updated':
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedStatus, selectedDifficulty, selectedVersion, sortBy]);

  return (
    <Layout
      title="Extensions"
      description="Enhance OpenRefine with extensions built by the community"
    >
      <div className={styles.extensionsPage}>
        <div className="container">
          {/* Header */}
          <div className={styles.header}>
            <h1>OpenRefine Extensions</h1>
            <p className={styles.subtitle}>
              Enhance OpenRefine with extensions built by the community. 
              See <Link to="/docs/manual/installing#installing-extensions">how to install an extension</Link>.
            </p>
            <div className={styles.disclaimer}>
              ⚠️ We do not vouch for the function of any of these extensions. 
              Some only work with earlier versions of OpenRefine, or with third-party distributions.
            </div>
          </div>

          {/* Search and Filters */}
          <div className={styles.controls}>
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Search extensions by name, description, tags, or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className={styles.clearButton}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            <div className={styles.filters}>
              <div className={styles.filterGroup}>
                <label htmlFor="category">Category:</label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={styles.select}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat === 'all' ? 'All Categories' : cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.filterGroup}>
                <label htmlFor="status">Status:</label>
                <select
                  id="status"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className={styles.select}
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.filterGroup}>
                <label htmlFor="difficulty">Difficulty:</label>
                <select
                  id="difficulty"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className={styles.select}
                >
                  {difficulties.map(diff => (
                    <option key={diff} value={diff}>
                      {diff.charAt(0).toUpperCase() + diff.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.filterGroup}>
                <label htmlFor="version">OpenRefine Version:</label>
                <select
                  id="version"
                  value={selectedVersion}
                  onChange={(e) => setSelectedVersion(e.target.value)}
                  className={styles.select}
                >
                  {getOpenRefineVersions().map(version => (
                    <option key={version} value={version}>
                      {version}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.filterGroup}>
                <label htmlFor="sort">Sort by:</label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={styles.select}
                >
                  <option value="name">Name</option>
                  <option value="updated">Recently Updated</option>
                  <option value="category">Category</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className={styles.resultsCount}>
            Showing {filteredExtensions.length} of {(extensionsData as Extension[]).length} extensions
          </div>

          {/* Extensions Grid */}
          {filteredExtensions.length > 0 ? (
            <div className={styles.extensionsGrid}>
              {filteredExtensions.map((ext: Extension) => (
                <ExtensionCard key={ext.id} extension={ext} currentVersion={selectedVersion} />
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <p>No extensions found matching your criteria.</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedStatus('all');
                  setSelectedDifficulty('all');
                  setSelectedVersion('4.0');
                }}
                className={styles.buttonSecondary}
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Additional Resources */}
          <div className={styles.additionalResources}>
            <h2>Additional Resources</h2>
            
            <div className={styles.resourceSection}>
              <h3>Reconciliation Services</h3>
              <p>OpenRefine can connect to several reconciliation services. You can find information about them at:</p>
              <ul>
                <li>
                  <a href="https://github.com/OpenRefine/OpenRefine/wiki/Reconcilable-Data-Sources" target="_blank" rel="noopener noreferrer">
                    Reconcilable Data Sources
                  </a> in our wiki
                </li>
                <li>
                  <a href="https://reconciliation-api.github.io/census/services/" target="_blank" rel="noopener noreferrer">
                    Reconciliation Software
                  </a> at the Reconciliation API Census
                </li>
                <li>
                  <a href="https://reconciliation-api.github.io/testbench/#/" target="_blank" rel="noopener noreferrer">
                    Reconciliation Services
                  </a> at the Reconciliation API testbench
                </li>
              </ul>
            </div>

            <div className={styles.resourceSection}>
              <h3>Client Libraries</h3>
              <p>You can automate some OpenRefine operations using one of the existing libraries. Those libraries are using the <Link to="/docs/technical-reference/openrefine-api">OpenRefine API</Link>.</p>
              <ul>
                <li><strong>bash:</strong> <a href="https://github.com/opencultureconsulting/orcli" target="_blank" rel="noopener noreferrer">orcli</a></li>
                <li><strong>C# / .NET:</strong> <a href="https://github.com/ADelRosarioH/OpenRefine.Net" target="_blank" rel="noopener noreferrer">OpenRefine.Net</a></li>
                <li><strong>java:</strong> <a href="https://github.com/ancore/refine-java" target="_blank" rel="noopener noreferrer">refine-java</a></li>
                <li><strong>python:</strong> <a href="https://github.com/opencultureconsulting/openrefine-client" target="_blank" rel="noopener noreferrer">openrefine-client</a></li>
                <li><strong>R:</strong> <a href="https://cran.r-project.org/web/packages/rrefine/index.html" target="_blank" rel="noopener noreferrer">rrefine</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
