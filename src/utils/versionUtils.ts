/**
 * Utility functions for version comparison and filtering
 */

export interface Version {
  major: number;
  minor: number;
  patch?: number;
}

/**
 * Parse a version string into components
 */
export function parseVersion(versionStr: string): Version {
  const cleaned = versionStr.replace(/\+$/, '').trim();
  const parts = cleaned.split('.').map(p => parseInt(p, 10));

  return {
    major: parts[0] || 0,
    minor: parts[1] || 0,
    patch: parts[2]
  };
}

/**
 * Compare two versions
 * Returns: -1 if v1 < v2, 0 if equal, 1 if v1 > v2
 */
export function compareVersions(v1: string, v2: string): number {
  const ver1 = parseVersion(v1);
  const ver2 = parseVersion(v2);

  if (ver1.major !== ver2.major) {
    return ver1.major > ver2.major ? 1 : -1;
  }

  if (ver1.minor !== ver2.minor) {
    return ver1.minor > ver2.minor ? 1 : -1;
  }

  const patch1 = ver1.patch || 0;
  const patch2 = ver2.patch || 0;

  if (patch1 !== patch2) {
    return patch1 > patch2 ? 1 : -1;
  }

  return 0;
}

/**
 * Check if an extension is compatible with a given OpenRefine version
 */
export function isCompatible(
  openRefineVersion: string,
  minVersion: string,
  maxVersion: string | null
): boolean {
  const meetsMin = compareVersions(openRefineVersion, minVersion) >= 0;

  if (!maxVersion) {
    return meetsMin;
  }

  const meetsMax = compareVersions(openRefineVersion, maxVersion) <= 0;
  return meetsMin && meetsMax;
}

/**
 * Get a list of OpenRefine versions for the version selector
 */
export function getOpenRefineVersions(): string[] {
  return [
    '4.0',
    '3.9',
    '3.8',
    '3.7',
    '3.6',
    '3.5',
    '3.4',
    '3.3',
    '3.2',
    '3.1',
    '3.0',
    '2.8',
    '2.7',
    '2.6'
  ];
}

/**
 * Format version range for display
 */
export function formatVersionRange(minVersion: string, maxVersion: string | null): string {
  if (!maxVersion) {
    return `${minVersion}+`;
  }
  return `${minVersion} - ${maxVersion}`;
}
