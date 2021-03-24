import React from "react";
import { VisibilityFilters } from "../examples/reduxDemo/actions";
import FilterLink from "./FilterLink";

const FilterFooter = () => {
  return (
    <div>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>,
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>,
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </div>
  );
};

export default FilterFooter;
