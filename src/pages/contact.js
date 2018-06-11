

import React from "react";

export default ({ data }) =>
  <div>
    <h1>
      Contact {data.site.siteMetadata.title}
    </h1>
    <form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
  </div>

export const query = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

