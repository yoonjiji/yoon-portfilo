import React from "react";

export default function SectionWrap({ id, title, description, children }) {
  return (
    <section id={id} className="section max-container">
      <h2 className="title">{title}</h2>
      {id === "skill" && <p className="description">Skills & Attributes</p>}
      {id === "skill" ? (
        <p className="description">{description}</p>
      ) : (
        <p className="description">{description}</p>
      )}
      {children}
    </section>
  );
}
