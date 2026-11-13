import WindowFrame from "./components/layout/WindowFrame";
import MainContent from "./components/layout/MainContent";
import ClosingSection from "./components/sections/ClosingSection";

export default function App() {
  return (
    <>
      <WindowFrame>
        <MainContent />
      </WindowFrame>
      <ClosingSection />
    </>
  );
}
