import Repos from "../features/repos/repos";
import Navbar from "../components/navbar";
import Hero from "../components/hero";

const HomePage = () => {
    return(
        <div className='page'>
            <Navbar />
            <Hero />
            <Repos />
        </div>
    )
}

export default HomePage;