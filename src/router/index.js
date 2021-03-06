import page from "page";

import Home from "@/pages/Home.svelte";
import NotFound from "@/pages/NotFound.svelte";

import { routeCurrent } from "@/store/routeState.js";

export default () => {
  page("/", () => {
    routeCurrent.set(Home);
  });
  page("*", () => {
    routeCurrent.set(NotFound);
  });

  page.start();
};
