import { writable } from "svelte/store";

import Home from "@/pages/Home.svelte";

const routeCurrent = writable(Home);

export { routeCurrent };
