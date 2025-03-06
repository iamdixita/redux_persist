import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVisibleDemo } from "../../store/slice/useStateSlice.js";


import Counter from "./demo1";
import Toggle from "./demo2";
import TextInput from "./demo3";
import FormExample from "./demo4";
import ShowHideText from "./demo5";
import RandomNumber from "./demo6";
import LightDarkMode from "./demo7";
import ItemList from "./demo8";
import CountdownTimer from "./demo9";
import FetchData from "./demo10";

function UseStateExamples() {
  
  const visibleDemo = useSelector((state) => state.useState.visibleDemo);
  const dispatch = useDispatch();

  const toggleDemo = (demoName) => {
    dispatch(setVisibleDemo(visibleDemo === demoName ? null : demoName));
  };

  return (
    <div className="container">
      <header>useState Hook Examples</header>
      <h2>Definition:</h2>
      <h3>
        useState is a React hook used to manage state inside functional components.
        It allows components to store and update values dynamically without using class components.
      </h3>

      <div className="demo-list">
        <button onClick={() => toggleDemo("Counter")}>Counter</button>
        {visibleDemo === "Counter" && <Counter />}

        <button onClick={() => toggleDemo("Toggle")}>Toggle</button>
        {visibleDemo === "Toggle" && <Toggle />}

        <button onClick={() => toggleDemo("TextInput")}>Text Input</button>
        {visibleDemo === "TextInput" && <TextInput />}

        <button onClick={() => toggleDemo("FormExample")}>Form Example</button>
        {visibleDemo === "FormExample" && <FormExample />}

        <button onClick={() => toggleDemo("ShowHideText")}>Show/Hide Text</button>
        {visibleDemo === "ShowHideText" && <ShowHideText />}

        <button onClick={() => toggleDemo("RandomNumber")}>Random Number</button>
        {visibleDemo === "RandomNumber" && <RandomNumber />}

        <button onClick={() => toggleDemo("LightDarkMode")}>Light/Dark Mode</button>
        {visibleDemo === "LightDarkMode" && <LightDarkMode />}

        <button onClick={() => toggleDemo("ItemList")}>Item List</button>
        {visibleDemo === "ItemList" && <ItemList />}

        <button onClick={() => toggleDemo("CountdownTimer")}>Countdown Timer</button>
        {visibleDemo === "CountdownTimer" && <CountdownTimer />}

        <button onClick={() => toggleDemo("FetchData")}>Fetch Data</button>
        {visibleDemo === "FetchData" && <FetchData />}
      </div>
    </div>
  );
}

export default UseStateExamples;
