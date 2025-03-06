import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVisibleDemo } from "../../store/slice/useRefSlice.js";

import FocusInput from "./demo1";
import PreviousStateExample from "./demo2";
import RenderCounter from "./demo3";
import TimerExample from "./demo4";
import EventListenerExample from "./demo5";
import ScrollToBottom from "./demo6";
import SaveDraft from "./demo7";
import VideoControl from "./demo8";
import MeasureDiv from "./demo9";
import WebcamCapture from "./demo10";

function UseRefExamples() {
  const visibleDemo = useSelector((state) => state.useRef.visibleDemo);
  const dispatch = useDispatch();

  const toggleDemo = (demoName) => {
    dispatch(setVisibleDemo(visibleDemo === demoName ? null : demoName));
  };

  return (
    <div className="container">
      {/* Header and Definition */}
      <header>useRef Hook Examples</header>
      <h2>Definition:</h2>
      <p>
        <code>useRef</code> is a React Hook that allows you to create a mutable reference that persists across renders without causing re-renders. 
        In simple terms, it lets you store a value that does not trigger a re-render when updated.
      </p>

      {/* Buttons to toggle individual demos */}
      <div className="demo-list">
        <button onClick={() => toggleDemo("FocusInput")}>Focus Input</button>
        {visibleDemo === "FocusInput" && <FocusInput />}

        <button onClick={() => toggleDemo("PreviousStateExample")}>Previous State Example</button>
        {visibleDemo === "PreviousStateExample" && <PreviousStateExample />}

        <button onClick={() => toggleDemo("RenderCounter")}>Render Counter</button>
        {visibleDemo === "RenderCounter" && <RenderCounter />}

        <button onClick={() => toggleDemo("TimerExample")}>Timer Example</button>
        {visibleDemo === "TimerExample" && <TimerExample />}

        <button onClick={() => toggleDemo("EventListenerExample")}>Event Listener Example</button>
        {visibleDemo === "EventListenerExample" && <EventListenerExample />} <br />

        <button onClick={() => toggleDemo("SaveDraft")}>Save Draft</button>
        {visibleDemo === "SaveDraft" && <SaveDraft />}

        <button onClick={() => toggleDemo("VideoControl")}>Video Control</button>
        {visibleDemo === "VideoControl" && <VideoControl />}

        <button onClick={() => toggleDemo("MeasureDiv")}>Measure Div</button>
        {visibleDemo === "MeasureDiv" && <MeasureDiv />}

        <button onClick={() => toggleDemo("WebcamCapture")}>Webcam Capture</button>
        {visibleDemo === "WebcamCapture" && <WebcamCapture />}

        <button onClick={() => toggleDemo("ScrollToBottom")}>Scroll to Bottom</button>
        {visibleDemo === "ScrollToBottom" && <ScrollToBottom />}
      </div>
    </div>
  );
}

export default UseRefExamples;
