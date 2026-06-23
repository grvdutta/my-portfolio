import design1 from "../assets/gallery/design1.png";
import design2 from "../assets/gallery/design2.png";
import design3 from "../assets/gallery/design3.png";
import design4 from "../assets/gallery/design4.png";
import design5 from "../assets/gallery/design5.png";
import design6 from "../assets/gallery/design6.jpeg";;

const galleryItems = [
   {
      image: design5,
      title: "YouTube Gaming Thumbnail",
      category: "Thumbnail"
      
    },
    {
      image: design2,
      title: "YouTube Thumbnail",
      category: "Thumbnail"
    },
    {
      image: design3,
      title: "YouTube Thumbnail",
      category: "Thumbnail"
    },
    {
      image: design4,
      title: "Marketing Creative",
      category: "Advertisement"
    },
    {
      image: design1,
      title: "Food Banner",
      category: "Advertisement"
    },
    {
      image: design6,
      title: "Marketing Creative",
      category: "Advertisement"
    }
];

function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center mb-4">
        Design <span className="text-cyan-400">Gallery</span>
      </h2>

      <p className="text-center text-gray-400 mb-14 max-w-2xl mx-auto">
        A collection of advertisements, thumbnails, social media creatives,
        posters, and visual concepts.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="group bg-[#111] border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-contain transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-cyan-400 text-sm mt-2">
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;