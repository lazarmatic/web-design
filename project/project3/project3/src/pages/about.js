import React, { useState, useEffect } from "react";
import "../App.css"; // Importing the CSS file for styling

const About = () => {
  const people = [
    {
      name: "Jane Doe",
      bio: "A creative designer.",
      extraInfo: "Loves painting and traveling.",
    },
    {
      name: "John Smith",
      bio: "A passionate developer.",
      extraInfo: "Enjoys coding and hiking.",
    },
    {
      name: "Alice Johnson",
      bio: "An enthusiastic marketer.",
      extraInfo: "Fascinated by social media trends.",
    },
    {
      name: "Bob Brown",
      bio: "A dedicated project manager.",
      extraInfo: "Excels in team coordination and leadership.",
    },
  ];

  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch with a timeout
    const fetchData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };
    fetchData();
  }, [selectedPerson]);

  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="button-group">
        {people.map((person) => (
          <button
            key={person.name}
            onClick={() => setSelectedPerson(person)}
            className={selectedPerson.name === person.name ? "active" : ""}
          >
            {person.name}
          </button>
        ))}
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="info-container">
          <h2>{selectedPerson.name}</h2>
          <p>{selectedPerson.bio}</p>
          <p>{selectedPerson.extraInfo}</p>
        </div>
      )}
    </div>
  );
};

export default About;
