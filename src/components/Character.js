import { createElement } from "../utils/elements";
import "./character.css";
import starActiveSrc from "../assets/star_active.svg";
import starInactiveSrc from "../assets/star_inactive.svg";

function Character({ name, imgSrc, status, isFavorite, id }) {
  let alive = status === "Alive" ? "🟢 - " : "🔴 - ";
  const title = createElement("p", {
    className: "character__title",
    innerText: alive + name,
  });
  const favoriteImg = createElement("img", {
    src: isFavorite ? starActiveSrc : starInactiveSrc,
  });
  const favorite = createElement("button", {
    className: "character__favorite",
    onclick: () => {
      let currentFavorites = JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );
      const isFavorite = currentFavorites.includes(id);
      if (isFavorite) {
        currentFavorites = currentFavorites.filter(
          (favorite) => favorite !== id
        );
      } else {
        currentFavorites.push(id);
      }

      localStorage.setItem("favorites", JSON.stringify(currentFavorites));
      favoriteImg.src = !isFavorite ? starActiveSrc : starInactiveSrc;
    },
    children: [favoriteImg],
  });

  const header = createElement("div", {
    className: "character__header",
    children: [title, favorite],
  });

  const avatar = createElement("img", {
    className: "character__img",
    src: imgSrc,
    alt: name,
    loading: "lazy",
  });
  const container = createElement("div", {
    className: "character",
    children: [header, avatar],
  });
  return container;
}

export default Character;
