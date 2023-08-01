import "./home.css"
import amishHorseAndBuggySound from "./amishhorseandbuggy.wav"
import { useRef, useState } from "react";
import { Weather } from "./Weather.js";

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




    return (
        <div>
            <div>
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
            <article className="home-amish-article">
                <p key="paragraph1" >
                    Welcome, we offer a comprehensive listing of Amish families in our community that offer some of their goods for sale to the public.
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
                    <li>Do bring cash only.</li>
                    <li>Do barter with them if you'd like but they have lots of people willing to pay asking price.</li>
                    <li>Do feel free to pass them if you encounter an Amish buggy on the road but drive slowly and wave as you pass.</li>
                    <li>Don't take pictures of them or their animals.</li>
                    <li>Don't offer to show them a picture unless it is hand drawn.</li>
                    <li>Don't disturb them on Sunday, that is their day of worship and rest.</li>
                </ul>
            </div>
        </div>
    );










};