import  React, { useState, useEffect } from "react";
import Loading from "components/Loading";
import "./MyFilms.css";

type resultProps = {
  title: string;
  total_seasons: number;
  result: React.ReactNode;
};

export default function MyFilms() {
  const [result, setResult] = useState<resultProps[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("/series/", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
          },
      });
      
      const jsonData = await data.json();
      setResult(jsonData);
    };

    api();
  }, []);

  if (!result){
    return <Loading />;
  }
  return (
    <div className="App">
    <h2>My Series:</h2>
      <h1>
        {result.map((value) => {
          return (
            <div>
              <div>{value.title}</div>
              <div>{value.total_seasons}</div>
            </div>
          );
        })}
      </h1>
      <h2>My Films:</h2>
    </div>
  );
}
