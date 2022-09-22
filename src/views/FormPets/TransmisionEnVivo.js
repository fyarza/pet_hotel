import React from "react";

function TransmisionEnVivo() {
  return (
    <div>
      <h1 className="mb-4 text-xl font-bold">Transmisión en vivo</h1>
      <iframe
        width="520"
        height="315"
        src="https://www.youtube.com/embed/D1L1_0pWsZg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default TransmisionEnVivo;
