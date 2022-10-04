import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

// const url = "https://pokeapi.co/api/v2/pokemon";

const useGetApi = (url) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data.results);
    });
  }, []);

  return data
};

export default useGetApi;
