import WindowFrame from "./components/layout/WindowFrame";
import MainContent from "./components/layout/MainContent";
import ClosingSection from "./components/sections/ClosingSection";
import ChatWidget from "./components/ui/ChatWidget";

export default function App() {
  return (
    <>
      <WindowFrame>
        <MainContent />
      </WindowFrame>
      <ClosingSection />
      <ChatWidget />
    </>
  );
}
