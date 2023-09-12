import Chat from "./subcomponents/Chat";
import EventsSection from "./subcomponents/EventsSection";
import FestivalSection from "./subcomponents/FestivalSection";
import HeroSection from "./subcomponents/HeroSection";
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