import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const handle = params.handle;
  const client = await clientPromise;
  const db = client.db("linktree");
  const collection = db.collection("data");

  const item = await collection.findOne({ handle });

  if (!item) return notFound();

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-purple-800 via-purple-600 to-purple-400 justify-center items-start py-10">
      <div className="photo flex flex-col items-center gap-6">
        {/* Profile Pic */}
        {item.pic ? (
          <img
            src={item.pic}
            alt={`${item.handle} profile`}
            className="w-32 h-32 rounded-full object-cover shadow-2xl border-4 border-white transform transition duration-700 hover:scale-105"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-purple-300 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
            {item.handle[0].toUpperCase()}
          </div>
        )}

        {/* Handle */}
        <span className="font-bold text-3xl text-white">{`@${item.handle}`}</span>

        {/* Description */}
        {item.desc && (
          <span className="desc w-96 text-center text-white/90">
            {item.desc}
          </span>
        )}

        {/* Modern Link Boxes */}
        <div className="links w-full max-w-sm mt-8 flex flex-col gap-4 px-2">
          {item.links?.map((linkItem, index) => {
            if (!linkItem.link) return null;

            return (
              <Link
                key={index}
                href={linkItem.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="w-full py-3 rounded-lg bg-white text-gray-800 font-medium text-lg text-center 
                             shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl 
                             hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white cursor-pointer"
                >
                  {linkItem.linktext || "Visit"}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
