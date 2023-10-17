import React from 'react';

const Pagination = ({ loadMore }) => {
  return (
    <button onClick={loadMore}>Load More</button>
  );
};

export default Pagination;
