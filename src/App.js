import React, { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("X");
  }
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  // JSX要素（表示する内容を記述するJavaScriptコードとHTMLタグの組み合わせ）
  return (
    <div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
