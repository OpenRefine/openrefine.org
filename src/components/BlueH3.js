// Note: This component is used to render a blue colored H3 heading
//       which allows for the `#` link to be rendered after the heading
import React from 'react';
import Heading from '@theme/Heading';

export default function BlueH3({children, id}) {
  return (
  <Heading
  // headings have to have an id passed in order to properly render the `#` link after the heading
  // Example: <BlueH3 id="my-heading">My Heading</BlueH3> will render as <h3 id="my-heading">My Heading</h3>
  id={id}
    as='h3'
    style={{
        // color is set to same as link color
      color: 'var(--ifm-link-color)',
    }}>
    {children}
  </Heading>
);
}