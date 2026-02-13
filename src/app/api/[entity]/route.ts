/*
import { getDB } from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ entity: string }> }
) {
  const { entity } = await params;
  const db = await getDB();
  const metadata = db.entityMetadatas.find(
    m => m.tableName === entity
  );
  
  if (!metadata) {
    return Response.json({ error: "Entity not found" }, { status: 404 });
  }
  
  const items = await db.getRepository(metadata.target).find();
  return Response.json(items);
}
*/