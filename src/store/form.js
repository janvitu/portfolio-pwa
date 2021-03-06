import { writable } from "svelte/store";

const createFormErrState = (formErrObj) => {
  const errFormData = writable(formErrObj);

  const setProperty = (propertyName, value = "") => {
    errFormData.update((form) => {
      if (propertyName in form) form[propertyName] = value;
      return form;
    });
  };

  const reset = () => {
    errFormData.set(formErrObj);
  };

  const { subscribe } = errFormData;

  return {
    subscribe,
    setProperty,
    reset,
  };
};

// Define your own form data strucuture
const formErrObj = {
  email: "",
  subject: "",
  message: "",
};

export const formState = createFormErrState(formErrObj);
