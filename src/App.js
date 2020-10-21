import "./app.css";
import Character from "./components/Character";
import Characters from "./components/Characters";
import Header from "./components/Header";
import { getCharacters } from "./utils/api";
import { createElement } from "./utils/elements";

function App() {
  const header = Header();

  const charactersContainer = Characters();
  const main = createElement("main", {
    className: "main",
    children: [charactersContainer],
  });

  async function loadCharacters() {
    const characters = await getCharacters();
    const characterElements = characters.map((character) =>
      Character({
        name: character.name,
        imgSrc: character.image,
      })
    );
    // const character = await getCharacterById(id);
    charactersContainer.append(...characterElements);
  }

  // for (let i = 1; i <= 10; i++) {
  //   loadCharacters(i);
  // }

  loadCharacters();

  const container = createElement("div", { children: [header, main] });
  return container;
}

export default App;
