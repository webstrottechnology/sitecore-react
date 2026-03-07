import { useState } from "react";

function DirectionSwitcher() {
  const [dir, setDir] = useState("ltr");

  const changeDirection = () => {
    const newDir = dir === "ltr" ? "rtl" : "ltr";
    setDir(newDir);
    document.documentElement.dir = newDir;
  };

  return (
    <button onClick={changeDirection}>
      Change Direction
    </button>
  );
}

export default DirectionSwitcher;
