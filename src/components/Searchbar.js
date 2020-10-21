import "./searchbar.css";
import { createElement } from "../utils/elements";

function Searchbar(func) {
  const search = createElement("form", {
    className: "search-form",
  });
  search.onsubmit = function (event) {
    event.preventDefault();
  };
  const inputField = createElement("input", {
    className: "search-form__input",
    type: "text",
    placeholder: "Search for Characters",
    onchange: (event) => func(event.target.value),
  });
  const submitButton = createElement("button", {
    type: "submit",
    innerText: "Search",
    className: "search-form__button",
  });
  search.append(inputField, submitButton);
  return search;
}

export default Searchbar;
