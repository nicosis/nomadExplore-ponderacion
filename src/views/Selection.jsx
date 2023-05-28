import React, { useState } from "react";

const imgCultura = "https://picsum.photos/id/799/200/300";
const imgModa = "https://picsum.photos/id/1059/200/300";
const imgGastronomia = "https://picsum.photos/id/490/200/300";
const imgStreet = "https://picsum.photos/id/686/200/300";
const imgUrban = "https://picsum.photos/id/670/200/300";
const imgRelax = "https://picsum.photos/id/1083/200/300";

const imagePairs = [
  { img1: imgCultura, img2: imgModa },
  { img1: imgGastronomia, img2: imgStreet },
  { img1: imgUrban, img2: imgRelax },
];

const destinationWeights = {
  Roma: {
    cultura: 10,
    moda: 7,
    gastronomia: 10,
    streetFood: 5,
    urban: 5,
    relax: 5,
  },
  Londres: {
    cultura: 9,
    moda: 10,
    gastronomia: 1,
    streetFood: 9,
    urban: 10,
    relax: 1,
  },
  Mikonos: {
    cultura: 1,
    moda: 1,
    gastronomia: 5,
    streetFood: 1,
    urban: 1,
    relax: 10,
  },
};

const Selection = () => {
  const [pairIndex, setPairIndex] = useState(0);

  const [userWeights, setUserWeights] = useState({
    cultura: 0,
    moda: 0,
    gastronomia: 0,
    streetFood: 0,
    urban: 0,
    relax: 0,
  });

  const ClickImage1 = (category) => {

    setUserWeights((prevUserWeights) => ({
      ...prevUserWeights,
      cultura: prevUserWeights.cultura + 1,
    }));
  };
  console.log("clic img 1 fuera:", userWeights);

  const ClickImage2 = () => {
    console.log("clic img 2");
    console.log("user pond: ", userWeights);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <h2>Click en la imagen que más te guste // Serie: {pairIndex + 1}</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              border: "1px solid black",
              padding: "10px",
              marginRight: "20px",
            }}
          >
            <img
              src={imgCultura}
              alt="Imagen 1"
              style={{ width: "200px", height: "200px", cursor: "pointer" }}
              onClick={() => ClickImage1("Cultura")}
            />
          </div>
          <div style={{ border: "1px solid black", padding: "10px" }}>
            <img
              src={imgModa}
              alt="Imagen 2"
              style={{ width: "200px", height: "200px", cursor: "pointer" }}
              onClick={ClickImage2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;
