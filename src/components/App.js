import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import toursData from "../tours.json"; // local JSON file
import  "../styles/App.css"

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // fetch tours from local JSON
  const fetchTours = () => {
    setLoading(true);
    setTimeout(() => {
      setTours(toursData); // load from local JSON
      setLoading(false);
    }, 1000); // simulate loading delay
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
