import "./app.css";
import Character from "./components/Character";
import Header from "./components/Header";
import { getCharacterById } from "./utils/api";
import { createElement } from "./utils/elements";

function App() {
  const header = Header();

  const main = createElement("main", {
    className: "main",
  });

  async function getCharacters(id) {
    const character = await getCharacterById(id);
    main.append(
      Character({
        name: character.name,
        imgSrc: character.image,
      })
    );
  }

  for (let i = 1; i <= 10; i++) {
    getCharacters(i);
  }

  const container = createElement("div", { children: [header, main] });
  return container;
}

export default App;
