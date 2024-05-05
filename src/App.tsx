import Header from "./components/Header";
import "./App.css";
import Float from "./components/Float";
import Main from "./sections/Main";
import Services from "./sections/Services";
import HowItWorks from "./sections/HowItWorks";
import AboutUs from "./sections/AboutUs";
import MyFooter from "./components/MyFooter";

function App() {
 

  return (
    <>
      <Header />
      <main className="flex flex-col gap-12 mt-12">
        <Main/>
        <Services/>
        <HowItWorks/>
        <AboutUs/>
      </main>
     <MyFooter/>
      <Float />
    </>
  );
}

export default App;
