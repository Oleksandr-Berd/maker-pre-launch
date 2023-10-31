import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import Proposition from "./components/Proposition/Proposition";
import Header from "./layouts/Header/Header";

function App() {
  return (
    <main>
      <Header/>
      <Intro/>
      <About/>
      <Proposition/>
    </main>
  );
}

export default App;
