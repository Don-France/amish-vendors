import "./home.css"
import amishHorseAndBuggySound from "./amishhorseandbuggy.wav"
import { useRef, useState } from "react";


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
            <h1>Welcome to My Website!</h1>
            <div className="home-image-div">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLGKGVqIbuPfOmhG1gvVn74e36Ta2I4hZ8hA&usqp=CAU" alt="amish men standing" className="amish-men-img" />
                <img src="https://clipart-library.com/images/rTnKpbo6c.jpg" alt="Amish horse and buggy" className="amish-img" onMouseOver={playSoundOnHover} onMouseOut={stopSoundOnMouseOut} />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLGKGVqIbuPfOmhG1gvVn74e36Ta2I4hZ8hA&usqp=CAU" alt="amish men standing" className="amish-men-img" />
            </div>
            <audio
                ref={audioRef}
                src={amishHorseAndBuggySound}
                onLoadedData={handleAudioLoadedData} />
            <article className="amish-article">
                <p key="paragraph1" className="amish-paragrapgh">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu
                    mauris ut turpis consequat laoreet. Nullam eget dolor vitae nunc
                    aliquet feugiat. Sed eget posuere nisl. Vivamus eleifend turpis
                    vitae sapien aliquet, eget sagittis erat congue.
                </p>
                <p key="paragraph2" className="amish-paragrapgh">
                    Nulla facilisi. Nulla tempus cursus scelerisque. Fusce vel quam sit
                    amet lectus eleifend consectetur. Pellentesque convallis tempor
                    velit a pellentesque. Aenean eu purus sit amet odio rhoncus
                    volutpat eu et sapien.
                </p>
            </article>
        </div>
    );










};