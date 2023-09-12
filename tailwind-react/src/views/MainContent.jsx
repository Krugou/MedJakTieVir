import Chat from "../components/Chat";
import EventsSection from "../components/EventsSection";
import FestivalSection from "../components/FestivalSection";
import HeroSection from "../components/HeroSection";
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