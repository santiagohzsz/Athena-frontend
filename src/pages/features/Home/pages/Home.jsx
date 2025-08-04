import AdvancedTech from "../components/AdvancedTech"
import Contact from "../components/Contact"
import Features from "../components/Features"
import Hero from "../components/Hero"

function Home() {
    return (
        <>
            <div className="home-container">
                <Hero />
                <Features />
                <AdvancedTech />
                <Contact />
            </div>
        </>
    )
}

export default Home