import "./app.scss"
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section id="Home">
      <Navbar />
    </section>
    <section id="Services">parallax</section>
    <section>services</section>
    <section id="Portfolio">parallax</section>
    <section>portfolio1</section>
    <section>portfolio2</section>
    <section>portfolio3</section>
    <section id="Contact">contact</section>
  </div>;
};

export default App;

