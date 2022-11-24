
import React from 'react';
import Link from '@docusaurus/Link';

export default function Card(props) {
    let {href, title, description} = props;
    return <Link className="card" href={href}>
               <h3 className="card-title" title={title}>{title}</h3>
               <p className="card-description" style={{}} title={description}>{description}</p>
             </Link>;
}


