import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVisibleDemo } from "../../store/slice/useReducerSlice.js"; // Ensure correct path

import Counter from "./demo1";
import CounterWithStep from "./demo2";
import TodoApp from "./demo3";
import ShoppingCart from "./demo4";
import EnhancedModal from "./demo5";
import EnhancedDataFetching from "./demo6";
import StepForm from "./demo7";
import UndoRedoExample from "./demo8";
import Stopwatch from "./demo9";
import AuthComponent from "./demo10";

function UseReducerExamples() {
  const visibleDemo = useSelector((state) => state.useReducer.visibleDemo);
  const dispatch = useDispatch();

  const toggleDemo = (demoName) => {
    dispatch(setVisibleDemo(visibleDemo === demoName ? null : demoName));
  };

  return (
    <div className="container">
      {/* Header and Definition */}
      <header>useReducer Hook Examples</header>
      <h2>Definition:</h2>
      <p>
        <code>useReducer</code> is a React Hook that manages complex state logic inside a component.
        It is an alternative to <code>useState</code> when state updates involve multiple conditions or dependent values.
        It works like Redux but for local component state.
      </p>

      {/* Buttons to toggle individual demos */}
      <div className="demo-list">
        <button onClick={() => toggleDemo("Counter")}>Counter</button>
        {visibleDemo === "Counter" && <Counter />}

        <button onClick={() => toggleDemo("CounterWithStep")}>Counter with Step</button>
        {visibleDemo === "CounterWithStep" && <CounterWithStep />}

        <button onClick={() => toggleDemo("TodoApp")}>Todo App</button>
        {visibleDemo === "TodoApp" && <TodoApp />}

        <button onClick={() => toggleDemo("ShoppingCart")}>Shopping Cart</button>
        {visibleDemo === "ShoppingCart" && <ShoppingCart />}

        <button onClick={() => toggleDemo("EnhancedModal")}>Enhanced Modal</button>
        {visibleDemo === "EnhancedModal" && <EnhancedModal />}
        <br />

        <button onClick={() => toggleDemo("EnhancedDataFetching")}>Enhanced Data Fetching</button>
        {visibleDemo === "EnhancedDataFetching" && <EnhancedDataFetching />}

        <button onClick={() => toggleDemo("StepForm")}>Step Form</button>
        {visibleDemo === "StepForm" && <StepForm />}

        <button onClick={() => toggleDemo("UndoRedoExample")}>Undo/Redo Example</button>
        {visibleDemo === "UndoRedoExample" && <UndoRedoExample />}

        <button onClick={() => toggleDemo("Stopwatch")}>Stopwatch</button>
        {visibleDemo === "Stopwatch" && <Stopwatch />}

        <button onClick={() => toggleDemo("AuthComponent")}>Auth Component</button>
        {visibleDemo === "AuthComponent" && <AuthComponent />}
      </div>
    </div>
  );
}

export default UseReducerExamples;
