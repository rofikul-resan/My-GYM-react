import React, { useEffect, useState } from "react";

const OfferList = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetch("./gymOffer.json")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);

  return (
    <div className="mt-10">
      <h1 className="text-4xl text-center font-bold">Welcome to my GYM</h1>
      <p className="text-center font-semibold text-xl mt-5">
        we have total{" "}
        <span className="text-2xl text-purple-700 ">{offers.length}</span> offer
        for you
      </p>
      <div className="grid md:grid-cols-3 mt-10 gap-8 w-10/12 mx-auto">
        {offers.map((offer) => (
          <OfferCard offer={offer} key={offer.id}></OfferCard>
        ))}
      </div>
    </div>
  );
};

function OfferCard({ offer }) {
  return (
    <div className="bg-purple-300 rounded-lg px-4 py-2 flex flex-col">
      <h2 className="text-3xl font-bold text-center">{offer.name}</h2>
      <p className="text-xl  text-center">
        <span className="text-4xl text-purple-950 font-bold">
          $ {offer.price}{" "}
        </span>{" "}
        \ month
      </p>

      <p className="text-red-700 mt-8 border-b-2 border-b-white text-xl font-semibold">
        Our features{" "}
      </p>
      <ol className="list-decimal ml-5 mt-4 font-semibold mb-8">
        {offer.features.map((feature) => (
          <li>{feature}</li>
        ))}
      </ol>
      <button className="text-white font-bold bg-green-600 hover:bg-green-800 py-3 rounded-md w-full mb-3 mt-auto">
        Bye Now
      </button>
    </div>
  );
}

export default OfferList;
