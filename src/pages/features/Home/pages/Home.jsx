import AdvancedTech from "../components/sections/AdvancedTech"
import Contact from "../components/sections/Contact"
import Features from "../components/sections/Features"
import Hero from "../components/sections/Hero"

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