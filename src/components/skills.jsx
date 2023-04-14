import React from "react";

function Skills({ image, name }) {
  return (
    <section>
      <div className="lg:max-w-sm p-6 flex justify-center bg-gray-900">
        <img src={image} alt={name} className="h-10" />
      </div>
    </section>
  );
}

export default Skills;
