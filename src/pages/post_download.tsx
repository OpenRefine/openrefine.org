import React from 'react';
import clsx from 'clsx';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import BrowserOnly from '@docusaurus/BrowserOnly';

import Layout from '@theme/Layout';
// import {styles as docCardStyles} from '@theme/DocCard/styles.module.css';
import Card from '../card.tsx';

import styles from '../custom.css';
import {releases, platformDetails, platformOrder, getDownloadLink} from '../releases.js';

function PostDownload() {
    let latestRelease = releases[0];
    return (
   <div className="container margin-bottom--xl">
      <div className="row" style={{maxWidth: '800px', margin: 'auto', textAlign: 'left'}}>
        <div className="col">
          <BrowserOnly fallback={<DownloadSection version={latestRelease.version} platform="win-with-java" />}>{
             () => {
                const urlParams = new URLSearchParams(window.location.search);
                return <DownloadSection version={urlParams.get('version')} platform={urlParams.get('platform')} autoDownload={true} />
             }}
          </BrowserOnly>
          <h2>Next steps</h2>
          <div className="cardList">
            <Card href="donate" title="Give to OpenRefine" description="Your donations support the further development and maintenance of OpenRefine." />
            <Card href="extensions" title="Extensions" description="Enhance OpenRefine with extensions created by the community." />
            <Card href="community" title="Join the community" description="Get support, find resources and get involved in the project. OpenRefine is made by people like you!" />
          </div>
        </div>
      </div>
    </div>);
}

function DownloadSection(props) {
   let {version, platform, autoDownload} = props;
   let details = platformDetails[platform];
   let instructions = getRunningInstructions(platform);
   let explanations = <div></div>;
   if (details !== undefined && instructions !== undefined) {
        explanations = <div>
                <h2>Running OpenRefine on {platformDetails[platform].name}</h2>
                {instructions}
           </div>;
   }
   return <div>
        <DownloadLink version={version} platform={platform} autoDownload={autoDownload} />
        {explanations}
        <p>If you are upgrading from an earlier version, make sure to <Link to="docs/manual/installing#back-up-your-data">back up your workspace directory</Link> first.</p>
    </div>;
}

function DownloadLink(props) {
    let {version, platform, autoDownload} = props;
    let matchingReleases = releases.filter(r => r.version === version);
    if (matchingReleases.length !== 1) {
       return <p>The requested release could not be found. Pick one from <Link to="download">our Download page</Link>.</p>
    }
    let release = matchingReleases[0];
    let link = getDownloadLink(release, platform);
    if (autoDownload) {
       const domLink = document.createElement('a');
       domLink.href = link;
       domLink.click();
       return <div>
          <p>If your download does not start automatically, use <a href={link}>this direct link</a>.</p>
              </div>;
    } else {
       return <div><p>Download OpenRefine with <a href={link}>this direct link</a>.</p></div>
    }
    
}

function LatestVersionDownloadSection(props) {
    let {platform, release} = props;
    let otherArtifacts = release.artifacts.filter(variant => variant.platform !== platform);
    return (<div style={{width: '100%'}}>
                <div className="col" style={{textAlign: 'center', margin: 'auto'}}>
                    <BigDownloadButton release={release} platform={platform} />
                </div>
    </div>);
}

export function getRunningInstructions(platform) {
    if (platform === 'win') {
       return <p>First, make sure <a href="https://adoptium.net/download/">Java</a> is installed on your computer. Then, unzip the archive, and double-click on <code>openrefine.exe</code> or <code>refine.bat</code> if the former does not work.</p>
    } else if (platform === 'win-with-java') {
       return <p>Unzip the archive, and double-click on openrefine.exe or refine.bat if the former does not work.</p>
    } else if (platform === 'mac') {
       return <p>Open the downloaded DMG file, drag icon into the <code>Applications</code> folder and double click on it. <Link to="docs/manual/installing#install-or-upgrade-openrefine">See our documentation for how to circumvent security warnings</Link> when opening the DMG file.</p>;
    } else if (platform === 'linux') {
       return <p>Download, extract, then type <code>./refine</code> in a terminal to start. This requires Java to be installed on your computer.</p>
    }
}


export default function Home(): JSX.Element {
  const {
    siteConfig: {customFields, tagline},
  } = useDocusaurusContext();
  const {description} = customFields as {description: string};
  return (
    <Layout title="Thank you" description={description}>
      <main>
        <div className="container text--center margin-top--xl">
          <div className="row" style={{maxWidth: '800px', margin: 'auto', textAlign: 'left'}}>
            <div className="col">
              <h1>Thank you for downloading OpenRefine</h1>
            </div>
          </div>
        </div>
        <PostDownload />
      </main>
    </Layout>
  );
}
