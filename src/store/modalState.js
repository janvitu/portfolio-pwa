import { writable } from "svelte/store";

const createModalState = () => {
  const modalOpened = writable(false);

  const toggleState = () => {
    modalOpened.update((state) => {
      return !state;
    });
  };

  const open = () => {
    modalOpened.update(() => {
      return true;
    });
  };

  const close = () => {
    modalOpened.update(() => {
      return false;
    });
  };

  const { subscribe } = modalOpened;

  return {
    subscribe,
    toggleState,
    open,
    close,
  };
};

export const modalState = createModalState();
