import Navbar from "../NavBar";
import Introduction from "../Introduction";
import IntroFooter from "../IntroFooter";
import ParticlesComponent from "../ParticlesAnimation/particles";



export default function index() {
    return (
        <div className="h-screen">
            <ParticlesComponent id="particles" color="141516" />
            <Navbar />
            <Introduction />
            <IntroFooter />
        </div>
    )
}

