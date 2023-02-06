import React from "react";
import "./App.css";
import { Info } from "./components/info/info";
import { Gentleman } from "./components/gentleman/gentleman";
import { InfoList } from "./mocks/mocklist";

function App() {
  return (
    <>
      <Info></Info>
      <main className="main">
        <ul className="gentlemen">
          {InfoList.map((item) => (
            <Gentleman
              alternativeText={item.alternativeText}
              status={item.status}
              id={item.id}
              name={item.name}
              picture={item.picture}
              profession={item.profession}
              twitter={item.twitter}
              selected={item.selected}
            ></Gentleman>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
