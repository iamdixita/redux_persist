import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVisibleDemo } from "../../store/slice/useMemoSlice.js"; 

import ExpensiveComponent from "./demo1";
import FilteredList from "./demo2";
import SortedList from "./demo3";
import FibonacciCalculator from "./demo4";
import TransformedData from "./demo5";
import Cart from "./demo6";
import ConditionalRendering from "./demo7";
import PaginatedList from "./demo8";
import RegexHighlighter from "./demo9";
import CachedApiData from "./demo10";

function UseMemoExamples() {
  const visibleDemo = useSelector((state) => state.useMemo.visibleDemo);
  const dispatch = useDispatch();

  const toggleDemo = (demoName) => {
    dispatch(setVisibleDemo(visibleDemo === demoName ? null : demoName));
  };

  return (
    <div className="container">
      {/* Header and Definition */}
      <header>useMemo Hook Examples</header>
      <h2>Definition:</h2>
      <p>
        The <code>useMemo</code> hook optimizes performance by caching computed values
        and preventing unnecessary recalculations.
      </p>

      {/* Buttons to toggle individual demos */}
      <div className="demo-list">
        <button onClick={() => toggleDemo("ExpensiveComponent")}>Expensive Component</button>
        {visibleDemo === "ExpensiveComponent" && <ExpensiveComponent />}

        <button onClick={() => toggleDemo("FilteredList")}>Filtered List</button>
        {visibleDemo === "FilteredList" && <FilteredList />}

        <button onClick={() => toggleDemo("SortedList")}>Sorted List</button>
        {visibleDemo === "SortedList" && <SortedList />}

        <button onClick={() => toggleDemo("FibonacciCalculator")}>Fibonacci Calculator</button>
        {visibleDemo === "FibonacciCalculator" && <FibonacciCalculator />}

        <button onClick={() => toggleDemo("TransformedData")}>Transformed Data</button>
        {visibleDemo === "TransformedData" && <TransformedData />}
        <br />

        <button onClick={() => toggleDemo("Cart")}>Cart</button>
        {visibleDemo === "Cart" && <Cart />}

        <button onClick={() => toggleDemo("ConditionalRendering")}>Conditional Rendering</button>
        {visibleDemo === "ConditionalRendering" && <ConditionalRendering />}

        <button onClick={() => toggleDemo("PaginatedList")}>Paginated List</button>
        {visibleDemo === "PaginatedList" && <PaginatedList />}

        <button onClick={() => toggleDemo("RegexHighlighter")}>Regex Highlighter</button>
        {visibleDemo === "RegexHighlighter" && <RegexHighlighter />}

        <button onClick={() => toggleDemo("CachedApiData")}>Cached API Data</button>
        {visibleDemo === "CachedApiData" && <CachedApiData />}
      </div>
    </div>
  );
}

export default UseMemoExamples;
