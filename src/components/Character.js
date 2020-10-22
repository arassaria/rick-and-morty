import { createElement } from "../utils/elements";
import "./character.css";

function Character({ name, imgSrc, status }) {
  let alive = status === "Alive" ? "🟢 - " : "🔴 - ";
  const title = createElement("p", {
    className: "character__title",
    innerText: alive + name,
  });
  const avatar = createElement("img", {
    className: "character__img",
    src: imgSrc,
    alt: name,
    loading: "lazy",
  });
  const container = createElement("div", {
    className: "character",
    children: [title, avatar],
  });
  return container;
}

export default Character;
