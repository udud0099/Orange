import React, { useState } from "react";
import "./Home.css";
import Headers from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Headers />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
