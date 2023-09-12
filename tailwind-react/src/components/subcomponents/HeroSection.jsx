
const HeroSection = () => {


  return (
    <section className="bg-cover bg-center bg-aurora bg-no-repeat p-4 border rounded h-96 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mybasetext mb-4">Under the Northern Lights</h2>
        <p className="text-lg mybasetext">
          Experience the magic of cinema under the shimmering Northern Lights at the Kirkenes Film Festival. Join us for a
          mesmerizing journey into the world of film, where storytelling comes to life amidst the breathtaking Arctic
          landscape.
        </p>
        <button className="bg-alecharcoal hover:bg-alepurple mybasetext font-bold p-4 px-4 rounded-full mt-4">
          Buy tickets
        </button>
      </div>
    </section>
  );
};

export default HeroSection;