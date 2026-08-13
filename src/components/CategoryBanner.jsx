import men from "../assets/images/men.png";
import women from "../assets/images/women.png";
import boys from "../assets/images/boys.png";
import girls from "../assets/images/girls.png";
import kids from "../assets/images/kids.png";

const shades = [
  {
    title: "Shirts",
    image: men,
    bg: "bg-pink-200",
  },
  {
    title: "Jeans",
    image: women,
    bg: "bg-yellow-200",
  },
  {
    title: "T-Shirts",
    image: boys,
    bg: "bg-gray-200",
  },
  {
    title: "Formal Wear",
    image: girls,
    bg: "bg-stone-300",
  },
  {
    title: "Ethnic Wear",
    image: kids,
    bg: "bg-blue-300",
  },
];

function CategoryBanner() {
  return (
    <section className="max-w-screen-2xl mx-auto px-6 py-16">
 
      <h2 className="text-4xl font-bold text-center">
        Premium Shades
      </h2>

      <div className="mt-12 grid grid-cols-5 gap-6">

        {shades.map((item) => (

          <div
            key={item.title}
            className={`${item.bg} rounded-full h-36 flex items-center justify-between px-8 hover:scale-105 transition`}
          >
            <div>
              <h3 className="font-semibold">
                {item.title}
              </h3>

              <button className="text-sm mt-2">
                Click Now →
              </button>
            </div>

            <img
              src={item.image}
              className="h-20 object-contain"
            />

          </div>

        ))}

      </div>

    </section>
  );
}

export default CategoryBanner;