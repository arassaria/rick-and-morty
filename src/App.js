import "./app.css";
import Character from "./components/Character";
import Characters from "./components/Characters";
import Header from "./components/Header";
import { getCharacters } from "./utils/api";
import { createElement } from "./utils/elements";
import Searchbar from "./components/Searchbar";

function App() {
  let lastName = null;
  let nextPage = null;

  const header = Header();

  const charactersContainer = Characters();
  const loadMoreButton = createElement("button", {
    innerText: "Load More",
    className: "loadmore",
    onclick: () => {
      loadCharacters(lastName, nextPage);
    },
  });
  const main = createElement("main", {
    className: "main",
    children: [charactersContainer, loadMoreButton],
  });

  async function loadCharacters(name, page) {
    const characters = await getCharacters(name, page);
    const characterElements = characters.results.map((character) =>
      Character({
        name: character.name,
        imgSrc: character.image,
      })
    );
    // const character = await getCharacterById(id);
    charactersContainer.append(...characterElements);

    nextPage = characters.info.next?.match(/\d+/)[0];
    loadMoreButton.disabled = !characters.info.next;
    lastName = name;
    // Reappend loadMoreButton to avoid scrolling.
    main.append(loadMoreButton);
  }

  // for (let i = 1; i <= 10; i++) {
  //   loadCharacters(i);
  // }

  const search = Searchbar({
    onchange: (value) => {
      charactersContainer.innerHTML = "";
      loadCharacters(value);
    },
  });

  loadCharacters();

  const container = createElement("div", { children: [header, search, main] });

  window.addEventListener("scroll", () => {
    const offsetY =
      loadMoreButton.offsetParent.offsetHeight - window.innerHeight - 1;
    if (offsetY < window.pageYOffset) {
      loadMoreButton.click();
    }
  });

  return container;
}

export default App;
