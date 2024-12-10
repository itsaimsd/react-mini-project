import "./App.css";
import ContactForm from "./component/ContactForm/ContactForm";
import ContactHeader from "./component/ContactHeader/ContactHeader";
import Navigation from "./component/Navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <ContactHeader />
      <ContactForm />
    </div>
  );
}

export default App;
