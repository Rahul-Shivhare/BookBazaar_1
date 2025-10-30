import React from "react";
function SortOptions({ sortOrder, setSortOrder }) {
  return (
    <div>
      <strong>Sort by price:</strong>
      <button onClick={() => setSortOrder("asc")}>
        Low to High
      </button>
      <button onClick={() => setSortOrder("desc")}>
        High to Low
      </button>
    </div>
  );
}
export default SortOptions;
