import "./amish.css"
import { YoutubeEmbed } from "./YoutubeEmbed.js";




export const AboutAmish = () => {
    return (
        <article className="amish-article">
            <div className="sidebar-left">
                <h3>Jerry's Wagon Tours</h3>
                <p>Jerry's wagon tours taking tourist through Amish country.</p>
                <p>Open Monday through Saturday 9 am to 5 pm for the store and 9am to 3pm for the tour.</p>
                <p>Call (931) 829-2433 for more information!</p>
                <p> You simply must go on a wagon ride as Ethridge is the only community that
                    has them in the whole state of Tennessee! </p>
                <img
                    className="amish-article-image"
                    src="https://amishofethridge.com/wp-content/uploads/2021/05/amish-of-ethridge-amish-welcome-center-wagon-tour-scene.jpg"
                    alt="Amish community"
                />
                <a href="https://amishofethridge.com/amish-wagon-tours/" target="_blank" className="cta-button ">Book Now</a>
                <h3>Interesting facts about the Amish</h3>
                <p>Plain Dress and Clothing: One of the most recognizable aspects of the Amish is their traditional and modest clothing.
                    Amish men typically wear plain, dark-colored clothing, and women wear dresses with aprons and a prayer cap or bonnet.
                    The style of dress is a reflection of their commitment to simplicity and separation from the modern world.</p>
                <p>Community-Based Living: Amish families live in close-knit communities that emphasize mutual support and cooperation.
                    They often live near each other to maintain strong social bonds and help one another in times of need.</p>
                <p>Rumspringa: Rumspringa is a period of exploration that Amish teenagers experience in their late teens and early twenties.
                    During this time, they are allowed to experience the outside world and make decisions about whether to join the Amish church and adopt
                    the Amish way of life permanently.</p>
                <p>Distinctive Amish Cuisine: Amish cuisine is known for its hearty and traditional dishes, often made from scratch with simple ingredients.
                    Some popular Amish dishes include shoofly pie, scrapple, chicken potpie, and homemade bread.</p>
                <p>Work Ethic: The Amish have a strong work ethic and emphasize the value of hard work and self-sufficiency.
                    Their traditional agricultural practices and skilled craftsmanship are testaments to their dedication to manual labor.</p>
                <p>Barn Raisings: When an Amish family needs to build a new barn, the entire community comes together to help with the construction
                    in a practice known as a "barn raising." It is a remarkable display of community solidarity and support.</p>
            </div>
            <div className="main-content">
                <h1 className="article-title">The Amish: A Unique Community</h1>

                <div className="article-meta">

                    <blockquote>
                        "We value simplicity and cherish our faith, striving to preserve our way of life for generations to come." - Amish Elder
                    </blockquote>
                </div>
                <div className="App">

                    <h2>Experience Amish Country</h2>
                    <p>Watch our video tour of Amish life and traditions.</p>
                    <YoutubeEmbed embedId="dBbPUPPawi4" />
                </div>
                <div className="home-image-div">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLGKGVqIbuPfOmhG1gvVn74e36Ta2I4hZ8hA&usqp=CAU" alt="amish men standing" className="amish-men-img" />
                    <img src="https://clipart-library.com/images/rTnKpbo6c.jpg" alt="Amish horse and buggy" className="amish-img" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLGKGVqIbuPfOmhG1gvVn74e36Ta2I4hZ8hA&usqp=CAU" alt="amish men standing" className="amish-men-img" />
                </div>
                <div className="article-content">
                    <h2>Amish Lifestyle and Traditions</h2>
                    <p>
                        The Amish are a fascinating and unique community known for their
                        traditional way of life and rejection of modern technologies. With a
                        history dating back to the 18th century, the Amish have managed to
                        preserve their cultural heritage and maintain a distinct identity
                        despite the challenges posed by the modern world.
                    </p>
                    <p>
                        The division of old order Amish in Ethridge is the Swartzentruber.
                        The Swartzentruber line is said to be the most conservative of the Amish in the United States.
                        There are Amish who are a little more open to us "English" and allow tours to stop by and see their farms.
                        We want you to have the best experience when visiting the Amish of Ethridge in Lawrence and Giles counties!
                        We want you to have options to see other beautiful places of interest in Amish country! Of course everywhere that has
                        Amish people is called Amish Country locally so we continue this practice.
                    </p>
                    <p>
                        In Amish communities, you will find horse-drawn buggies instead of
                        cars, and handcrafted goods instead of mass-produced items. The Amish
                        people are skilled craftsmen, known for their woodworking,
                        quilting, and other traditional arts. These crafts not only serve as a
                        source of income but also as a way of preserving their heritage.
                    </p>
                    <p>
                        Despite their traditional ways, the Amish are not completely isolated
                        from the modern world. They interact with the broader society for
                        various reasons, including trade and business. However, they do so
                        while carefully guarding their values and customs.
                    </p>
                    <p>
                        Visiting an Amish community can be an enriching experience, offering
                        insights into a way of life that contrasts sharply with the fast-paced
                        and technology-driven world we are accustomed to. However, it is
                        essential to remember that the Amish value their privacy and may have
                        specific guidelines for visitors to respect their customs and
                        traditions.
                    </p>
                    <p>
                        In conclusion, the Amish are a remarkable community with a strong
                        commitment to their beliefs and way of life. Their dedication to
                        simplicity, faith, and family serves as a reminder of the importance
                        of preserving cultural heritage in an ever-changing world.
                    </p>
                    <h2>Key Features of Amish Lifestyle</h2>
                    <ul>
                        <li>Horse-drawn buggies for transportation</li>
                        <li>Handcrafted furniture and quilts</li>
                        <li>Simple living without modern technology</li>
                        <li>Fresh home grown vegetables, baked and canned goods </li>
                    </ul>

                </div>
            </div>
            {/* <div className="sidebar-right">Sidebar Right Content</div> */}
        </article>
    );
};
