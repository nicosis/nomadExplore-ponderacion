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

const destinationWeights = [
  {
    destination: "Roma",
    weights: {
      cultura: 10,
      moda: 5,
      gastronomia: 10,
      streetFood: 5,
      urban: 5,
      relax: 5,
    },
  },
  {
    destination: "Londres",
    weights: {
      cultura: 9,
      moda: 10,
      gastronomia: 1,
      streetFood: 8,
      urban: 9,
      relax: 1,
    },
  },
  {
    destination: "Mikonos",
    weights: {
      cultura: 1,
      moda: 7,
      gastronomia: 9,
      streetFood: 1,
      urban: 3,
      relax: 10,
    },
  },
];

const Selection = () => {
  const [pairIndex, setPairIndex] = useState(0);
  const [recommendedDestination, setRecommendedDestination] = useState(null);
  const [userWeights, setUserWeights] = useState({
    cultura: 0,
    moda: 0,
    gastronomia: 0,
    streetFood: 0,
    urban: 0,
    relax: 0,
  });

  console.log(recommendedDestination);
  console.log("user weight: ", userWeights);

  const setNextPair = () => {
    if (pairIndex < imagePairs.length - 1) {
      setPairIndex(pairIndex + 1);
    } else {
      calculateRecommendation();
    }
  };

  const clickImage = (category, value) => {
    setUserWeights((prevUserWeights) => ({
      ...prevUserWeights,
      [category]: prevUserWeights[category] + value,
    }));
    setNextPair();
  };

  const clickImage1 = () => {
    if (pairIndex === 0) {
      clickImage("cultura", 1);
    } else if (pairIndex === 1) {
      clickImage("gastronomia", 1);
    } else if (pairIndex === 2) {
      clickImage("urban", 1);
    }
  };

  const clickImage2 = () => {
    if (pairIndex === 0) {
      clickImage("moda", 1);
    } else if (pairIndex === 1) {
      clickImage("streetFood", 1);
    } else if (pairIndex === 2) {
      clickImage("relax", 1);
    }
  };

  const calculateRecommendation = () => {
    let maxScore = 0;
    let recommendedDestination = null;

    for (const i in destinationWeights) {
      const destinationWeight = destinationWeights[i];
      const { destination, weights } = destinationWeight;
      let score = 0;

      for (const category in userWeights) {
        score += userWeights[category] * weights[category];
      }

      if (score > maxScore) {
        maxScore = score;
        recommendedDestination = destination;
      }
      console.log("score: ", score);
    }
    setRecommendedDestination(recommendedDestination);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ margin: "auto", textAlign: "center" }}>
        {recommendedDestination ? (
          <div>
            <h2>Tu destino recomendado es: {recommendedDestination}</h2>
            <p>
              Aquí puedes encontrar información adicional sobre
              {recommendedDestination}
            </p>
          </div>
        ) : (
          <div>
            <h2>
              Click en la imagen que más te guste // Serie: {pairIndex + 1}
            </h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  marginRight: "20px",
                }}
              >
                <img
                  src={imagePairs[pairIndex].img1}
                  alt="Imagen 1"
                  style={{ width: "200px", height: "200px", cursor: "pointer" }}
                  onClick={clickImage1}
                />
              </div>
              <div style={{ border: "1px solid black", padding: "10px" }}>
                <img
                  src={imagePairs[pairIndex].img2}
                  alt="Imagen 2"
                  style={{ width: "200px", height: "200px", cursor: "pointer" }}
                  onClick={clickImage2}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Selection;
