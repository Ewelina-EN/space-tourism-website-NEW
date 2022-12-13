import Homepage from "./pages/homepage";
import { Nav } from "./pages/navigation";
import GlobalStyle from "./style/globalStyle";

function App() {
  return (
    <>
      <Nav/>
      <GlobalStyle />
      <Homepage />
    </>
  );
}

export default App;
