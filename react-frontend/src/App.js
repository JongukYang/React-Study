import logo from "./logo.svg";
import "./App.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { Tooltip as ReactTooltip } from "react-tooltip";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* 툴팁 부분 */}
        <p id="my-element" data-tooltip-content="이거 툴팁">
          Tooltip
        </p>
        <ReactTooltip anchorId="my-element" />
        {/* 툴팁 끝! */}
      </header>
    </div>
  );
}

export default App;
