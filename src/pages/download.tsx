import React from 'react';
import clsx from 'clsx';
import UAParser from 'ua-parser-js';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import BrowserOnly from '@docusaurus/BrowserOnly';

import Layout from '@theme/Layout';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import styles from './styles.module.css';
import {releases, platformDetails, platformOrder, getArtifact} from '../releases.js';

function selectBestPlatform() {
    if (navigator.platform.indexOf("Win") != -1)
        return 'win-with-java';
    if (navigator.platform.indexOf("Mac") != -1)
        return 'mac';
    if (navigator.platform.indexOf("X11") != -1)
        return 'linux';
    if (navigator.platform.indexOf("Linux") != -1)
        return 'linux';
    // by default, assume Windows
    return 'win-with-java';
}

function getDownloadLink(release, platform) {
    return 'post_download?version=' + release.version + '&platform=' + platform;
}

function MainDownload() {
    let release = releases.filter(release => release.stable)[0];
    return (
   <div className="container margin-bottom--xl">
      <div className="row" style={{maxWidth: '800px', margin: 'auto', textAlign: 'left'}}>
        <div className="col">
          <p>OpenRefine is free software released under the <a href="https://github.com/OpenRefine/OpenRefine/blob/master/LICENSE.txt">BSD 3-clause license</a>, brought to you by <a href="https://github.com/OpenRefine/OpenRefine/graphs/contributors">our contributors</a>.</p>
        </div>
      </div>
      <div className="row" style={{maxWidth: '800px', margin: 'auto' }}>
          <BrowserOnly fallback={<LatestVersionDownloadSection platform={'win-with-java'} release={release} />}>
             {() => {
                const bestPlatform = selectBestPlatform();
                return <LatestVersionDownloadSection platform={bestPlatform} release={release} />
             }}
          </BrowserOnly>
      </div>
      <div className="row" style={{maxWidth: '800px', margin: 'auto' }}>
        <BrowserOnly fallback={<div id="otherDistributionNotice"></div>}>
           {() => {
                const userAgent = new UAParser().getResult();
                // for the list of possible values, see https://www.npmjs.com/package/ua-parser-js
                const os = userAgent.os.name;

                if (navigator.platform.indexOf("Linux") != -1
                        // also advertise deb package to Windows users per https://github.com/OpenRefine/openrefine.org/commit/d45dab4349930bf71e232a85ce8dc131f57342c3#r99335793
                        || navigator.platform.indexOf("Win") != -1) {
                  return (<div id="otherDistributionNotice">
                        <p>You can also install OpenRefine via <a href="https://repology.org/project/openrefine/versions">package managers of various Linux distributions</a>.</p>
                       </div>);
                } else if (['Mac OS'].includes(os)) {
                   return (<div id="otherDistributionNotice">
                        You also can <a href="https://formulae.brew.sh/cask/openrefine">install OpenRefine via Homebrew</a> with:&nbsp;
                        <code>brew install --cask openrefine</code>
                       </div>);
                }
                return (<div></div>);
           }}
        </BrowserOnly>
      </div>
      <div className="row" style={{maxWidth: '800px', margin: 'auto' }}>
        <div className="col">
        <h3 id="older-versions">Other platforms and versions</h3>
        <table style={{textAlign: 'center'}}>
          <thead>
            <tr>
                <td>Version</td>
                {platformOrder.map(platform => <td key={platform} >{platformDetails[platform].fullName}</td>)}
            </tr>
          </thead>
          <tbody>
             {releases.map(release => <ReleaseLine key={'v'+release.version} release={release} />)}
          </tbody>
        </table>
        <p>See the <a href="https://github.com/OpenRefine/OpenRefine/releases">full list of releases on GitHub</a> for other versions.</p>
        </div>
      </div>
      <div className="row" style={{maxWidth: '800px', margin: 'auto' }}>
        <div className="col">
        <h3 id="extensions">Extensions</h3>
        <p>See the <a href="/extensions">extensions</a> for additional ways to use and extent OpenRefine.</p>
        </div>
      </div>
    </div>);
}

function ReleaseLine(props) {
   let {release} = props;
   return <tr>
          <td>{release.version +' ('+release.date+')'}</td>
          {platformOrder.map(platform => {
                let artifact = getArtifact(release, platform);
                if (artifact === undefined) {
                   return <td key={platform}></td>;
                }
                return <td key={platform}><SmallDownloadButton release={release} platform={artifact.platform} /></td>
          })}
        </tr>;
}

function LatestVersionDownloadSection(props) {
    let {platform, release} = props;
    let otherArtifacts = release.artifacts.filter(variant => variant.platform !== platform);
    return (<div style={{width: '100%'}}>
                <div className="col" style={{textAlign: 'center', margin: 'auto'}}>
                    <BigDownloadButton release={release} platform={platform} />
                    <div style={{fontSize: '0.8em', marginBottom: '3em'}}>
                        <Link to="privacy">Privacy notice</Link> − <Link to="whats_new">Release notes</Link>
                    </div>
                </div>
    </div>);
}

function BigDownloadButton(props) {
    let {release, platform} = props;
    let artifact = getArtifact(release, platform);
    if (artifact === undefined) {
       return <span></span>;
    }
    let extension = artifact.format.toUpperCase();
    let embeddedJava = platformDetails[platform].embedsJava ? 'with embedded Java install' : 'requires additional Java install';
    return (
        <Link className="button button--primary" to={getDownloadLink(release, platform)} style={{margin: '2em', marginBottom: '.5em'}}>
         <div style={{display: 'inline-block', }}>
           <DownloadIcon style={{height: '3em', width: 'auto', marginRight: '1.5em'}} />
         </div>
         <div style={{display: 'inline-block'}}>
          <h4 style={{margin: 0, fontSize: '1.5em'}}>Download OpenRefine {release.version} for {platformDetails[platform].name}</h4>
          <span>{extension} file, {embeddedJava}</span>
         </div>
        </Link>);
}

function SmallDownloadButton(props) {
    let {release, platform} = props;
    let artifact = getArtifact(release, platform);
    if (artifact === undefined) {
        return <span></span>;
    }
    return (<Link
              className="button button--secondary button--sm"
                to={getDownloadLink(release, platform)}>
             <DownloadIcon style={{height: '1em', width: 'auto', marginRight: '.5em'}} />
             {artifact.format.toUpperCase()}
        </Link>);

}

function DownloadIcon(props) {
   return (
    <svg alt="download" style={props.style} width="31.369mm" height="28.723mm" version="1.1" viewBox="0 0 31.369 28.723" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(-92.795 -107.35)" fillRule="evenodd" fill="currentColor">
    <path d="m93.927 134.94h29.104v-11.906h-3.9688v7.9375h-21.167l1e-6 -7.9375h-3.9688z"/>
    <path d="m108.48 127 6.6146-6.6146h-4.7625v-11.906h-3.9688v11.906h-4.4979z"/>
    </g>
    </svg>
   );
}


export default function Home(): JSX.Element {
  const {
    siteConfig: {customFields, tagline},
  } = useDocusaurusContext();
  const {description} = customFields as {description: string};
  return (
    <Layout title="Download" description={description}>
      <main>
        <div className="container text--center margin-top--xl">
          <div className="row" style={{maxWidth: '800px', margin: 'auto', textAlign: 'left'}}>
            <div className="col">
              <h1>Download OpenRefine</h1>
            </div>
          </div>
        </div>
        <MainDownload />
      </main>
    </Layout>
  );
}
