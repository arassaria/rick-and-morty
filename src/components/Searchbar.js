import "./searchbar.css";
import { createElement } from "../utils/elements";

function Searchbar() {
  const search = createElement("form", {
    className: "search-form",
  });
  const inputField = createElement("input", {
    className: "search-form__input",
    type: "search",
    placeholder: "Search for Characters",
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
