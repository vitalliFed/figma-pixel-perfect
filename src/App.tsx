import ChatPanel from "./components/chatpanel/ChatPanel";
import TopBar from "./components/topbar/TopBar";
import WebsitePreview from "./components/websitepreview/WebsitePreview";
import "./styles/fonts.css";

function App() {
  return (
    <div className="flex h-screen w-[1440px]">
      <div className="w-[460px]">
        <ChatPanel />
      </div>

      <div className="w-[980px] flex flex-col">
        <TopBar />
        <WebsitePreview />
      </div>
    </div>
  );
}
export default App;
