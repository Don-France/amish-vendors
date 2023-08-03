import "./home.css"
import amishHorseAndBuggySound from "./amishhorseandbuggy.wav"
import { useRef, useState } from "react";
import { Weather } from "./Weather.js";
import { Maps } from "./Maps.js";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";
import image10 from "../images/image10.jpg";
import image11 from "../images/image11.jpg";
import image12 from "../images/image12.jpg";

export const HomePage = () => {


    const audioRef = useRef(null);
    const [audioLoaded, setAudioLoaded] = useState(false);
    const playSoundOnHover = () => {
        if (audioLoaded) {
            audioRef.current.play();
        }
    };

    const stopSoundOnMouseOut = () => {
        if (audioLoaded) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    const handleAudioLoadedData = () => {
        setAudioLoaded(true);
    };

    const carouselImages = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
    ];


    return (
        <div className="home-container">

            <div className="weather-container">
                <Weather />

            </div>
            <h1 className="home-h1">Welcome to Zeke and Mose!</h1>

            <div className="home-image-div">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLGKGVqIbuPfOmhG1gvVn74e36Ta2I4hZ8hA&usqp=CAU" alt="amish men standing" className="amish-men-img" />
                <img src="https://clipart-library.com/images/rTnKpbo6c.jpg" alt="Amish horse and buggy" className="amish-img" onMouseOver={playSoundOnHover} onMouseOut={stopSoundOnMouseOut} />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLGKGVqIbuPfOmhG1gvVn74e36Ta2I4hZ8hA&usqp=CAU" alt="amish men standing" className="amish-men-img" />
            </div>
            <audio
                ref={audioRef}
                src={amishHorseAndBuggySound}
                onLoadedData={handleAudioLoadedData} />
            <div className="carousel-with-content-container">
                {/* Left Box */}
                <div className="content-box">
                    <p>Bacon ipsum dolor amet porchetta sausage shankle ham.
                        Meatball jowl ground round biltong pork loin flank burgdoggen.
                        Boudin spare ribs tongue cow, cupim alcatra ham short ribs porchetta flank kevin pastrami frankfurter drumstick.
                        Strip steak porchetta landjaeger pancetta meatball tongue pork chop prosciutto burgdoggen.
                        Tri-tip cupim chislic prosciutto tenderloin chicken. Bacon ribeye meatball, sausage beef turducken rump pork belly short loin.</p>
                    <p>Bacon ipsum dolor amet porchetta sausage shankle ham.
                        Meatball jowl ground round biltong pork loin flank burgdoggen.
                        Boudin spare ribs tongue cow, cupim alcatra ham short ribs porchetta flank kevin pastrami frankfurter drumstick.
                        Strip steak porchetta landjaeger pancetta meatball tongue pork chop prosciutto burgdoggen.
                        Tri-tip cupim chislic prosciutto tenderloin chicken. Bacon ribeye meatball, sausage beef turducken rump pork belly short loin.</p>
                </div>

                {/* Carousel */}
                <div className="carousel-container">
                    <Carousel autoPlay showThumbs={false} infiniteLoop>
                        {carouselImages.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Carousel Image ${index + 1}`} />
                            </div>
                        ))}
                    </Carousel>
                </div>

                {/* Right Box */}
                <div className="content-box">
                    <p>Bacon ipsum dolor amet porchetta sausage shankle ham.
                        Meatball jowl ground round biltong pork loin flank burgdoggen.
                        Boudin spare ribs tongue cow, cupim alcatra ham short ribs porchetta flank kevin pastrami frankfurter drumstick.
                        Strip steak porchetta landjaeger pancetta meatball tongue pork chop prosciutto burgdoggen.
                        Tri-tip cupim chislic prosciutto tenderloin chicken. Bacon ribeye meatball, sausage beef turducken rump pork belly short loin.</p>
                    <p>Bacon ipsum dolor amet porchetta sausage shankle ham.
                        Meatball jowl ground round biltong pork loin flank burgdoggen.
                        Boudin spare ribs tongue cow, cupim alcatra ham short ribs porchetta flank kevin pastrami frankfurter drumstick.
                        Strip steak porchetta landjaeger pancetta meatball tongue pork chop prosciutto burgdoggen.
                        Tri-tip cupim chislic prosciutto tenderloin chicken. Bacon ribeye meatball, sausage beef turducken rump pork belly short loin.</p>
                </div>
            </div>
            <article className="home-amish-article">
                <p key="paragraph1" >
                    Welcome, we are trying to make finding products the Amish sale by bringing it to the digital age and so offer a comprehensive listing of Amish families in our community that offer some of their goods for sale to the public.
                    Our website aims to promote and support the Amish way of life by providing a platform for local vendors to showcase their products and services.
                    Please note that the information provided here is for general informational purposes and does not imply any specific endorsement or verification.
                </p>
                <p key="paragraph2" >
                    By patronizing the Amish vendors listed in this directory, you are contributing to the preservation of Amish culture and traditions.
                    Your support encourages local entrepreneurship and sustains the unique way of life within our community.
                </p>
                <p key="paragraph3" >
                    The Swartzentruber Amish are the best-known for old world way of living and one of the largest and most conservative subgroups of
                    Old Order Amish.
                    Swartzentruber Amish are considered a subgroup of the Old Order Amish, although they do not fellowship or intermarry
                    with more liberal Old Order Amish. They speak Pennsylvania German as their mother tongue as well as English (with outsiders).
                </p>
            </article>
            <div className="additional-info">
                <h2>Do's and dont's when interacting with the Amish: </h2>
                <ul>
                    <li>Do enjoy the experience of the rich culture and heritage of the Amish way of life.</li>
                    <li>Do bring cash only they have no way to process credit cards and no interest in it.</li>
                    <li>Do barter with them if you'd like but lots of people willing to pay asking price.</li>
                    <li>Do feel free to pass them if you encounter an Amish buggy on the road but drive slowly.</li>
                    <li>Don't take pictures of them or their animals they believe it will steal their soul.</li>
                    <li>Don't offer to show them a picture unless it is hand drawn.</li>
                    <li>Don't disturb them on Sunday, that is their day of worship and rest.</li>
                </ul>
            </div>
            <Maps googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY} />


        </div>
    );

};