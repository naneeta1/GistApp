import React from "react";
import Gist from "./Gist"; // Assuming Gist component is in a separate file

const GistList = ({ gists }) => {
  return (
    <div>
      {gists.map((gist) => (
        <Gist key={gist.id} gist={gist} />
      ))}
    </div>
  );
};

export default GistList;
