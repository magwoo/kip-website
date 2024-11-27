/* @refresh reload */
import { render } from "solid-js/web";
import { Counter } from "@components/Counter";
import "./index.css";

function App() {
  return <Counter />;
}

render(App, document.body);
