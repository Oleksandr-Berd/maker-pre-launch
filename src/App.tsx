import { ToastContainer, toast } from "react-toastify";

import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import NotifiedForm from "./components/NotifiedForm/NotifiedForm";
import Proposition from "./components/Proposition/Proposition";
import Header from "./layouts/Header/Header";

function App() {
  const formSubmit = (email: string) => {
if (email.length > 0) {
  toast.success(`You will be notified on the email ${email} ASAP`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
} else {
  toast.error(`"Oops! Please add your email"`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
}
  };

  return (
    <main>
      <ToastContainer />
      <Header />
      <Intro />
      <About />
      <Proposition />
      <NotifiedForm formSubmit={formSubmit}/>
    </main>
  );
}

export default App;
