import { getDB } from "@/lib/db";
import { Entity1 } from "@/entities/Entity1";

export default async function EntitiesPage() {
  const db = await getDB();
  const entities = await db.getRepository(Entity1).find();

  return (
    <div>dawawawawawawawawawawawawaw
      <h1>Entities</h1>
      <ul>
        {entities.map(entity => (
          <li key={entity.id}>{entity.name}</li>
        ))}
      </ul>
    </div>
  );
}