import { formState } from "@/store/form";

const beforeSubmit = (errText, path) => {
  let [input] = document.getElementsByName(path);
  let errField = input.parentElement;

  formState.setProperty(path, errText);
  errField.classList.add("is-invalid");

  input.focus();
};

const liveValidate = (event) => {
  const rules = {
    email: {
      regExp:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      errMsg: "Nesprávný formát emailu",
      emptyErr: "Email nesmí být prázdný",
    },
    subject: {
      regExp: /^(.+){0,60}$/,
      errMsg: "Předmět přesahuje maximální povolenou délku",
      emptyErr: "Předmět nesmí být prázdný",
    },
    message: {
      regExp: /^.+$/,
      errMsg: "N/A",
      emptyErr: "Zpráva nesmí být prázdná",
    },
  };

  if (event.target.parentElement.classList.contains("is-visited")) {
    const name = event.target.name;
    const fieldRules = rules[name];
    const fieldValue = event.target.value;
    // test input field value
    if (fieldValue) {
      if (!fieldRules.regExp.test(fieldValue)) {
        formState.setProperty(name, fieldRules.errMsg);
        event.target.parentElement.classList.add("is-invalid");
      } else {
        formState.setProperty(name);
        event.target.parentElement.classList.remove("is-invalid");
      }
    } else {
      formState.setProperty(name, fieldRules.emptyErr);
      event.target.parentElement.classList.add("is-invalid");
    }
  }
};

export { beforeSubmit, liveValidate };
