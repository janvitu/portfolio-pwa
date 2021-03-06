import { writable } from "svelte/store";

const hambState = () => {
  const _hambState = writable(false);

  const close = () => {
    _hambState.update((s) => false);
  };

  const open = () => {
    _hambState.update((s) => true);
  };

  const toggle = () => {
    _hambState.update((s) => !s);
  };

  const { subscribe } = _hambState;

  return {
    subscribe,
    toggle,
    open,
    close,
  };
};

export const hamburgerState = hambState();
