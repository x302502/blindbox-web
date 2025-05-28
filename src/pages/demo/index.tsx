import React from "react";
export const DemoPage: React.FC = () => {
  return (
    <div>
      {Array.from({ length: 100 }, (_, index) => (
        <React.Fragment key={index}>
          {index % 20 === 0 && index ? "more" : "..."}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};
