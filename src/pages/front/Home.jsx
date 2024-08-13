import Hero from "../../components/frontComponents/Hero.jsx";
import About from "../../components/frontComponents/About.jsx";
import Help from "../../components/frontComponents/Help.jsx";
import Connection from "../../components/frontComponents/Connection.jsx";
import Event from "../../components/frontComponents/Event.jsx";

const Home = () => {
    return (
        <section>
            <Hero />
            <About />
            <Connection />
            <Help />
            <Event />
        </section>
    );
};

export default Home;