import React from "react";
import ArtworkCard from "../components/ArtworkCard";

const Home: React.FC = () => {
  const sampleArtworks = [
    { title: "Sunset Bliss", artist: "A. Rao", image: "https://picsum.photos/400", price: 1200 },
    { title: "Ancient Walls", artist: "L. Singh", image: "https://picsum.photos/401", price: 2200 },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to Virtual Art Gallery</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {sampleArtworks.map((art, i) => (
          <ArtworkCard key={i} {...art} />
        ))}
      </div>
    </div>
  );
};

export default Home;
