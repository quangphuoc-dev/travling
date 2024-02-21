import Banner from "../components/Banner";
import Session1 from "../components/Session1";
import Session2 from "../components/Session2";
import Image1 from "../components/Image1";
import Footer from "../components/Footer";

function App() {
    return (
        <div className=" bg-gradient-to-b from-[#a0d9e8] to-white min-h-screen">
            <div className="container mx-auto ">
                <Banner  title="Start your journey by one click, explore beautiful world!"/>
                <Session1 />
                <Session2 />
                <Image1 />
                <Footer />
            </div>
        </div>
    );
}

export default App;
