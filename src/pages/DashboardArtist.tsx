import React from "react";
import ArtworkCard from "../components/ArtworkCard";

const DashboardArtist: React.FC = () => {
  const myArtworks = [
    { title: "Sunset Bliss", artist: "You", image: "https://picsum.photos/200", price: 1500 },
    { title: "Ocean Dreams", artist: "You", image: "https://picsum.photos/201", price: 1800 },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Artist Dashboard</h1>
      <p className="mb-4">Upload and manage your artwork listings, track sales and buyer interactions.</p>

      <h3 className="text-xl font-semibold mb-2">Your Artworks</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {myArtworks.map((a, i) => (
          <ArtworkCard key={i} {...a} />
        ))}
      </div>
    </div>
  );
};

export default DashboardArtist;
