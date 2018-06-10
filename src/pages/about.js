

import React from "react";

export default ({ data }) =>
  <div>
    <h1>
      About {data.site.siteMetadata.title}
    </h1>
    <p>
      It's a site using the mighty Gatsby (that uses the amazing React) to show examples of great bands and musicians of our time.
    </p>
    <p>
      The site uses a combination of Gatsby and it's many component parts to create pages in Markdown, slugs with gatsby plugins and the ever growing library of resources for this great platform.
    </p>
    <p>
      It's all build directly on top of React, which is used to generate components just like you would in any React App. This makes it possible to create very rich and bespoke experiences that don't tie you to monolithic platforms that take forever to catch up with the rest of the Web.
    </p>
  </div>

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

