import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVisibleDemo } from "../../store/slice/useCallbackSlice.js"; 

import ClickCounter from "./demo1";
import KeyPressListener from "./demo2";
import SearchBar from "./demo3";
import DebouncedSearch from "./demo4";
import Timer from "./demo5";
import ItemList from "./demo6";
import Contextwithcallback from "./demo7";
import FilteredList from "./demo8";
import Counter from "./demo9";
import ApiFetcher from "./demo10";

function UseCallbackExamples() {
  const visibleDemo = useSelector((state) => state.useCallback.visibleDemo);
  const dispatch = useDispatch();

  const toggleDemo = (demoName) => {
    dispatch(setVisibleDemo(visibleDemo === demoName ? null : demoName));
  };

  return (
    <div className="container">
      <header>useCallback Hook Examples</header>
      <h2>Definition:</h2>
      <p>
        <code>useCallback</code> is a React Hook that memoizes functions so that they do not get recreated on every render.
      </p>

      <div className="demo-list">
        <button onClick={() => toggleDemo("ClickCounter")}>Click Counter</button>
        {visibleDemo === "ClickCounter" && <ClickCounter />}

        <button onClick={() => toggleDemo("KeyPressListener")}>Key Press Listener</button>
        {visibleDemo === "KeyPressListener" && <KeyPressListener />}

        <button onClick={() => toggleDemo("SearchBar")}>Search Bar</button>
        {visibleDemo === "SearchBar" && <SearchBar />}

        <button onClick={() => toggleDemo("DebouncedSearch")}>Debounced Search</button>
        {visibleDemo === "DebouncedSearch" && <DebouncedSearch />}

        <button onClick={() => toggleDemo("Timer")}>Timer</button>
        {visibleDemo === "Timer" && <Timer />}

        <button onClick={() => toggleDemo("ItemList")}>Item List</button>
        {visibleDemo === "ItemList" && <ItemList />}

        <button onClick={() => toggleDemo("Contextwithcallback")}>Context with Callback</button>
        {visibleDemo === "Contextwithcallback" && <Contextwithcallback />}

        <button onClick={() => toggleDemo("FilteredList")}>Filtered List</button>
        {visibleDemo === "FilteredList" && <FilteredList />}

        <button onClick={() => toggleDemo("Counter")}>Counter</button>
        {visibleDemo === "Counter" && <Counter />}

        <button onClick={() => toggleDemo("ApiFetcher")}>API Fetcher</button>
        {visibleDemo === "ApiFetcher" && <ApiFetcher />}
      </div>
    </div>
  );
}

export default UseCallbackExamples;
