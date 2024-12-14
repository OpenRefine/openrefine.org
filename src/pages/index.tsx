import React from 'react';
import clsx from 'clsx';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import BrowserOnly from '@docusaurus/BrowserOnly';

import Layout from '@theme/Layout';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import styles from './styles.module.css';

function HeaderSection() {
    return (
    <div className="container text--center margin-bottom--xl">
      <div className="row" style={{textAlign: 'left', flexWrap: 'wrap-reverse' }}>
        <div className="col" style={{marginTop: '2em' }}>
          <h1>OpenRefine</h1>
          <p>OpenRefine is a powerful free, open source tool for working with messy data: cleaning it; transforming it from one format into another; and extending it with web services and external data.</p>
          <p>Our goal is to empower everyone to meaningfully engage with data by providing an accessible open source tool and nurturing a diverse, supportive community.</p>
          <Link className="button button--primary" to="download" style={{fontSize: '1.5em'}}>Download</Link>
        </div>
        <div className="col" style={{marginTop: '1em', display: 'flex'}}>
          <img src="img/openrefine_logo.svg" alt="OpenRefine logo" style={{maxWidth: "min(250px, 20vw)", display: 'block', margin: 'auto'}}/>
        </div>
      </div>
      <div className="row">
        <div style={{textAlign: 'center', width: '100%', marginTop: '2em'}}>
        <h2>Main features</h2>
        </div>
        <div className="featureCardList">
        <FeatureCard title="Faceting" link="docs/manual/facets" logo="feature_logo_facetting.svg">Drill through large datasets using facets and apply operations on filtered views of your dataset.</FeatureCard>
        <FeatureCard title="Clustering" link="docs/manual/cellediting#cluster-and-edit" logo="feature_logo_clustering.svg">Fix inconsistencies by merging similar values thanks to powerful heuristics.</FeatureCard>
        <FeatureCard title="Reconciliation" link="docs/manual/reconciling" logo="feature_logo_reconciliation.svg">Match your dataset to external databases via reconciliation services.</FeatureCard>
        <FeatureCard title="Infinite undo/redo" link="docs/manual/running#history-undoredo" logo="feature_logo_undo.svg">Rewind to any previous state of your dataset and replay your operation history on a new version of it.</FeatureCard>
        <FeatureCard title="Privacy" link="privacy" logo="feature_logo_privacy.svg">Your data is cleaned on your machine, not in some dubious data laundering cloud.</FeatureCard>
        <FeatureCard title="Wikibase" link="docs/manual/wikibase/overview" logo="feature_logo_wikibase.svg">Contribute to Wikidata, the free knowledge base anyone can edit, and other Wikibase instances.</FeatureCard>
        </div>
        <div style={{textAlign: 'center', width: '100%', marginTop: '1em'}}>
           <p>And much more to discover in <a href="docs">our documentation</a>.</p>
        </div>
      </div>
    </div>);
}


function FeatureCard(props) {
    let {title, children, link, logo} = props;
    return <Link to={link} className="featureCard card">
            <img className="featureLogo" src={"img/" + logo} alt={title + " feature logo"} />
            <h4 className="featureCardTitle" title={title}>{title}</h4>
            <p>{children}</p>
        </Link>;
}


export default function Home(): JSX.Element {
  const {
    siteConfig: {customFields, tagline},
  } = useDocusaurusContext();
  const {description} = customFields as {description: string};
  return (
    <Layout description={description}>
      <main>
        <HeaderSection />
      </main>
    </Layout>
  );
}
