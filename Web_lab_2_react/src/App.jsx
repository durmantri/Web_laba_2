import Header from "./components/Header";
import Contacts from "./components/Contacts";
import About_me from "./components/About_me";
import Work_experience from "./components/Work_exp";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-emerald-50/40 py-10 px-4 text-slate-800 font-sans">
      <div className=" space-y-6">
        <Header />
        <div className=" max-w-[1200px] mx-auto space-y-6  p-6 rounded-2xl border border-emerald-100">
          <About_me />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Contacts />
            <Skills />
            <Work_experience />
            <Education />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
