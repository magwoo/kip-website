/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import { Index } from "@pages/index";
import { Js } from "@pages/js";
import "./tailwind.css";

render(
  () => (
    <Router>
      <Route path="/" component={Index} />
      <Route path="/js" component={Js} />
    </Router>
  ),
  document.body,
);
