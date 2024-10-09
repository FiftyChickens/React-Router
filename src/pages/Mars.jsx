import React from "react";

const Mars = () => {
  return (
    <div className="planet">
      <h2>Mars</h2>
      <p>Mars is the fourth planet from the Sun.</p>{" "}
      <p>
        The surface of Mars is orange-red because it is covered in iron(III)
        oxide dust, giving it the nickname "the Red Planet".{" "}
      </p>
      <p>
        Mars is among the brightest objects in Earth's sky, and its
        high-contrast albedo features have made it a common subject for
        telescope viewing. It is classified as a terrestrial planet and is the
        second smallest of the Solar System's planets with a diameter of 6,779
        km (4,212 mi).
      </p>
      <p>
        In terms of orbital motion, a Martian solar day (sol) is equal to 24.5
        hours, and a Martian solar year is equal to 1.88 Earth years (687 Earth
        days). Mars has two natural satellites that are small and irregular in
        shape: Phobos and Deimos.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png/480px-Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png"
        alt="Image of Mars"
      />
    </div>
  );
};

export default Mars;
