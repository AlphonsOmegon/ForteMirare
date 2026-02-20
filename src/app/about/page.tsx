import { getDB } from "@/lib/data/db";
import { Entity1 } from "@/entities/Entity1";
import React from "react";

const EntitiesPage = async () => {
  const db = await getDB();
  const entities = await db.getRepository(Entity1).find();

  return (
    <div>
      <h1>Entities Dashboard</h1>
      <div>
        {entities.map(entity => (
          <div key={entity.id}>
            <h3>{entity.name}</h3>
            <p>ID: {entity.id}</p>
          </div>
        ))}
      </div>

      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/Q514zHH7Y5w?si=UhF8wrOW_qhgwwnR" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      />
    </div>
  );
};

export default EntitiesPage;