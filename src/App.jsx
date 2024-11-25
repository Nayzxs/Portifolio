
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Me } from "./pages/Me/Me.jsx"; 
import { About } from "./pages/About/About.jsx"
import { Experience } from "./pages/Experience/Experience.jsx";
import { Contact } from "./components/Contact/Contact.jsx"

function App() {
  return(
    <div className={styles.App}>
      <Navbar/>
      <Me />
      <About/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
