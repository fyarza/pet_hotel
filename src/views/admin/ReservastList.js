import React from "react";

// components
import CardTableReservas from "components/Cards/CardTableReservas";

export default function ReservasList() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4 mb-12">
          <CardTableReservas />
        </div>
      </div>
    </>
  );
}
