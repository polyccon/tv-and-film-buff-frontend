import  React, { useState, useEffect } from "react";
import Loading from "components/Loading";
import "./MyFilms.css";
import { render } from "@testing-library/react";

interface resultProps {
  title: string;
  total_seasons: number;
  result: [{
    series_id: string;
    title: string;
    total_seasons: number;
  }];
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
  console.log("result", result, result.length, !result.length)

    return (
      <div>
      <Loading />;
      </div>
    );
  // if (!results || (results && results.length === 0)){
  //   return <Loading />;
  // }
  // return (
  //   <div className="App">
  //   <h2>My Series:</h2>
  //     <h1>
  //       {result.map((value) => {
  //         return (
  //           <div>
  //             <div>{value.title}</div>
  //             <div>{value.total_seasons}</div>
  //           </div>
  //         );
  //       })}
  //     </h1>
  //     <h2>My Films:</h2>
  //   </div>
  // );
}
