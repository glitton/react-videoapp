/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import _ from "lodash"; //lodash comes from underscore

const Pagination = props => {
  const { itemsCount, pageSize } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  // console.log(pagesCount);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className="page-item">
            <a className="page-link" onClick={() => props.onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
