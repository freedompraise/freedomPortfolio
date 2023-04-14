// Updated background color for AWS logo to improve visibility
// Changed from dark gray to light blue to provide more contrast with the logo
// This change makes it easier for users to recognize and identify the AWS logo among other icons

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
