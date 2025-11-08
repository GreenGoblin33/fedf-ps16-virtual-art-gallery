import React from "react";
import { Artwork } from "../types/types";

const ArtworkCard: React.FC<{ artwork: Artwork; onBuy?: (a: Artwork) => void }> = ({ artwork, onBuy }) => {
  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <div className="relative h-56 bg-gray-100">
        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-3 left-3 bg-black/50 text-white px-3 py-1 rounded">{artwork.style}</div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{artwork.title}</h3>
        <p className="text-sm text-gray-600">{artwork.artist} • {artwork.medium}</p>
        <p className="mt-2 text-gray-700 line-clamp-3">{artwork.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="font-semibold text-indigo-700">{artwork.price ? `₹ ${artwork.price}` : 'Not for sale'}</div>
          <div className="flex gap-2">
            <button
              onClick={() => onBuy && onBuy(artwork)}
              disabled={!artwork.price}
              className="px-3 py-1 rounded-lg bg-indigo-600 text-white disabled:opacity-50"
            >
              Buy
            </button>
            <button className="px-3 py-1 rounded-lg border">Details</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArtworkCard;
