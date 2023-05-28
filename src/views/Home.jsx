import React, { useState } from "react";

const imgRelax = "https://picsum.photos/id/318/200/300";
const imgUrban = "https://picsum.photos/id/43/200/300";
const imgVidaNoct = "https://picsum.photos/id/158/200/300";
const imgGastro = "https://picsum.photos/id/292/200/300";
const imgEspectaculo = "https://picsum.photos/id/453/200/300";
const imgModa = "https://picsum.photos/id/856/200/300";
const imgCultura = "https://picsum.photos/id/818/200/300";
const imgNatura = "https://picsum.photos/id/839/200/300";

const imagePairs = [
  { img1: imgCultura, img2: imgModa },
  { img1: imgGastro, img2: imgVidaNoct },
  { img1: imgEspectaculo, img2: imgRelax },
  { img1: imgModa, img2: imgCultura },
  // { img1: imgVidaNoct, img2: imgNatura },
  // { img1: imgUrban, img2: imgEspectaculo },
  // { img1: imgRelax, img2: imgGastro },
  // { img1: imgNatura, img2: imgUrban }
];

const destinationWeights = {
  Roma: { cultura: 10, gastronomia: 10, moda: 5, espectaculo: 1, vidaNocturna: 3, urban: 5, relax: 3, naturaleza: 1 },
  Napoles: { cultura: 3, gastronomia: 10, moda: 1, espectaculo: 1, vidaNocturna: 1, urban: 7, relax: 1, naturaleza: 1 },
  Londres: { cultura: 5, gastronomia: 3, moda: 5, espectaculo: 10, vidaNocturna: 10, urban: 7, relax: 1, naturaleza: 1 },
  Paris: { cultura: 10, gastronomia: 7, moda: 10, espectaculo: 1, vidaNocturna: 1, urban: 6, relax: 2, naturaleza: 1 },
  Mikonos: { cultura: 5, gastronomia: 3, moda: 1, espectaculo: 1, vidaNocturna: 1, urban: 1, relax: 10, naturaleza: 10 }
};

const weights = {
  cultura: 0,
  gastronomia: 0,
  moda: 0,
  espectaculo: 0,
  vidaNocturna: 0,
  urban: 0,
  relax: 0,
  naturaleza: 0
};

const Home = () => {
  const [pairIndex, setPairIndex] = useState(0);
  const [countImage1, setCountImage1] = useState(0);
  const [countImage2, setCountImage2] = useState(0);
  const [selections, setSelections] = useState([]);
  const [recommendedDestination, setRecommendedDestination] = useState(null);
  console.log('seleccion user:', selections);

  const incrementCountImage1 = () => {
    setCountImage1(countImage1 + 1);
    setNextPair();
    recordSelection(0);
  };

  const incrementCountImage2 = () => {
    setCountImage2(countImage2 + 1);
    setNextPair();
    recordSelection(1);
  };

  const recordSelection = (selection) => {
    setSelections([...selections, selection]);
  };

  const setNextPair = () => {
    if (pairIndex < imagePairs.length - 1) {
      setPairIndex(pairIndex + 1);
    } else {
      calculateRecommendation();
    }
  };
// ARREGLAR
  const calculateRecommendation = () => {
    selections.forEach((selection) => {
      if (selection === 0) {
        for (const property in weights) {
          weights[property] += 1;
        }
      } else if (selection === 1) {
        weights.cultura = 0;
        weights.gastronomia = 0;
        weights.moda = 0;
        weights.espectaculo = 0;
        weights.vidaNocturna = 0;
        weights.urban = 0;
        weights.relax = 0;
        weights.naturaleza = 0;
      }
    });

    console.log('seleccion user after: ', weights);
    
    let maxWeight = -Infinity;
    let recommendedDestination = null;

    for (const destination in destinationWeights) {
      const weight =
        weights.cultura * destinationWeights[destination].cultura +
        weights.gastronomia * destinationWeights[destination].gastronomia +
        weights.moda * destinationWeights[destination].moda +
        weights.espectaculo * destinationWeights[destination].espectaculo +
        weights.vidaNocturna * destinationWeights[destination].vidaNocturna +
        weights.urban * destinationWeights[destination].urban +
        weights.relax * destinationWeights[destination].relax +
        weights.naturaleza * destinationWeights[destination].naturaleza;

      if (weight > maxWeight) {
        maxWeight = weight;
        recommendedDestination = destination;
      }
    }

    setRecommendedDestination(recommendedDestination);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ margin: "auto", textAlign: "center" }}>
        {recommendedDestination ? (
          <div>
            <h2>Tu destino recomendado es: {recommendedDestination}</h2>
            <p>Aquí puedes encontrar información adicional sobre {recommendedDestination}</p>
            {/* Agrega más detalles sobre el destino recomendado */}
          </div>
        ) : (
          <div>
            <h2>Click en la imagen que más te guste // Serie: {pairIndex + 1}</h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ border: "1px solid black", padding: "10px", marginRight: "20px" }}>
                <img
                  src={imagePairs[pairIndex].img1}
                  alt="Imagen 1"
                  style={{ width: "200px", height: "200px" }}
                  onClick={incrementCountImage1}
                />
                <p>Conteo: {countImage1}</p>
              </div>
              <div style={{ border: "1px solid black", padding: "10px" }}>
                <img
                  src={imagePairs[pairIndex].img2}
                  alt="Imagen 2"
                  style={{ width: "200px", height: "200px" }}
                  onClick={incrementCountImage2}
                />
                <p>Conteo: {countImage2}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;