import "./app.css";
import Character from "./components/Character";
import Characters from "./components/Characters";
import Header from "./components/Header";
import { getCharacters } from "./utils/api";
import { createElement } from "./utils/elements";
import Searchbar from "./components/Searchbar";

function App() {
  const header = Header();

  const charactersContainer = Characters();
  const main = createElement("main", {
    className: "main",
    children: [charactersContainer],
  });

  async function loadCharacters(name) {
    const characters = await getCharacters(name);
    const characterElements = characters.map((character) =>
      Character({
        name: character.name,
        imgSrc: character.image,
      })
    );
    // const character = await getCharacterById(id);
    charactersContainer.innerHTML = "";
    charactersContainer.append(...characterElements);
  }

  // for (let i = 1; i <= 10; i++) {
  //   loadCharacters(i);
  // }

  const search = Searchbar({
    onchange: (value) => loadCharacters(value),
  });

  loadCharacters();

  const container = createElement("div", { children: [header, search, main] });
  return container;
}

export default App;
