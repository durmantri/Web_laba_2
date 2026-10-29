import Header from "./components/Header";
import Contacts from "./components/Contacts";
import About_me from "./components/About_me";
import Work_experience from "./components/Work_exp";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";
import "./App.css";
import ThemeChange from "./components/ThemeChange";

function App() {
  return (
    <div className="min-h-screen bg-emerald-50/40 dark:bg-slate-950 py-10 px-4 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300">
      <div className="space-y-6">
        <Header />
        <div className="max-w-[1200px] mx-auto flex justify-end px-2">
          <ThemeChange />
        </div>
        <div className="max-w-[1200px] mx-auto space-y-6 p-6 rounded-2xl border border-emerald-100 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm transition-colors duration-300">
          <About_me />
          {/*резюме*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Contacts />
            <Skills />
            <Education />
            <Work_experience />
            <ContactForm />
          </div>

          <Reviews />
        </div>

        <Footer />
      </div>
    </div>
  );
}
export default App;
