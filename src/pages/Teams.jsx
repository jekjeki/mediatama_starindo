import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamsCard from "../components/TeamsCard";

const Teams = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="flex flex-col items-center flex-grow mt-6">
        <h1 className="text-6xl my-3 text-center">OUR TEAMS</h1>

        <div className="grid grid-cols-1 place-items-center w-full max-w-5xl">
          <TeamsCard image="/CEO.png" name="Ardy" role="CEO" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mt-8">
          <TeamsCard image="/CEO.png" name="Budi" role="CTO" />
          <TeamsCard image="/CEO.png" name="Cindy" role="CFO" />
          <TeamsCard image="/CEO.png" name="Daniel" role="COO" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mt-8">
          <TeamsCard image="/CEO.png" name="Eka" role="CMO" />
          <TeamsCard image="/CEO.png" name="Fahri" role="HR Manager" />
          <TeamsCard image="/CEO.png" name="Gita" role="Lead Engineer" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mt-8">
          <TeamsCard image="/CEO.png" name="Hadi" role="Product Manager" />
          <TeamsCard image="/CEO.png" name="Indra" role="Designer" />
          <TeamsCard image="/CEO.png" name="Joko" role="Marketing" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Teams;




