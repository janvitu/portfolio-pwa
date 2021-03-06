import { formState } from "@/store/form";
import { liveValidate } from "@js/validateForm";

const onFocus = (e) => {
  e.target.parentElement.classList.add("is-focused");
};
const onFocusOut = (e) => {
  e.target.parentElement.classList.add("is-visited");
  e.target.parentElement.classList.remove("is-focused");
  liveValidate(e);
};

export { onFocus, onFocusOut };
