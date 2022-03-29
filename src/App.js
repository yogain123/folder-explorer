import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Demo from "./Demo";
import { folderData } from "./data";

function App() {
  const [data, setData] = useState({});
  const fetchDataFrombackend = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(folderData);
      }, 1000);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetchDataFrombackend();
      setData(res);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Demo data={data} />
    </div>
  );
}

export default App;
