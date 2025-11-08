import React from "react";
import ArtworkCard from "../components/ArtworkCard";

const Gallery: React.FC = () => {
  const artworks = [
    {
      title: "Mountain Calm",
      artist: "Asha Rao",
      image: "https://picsum.photos/202",
      price: 1000,
      description: "Nature-inspired tranquility artwork.",
    },
    {
      title: "Old Streets",
      artist: "Leela Curator",
      image: "https://picsum.photos/203",
      price: 1500,
      description: "Captures the spirit of historical India.",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <p className="mb-6">Browse through our featured artworks and exhibitions.</p>

      <div className="grid md:grid-cols-3 gap-4">
        {artworks.map((a, i) => (
          <ArtworkCard key={i} {...a} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
