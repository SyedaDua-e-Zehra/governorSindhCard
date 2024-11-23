import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-8">
        Governor Sindh Website
      </h1>

      {/* First Row */}
      <div className="flex justify-center gap-6 mb-6">
        <div className="card">
          
          <Image
            src="/image_website.jpg" 
            alt="Card 1 Image"
            width={300}
            height={200}
            className="rounded"
          />
          <h2 className="card-title">Card 1</h2>
          
        </div>
        <div className="card">
          
          <Image
            src="/imageWebsite2.jpeg"
            alt="Card 2 Image"
            width={300}
            height={200}
            className="rounded"
          />
          <h2 className="card-title">Card 2</h2>
         
        </div>
      </div>

      {/* Second Row */}
      <div className="flex justify-center gap-6">
        <div className="card">
          <Image
            src="/computer.jpg"
            alt="Card 3 Image"
            width={300}
            height={200}
            className="rounded"
          />
          <h2 className="card-title">Card 3</h2>
        
        </div>
        <div className="card">
          <Image
            src="/metaverse.jpeg"
            alt="Card 4 Image"
            width={300}
            height={200}
            className="rounded"
          />
          <h2 className="card-title">Card 4</h2>
          
        </div>
        <div className="card">
          <Image
            src="/nextjs.jpeg"
            alt="Card 5 Image"
            width={300}
            height={200}
            className="rounded"
          />
          <h2 className="card-title">Card 5</h2>
        
        </div>
      </div>
    </div>
  );
}
