import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import NotifiedForm from "./components/NotifiedForm/NotifiedForm";
import Proposition from "./components/Proposition/Proposition";
import Header from "./layouts/Header/Header";

function App() {
  return (
    <main>
      <Header/>
      <Intro/>
      <About/>
      <Proposition/>
      <NotifiedForm/>
    </main>
  );
}

export default App;
