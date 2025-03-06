import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVisibleDemo } from "../../store/slice/useEffectSlice.js"; // Ensure correct path

import EveryRender from "./demo1";
import RunOnceEffect from "./demo2";
import EffectWithState from "./demo3";
import EffectWithProps from "./demo4";
import FetchData from "./demo5";
import WindowResize from "./demo6";
import Timer from "./demo7";
import SearchUser from "./demo8";
import DarkMode from "./demo9";
import AnimatedText from "./demo10";

function UseEffectExamples() {
  const visibleDemo = useSelector((state) => state.useEffect.visibleDemo);
  const dispatch = useDispatch();

  const toggleDemo = (demoName) => {
    dispatch(setVisibleDemo(visibleDemo === demoName ? null : demoName));
  };

  return (
    <div className="container">
      <header>useEffect Hook Examples</header>
      <h2>Definition:</h2>
      <p>
        <code>useEffect</code> is a React Hook that lets you perform side effects in functional components.
        It replaces lifecycle methods like <code>componentDidMount</code>, <code>componentDidUpdate</code>, 
        and <code>componentWillUnmount</code> from class components.
      </p>

      <div className="demo-list">
        <button onClick={() => toggleDemo("EveryRender")}>Every Render</button>
        {visibleDemo === "EveryRender" && <EveryRender />}

        <button onClick={() => toggleDemo("RunOnceEffect")}>Run Once Effect</button>
        {visibleDemo === "RunOnceEffect" && <RunOnceEffect />}

        <button onClick={() => toggleDemo("EffectWithState")}>Effect with State</button>
        {visibleDemo === "EffectWithState" && <EffectWithState />}

        <button onClick={() => toggleDemo("EffectWithProps")}>Effect with Props</button>
        {visibleDemo === "EffectWithProps" && <EffectWithProps />}

        <button onClick={() => toggleDemo("FetchData")}>Fetch Data</button>
        {visibleDemo === "FetchData" && <FetchData />}

        <button onClick={() => toggleDemo("WindowResize")}>Window Resize</button>
        {visibleDemo === "WindowResize" && <WindowResize />}

        <button onClick={() => toggleDemo("Timer")}>Timer</button>
        {visibleDemo === "Timer" && <Timer />}

        <button onClick={() => toggleDemo("SearchUser")}>Search User</button>
        {visibleDemo === "SearchUser" && <SearchUser />}

        <button onClick={() => toggleDemo("DarkMode")}>Dark Mode</button>
        {visibleDemo === "DarkMode" && <DarkMode />}

        <button onClick={() => toggleDemo("AnimatedText")}>Animated Text</button>
        {visibleDemo === "AnimatedText" && <AnimatedText />}
      </div>
    </div>
  );
}

export default UseEffectExamples;
