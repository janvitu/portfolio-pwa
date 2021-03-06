import { writable } from "svelte/store";

const hamburgerState = writable(false);

export default hamburgerState;
