import TitleBar from "./TitleBar";
import SideNav from "./SideNav";
import StatusBar from "./StatusBar";

export default function WindowFrame({ children }) {
  return (
    <div className="window">
      <TitleBar />
      <div className="window-body">
        <SideNav />
        {children}
      </div>
      <StatusBar />
    </div>
  );
}
