/*
 * checksums can be requested from sonatype:
 * curl "https://oss.sonatype.org/service/local/artifact/maven/content?r=releases&g=org.openrefine&a=openrefine&v=3.6.2&c=win&p=zip.md5" *
 * sizes: TODO
 */


export const releases = [
    {
        version: "3.7.1",
        stable: true,
        date: '2023-03-10',
        source: 'github',
        artifacts: [
             {
                platform: "win-with-java",
                format: "zip"
             },
             {
                platform: "win",
                format: "zip"
             },
             {
                platform: "mac",
                format: "dmg"
             },
             {
                platform: "linux",
                format: "tar.gz"
             },
        ]
    },
    {
        version: "3.6.2",
        stable: true,
        date: '2022-10-03',
        source: 'sonatype',
        artifacts: [
             {
                platform: "win-with-java",
                format: "zip"
             },
             {
                platform: "win",
                format: "zip"
             },
             {
                platform: "mac",
                format: "dmg"
             },
             {
                platform: "linux",
                format: "tar.gz"
             },
        ]
    },
    {
        version: "3.5.2",
        stable: true,
        date: '2022-01-26',
        source: 'github',
        artifacts: [
             {
                platform: "win-with-java",
                format: "zip"
             },
             {
                platform: "win",
                format: "zip"
             },
             {
                platform: "mac",
                format: "dmg"
             },
             {
                platform: "linux",
                format: "tar.gz"
             },
        ]
    }
];

export const platformDetails = {
        'win-with-java': {
                name: 'Windows',
                fullName: 'Windows (including\u00A0Java)',
                embedsJava: true
        },
        'win': {
                name: 'Windows',
                fullName: 'Windows (without\u00A0Java)',
                embedsJava: false
        },
        'mac': {
                name: 'Mac OS',
                fullName: 'Mac OS',
                embedsJava: true
        },
        'linux': {
                name: 'Linux',
                fullName: 'Linux',
                embedsJava: false
        }
};

export const platformOrder = ['win-with-java', 'win', 'mac', 'linux'];

export function getArtifact(release, platform) {
    let matching = release.artifacts.filter(a => a.platform === platform);
    if (matching.length === 1) {
      return matching[0];
    }
}

export function getDownloadLink(release, platform) {
    let version = release.version;
    let artifact = getArtifact(release, platform);
    if (artifact === undefined) {
      return undefined;
    }
    let format = artifact.format;
    if (release.source === 'sonatype') {
      return 'https://oss.sonatype.org/service/local/artifact/maven/content?r=releases&g=org.openrefine&a=openrefine&v=' + version + '&c=' + platform + '&p=' + format;
    } else { // source: github
      return 'https://github.com/OpenRefine/OpenRefine/releases/download/' + version + '/openrefine-' + platform + '-' + version + '.' + format;
    }
}


