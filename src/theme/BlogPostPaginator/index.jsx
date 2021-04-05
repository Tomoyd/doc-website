/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Translate, { translate } from "@docusaurus/Translate";
import Link from "@docusaurus/Link";

function BlogPostPaginator(props) {
  const { nextItem, prevItem } = props;

  return (
    <nav
      className='pagination-nav'
      aria-label={translate({
        id: "theme.blog.post.paginator.navAriaLabel",
        message: "Blog post page navigation",
        description: "The ARIA label for the blog posts pagination",
      })}
    >
      <div className='pagination-nav__item'>
        {prevItem && (
          <Link className='pagination-nav__link' to={prevItem.permalink}>
            <div className='pagination-nav__label'>
              &laquo; {prevItem.title}
            </div>
          </Link>
        )}
      </div>
      <div className='pagination-nav__item pagination-nav__item--next'>
        {nextItem && (
          <Link className='pagination-nav__link' to={nextItem.permalink}>
            <div className='pagination-nav__label'>
              {nextItem.title} &raquo;
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default BlogPostPaginator;
