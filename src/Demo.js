import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function Demo({ data }) {
  const [expand, setExpand] = useState(false);
  if (data.children) {
    return (
      <>
        <div>
          <span onClick={() => setExpand(!expand)}>
            {expand ? "▼" : "▶"}
            {data.name}
          </span>
          <br />
          <div
            style={{
              display: expand ? "block" : "none",
              marginLeft: 30,
            }}
          >
            {data.children.map((item) => {
              return <Demo data={item} />;
            })}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <span>
        {data.name ? "•" + data.name : "Loading..."} <br />
      </span>
    );
  }
}

export default Demo;
