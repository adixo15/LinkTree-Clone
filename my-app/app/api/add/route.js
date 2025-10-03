import clientPromise from "@/lib/mongodb"

export async function POST(request) {
  try {
    const body = await request.json()
    console.log("📩 Received body:", body)

    const client = await clientPromise
    const db = client.db("linktree")
    const collection = db.collection("data")

    const result = await collection.insertOne(body)

    return Response.json({
      success: true,
      message: "Link added successfully!",
      result,
    })
  } catch (error) {
    console.error("❌ API Error:", error)
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    )
  }
}
