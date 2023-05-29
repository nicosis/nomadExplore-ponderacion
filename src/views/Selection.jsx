import React, { useState } from "react";

const imgCultura = "https://cdn.culturagenial.com/es/imagenes/whatsapp-image-2021-10-19-at-18-47-29-cke.jpg";
const imgCompras = "https://media.istockphoto.com/id/1369227756/es/foto/ri%C3%A9ndose-de-su-camino-a-trav%C3%A9s-del-centro-comercial.jpg?s=1024x1024&w=is&k=20&c=VwRB4XcKPB0SU6BTocS_7zuM0CKM0nfVeoPZdxDa-Do=";
const imgGastronomia = "https://media.istockphoto.com/id/516329534/es/foto/%C3%BAltima-paja.jpg?s=1024x1024&w=is&k=20&c=WWO6jfzceV0quS75_h4F4w_7oSmg2-hLvN1Oxz8iz_c=";
const imgEnologia = "https://picsum.photos/id/75/200/300";
const imgUrban = "https://picsum.photos/id/670/200/300";
const imgRelax = "https://picsum.photos/id/1083/200/300";

const imagePairs = [
  { img1: imgCultura, img2: imgCompras },
  { img1: imgGastronomia, img2: imgEnologia },
  { img1: imgUrban, img2: imgRelax },
];

const destinationWeights = [
  {
    destination: "Roma",
    weights: {
      cultura: 10,
      compras: 1,
      gastronomia: 10,
      enologia: 10,
      urban: 5,
      relax: 5,
    },
  },
  {
    destination: "Londres",
    weights: {
      cultura: 6,
      compras: 10,
      gastronomia: 1,
      enologia: 1,
      urban: 9,
      relax: 1,
    },
  },
  {
    destination: "Mikonos",
    weights: {
      cultura: 1,
      compras: 10,
      gastronomia: 10,
      enologia: 5,
      urban: 1,
      relax: 10,
    },
  },
];

const Selection = () => {
  const [pairIndex, setPairIndex] = useState(0);
  const [recommendedDestination, setRecommendedDestination] = useState(null);
  const [userWeights, setUserWeights] = useState({
    cultura: 0,
    compras: 0,
    gastronomia: 0,
    enologia: 0,
    urban: 0,
    relax: 0,
  });

  console.log("user weight: ", userWeights);

  const setNextPair = () => {
    // if (pairIndex < imagePairs.length - 1) {
      setPairIndex(pairIndex + 1);
    // } else {
      // calculateRecommendation(); // Calcular recomendación al pasar por todas las imágenes
    // }
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
      clickImage("compras", 1);
    } else if (pairIndex === 1) {
      clickImage("enologia", 1);
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

      console.log(`Destination: ${destination}, Score: ${score}`); // Imprimir destino y puntaje en la consola

      if (score > maxScore) {
        maxScore = score;
        recommendedDestination = destination;
      }
    }
    setRecommendedDestination(recommendedDestination);
    console.log("Recommended Destination:", recommendedDestination); // Imprimir destino recomendado en la consola
  };

  const handleRecommendationClick = () => {
    calculateRecommendation();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ margin: "auto", textAlign: "center" }}>
        {pairIndex === imagePairs.length ? (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Tu destino recomendado es: {recommendedDestination}</h2>
            <button onClick={handleRecommendationClick}>
              Calcular Recomendación
            </button>
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
