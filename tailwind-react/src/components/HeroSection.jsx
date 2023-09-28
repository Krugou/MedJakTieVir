import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();


  return (
    <section className="bg-cover bg-center bg-aurora bg-no-repeat p-4 border rounded h-96 md:h-auto py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-md md:text-2xl lg:text-5xl font-bold mybasetext mb-4">Under the Northern Lights</h2>
        <p className="text-sm md:text-base lg:text-lg mybasetext">
          Experience the magic of cinema under the shimmering Northern Lights at the Kirkenes Film Festival. Join us for a
          mesmerizing journey into the world of film, where storytelling comes to life amidst the breathtaking Arctic
          landscape.
        </p>
        <button className="nav-link mybasetext mybutton py-2 px-4 rounded-md"
          onClick={() => navigate('/tickets')}>
          Buy tickets
        </button>
      </div>
    </section>


  );
};

export default HeroSection;