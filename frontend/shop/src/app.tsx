/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import { CartPage } from "@pages/cart";
import "./tailwind.css";

render(
  () => (
    <Router>
      <Route path="/cart" component={CartPage} />
    </Router>
  ),
  document.body,
);
