import React from "react";

interface ArtworkProps {
  title: string;
  artist: string;
  image: string;
  price?: number;
  description?: string;
}

const ArtworkCard: React.FC<ArtworkProps> = ({ title, artist, image, price, description }) => {
  return (
    <div className="border rounded-xl p-4 shadow-md hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full rounded-lg" />
      <h3 className="font-bold text-lg mt-2">{title}</h3>
      <p className="text-gray-500">{artist}</p>
      {description && <p className="text-sm mt-1">{description}</p>}
      {price && <p className="mt-2 font-semibold text-blue-600">₹{price}</p>}
    </div>
  );
};

export default ArtworkCard;
