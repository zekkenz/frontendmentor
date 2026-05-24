// Part2.jsx
import "./Part2.css";
import { useState } from "react";
import Part2skel from "./Part2skel/Part2skel.jsx";
//
function Part2() {
  const [initial, setInitial] = useState(0);

  const content = [
    {
      title: "Bookmark in one click",
      text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },
    {
      title: "Intelligent search",
      text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    },
    {
      title: "Share your bookmarks",
      text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
  ];

  return (
    <>
      <div className="part2-container">
        <ul className="threebuttons">
          <li>
            <button
              className={initial === 0 ? "selected" : ""}
              onClick={() => setInitial(0)}
            >
              Simple Bookmarking
            </button>
          </li>
          <li>
            <button
              className={initial === 1 ? "selected" : ""}
              onClick={() => setInitial(1)}
            >
              Speedy Searching
            </button>
          </li>
          <li>
            <button
              className={initial === 2 ? "selected" : ""}
              onClick={() => setInitial(2)}
            >
              Easy Sharing
            </button>
          </li>
        </ul>

        <Part2skel
          title={content[initial].title}
          text={content[initial].text}
          initial={initial}
        />
      </div>
    </>
  );
}
export default Part2;
