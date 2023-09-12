import Chat from "./Chat";
import EventsSection from "./EventsSection";
import FestivalSection from "./FestivalSection";
import HeroSection from "./HeroSection";
const MainContent = () => {


  return (
    <main className="bg-alepurple container mx-auto p-4">
      <HeroSection />
      <FestivalSection />
      <EventsSection />
      <Chat />
    </main>
  );
};

export default MainContent;