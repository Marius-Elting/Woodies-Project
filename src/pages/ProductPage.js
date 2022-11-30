import { useParams } from "react-router-dom";
import { useState } from "react";

function ProductPage() {
    let params = useParams();
    const [picLink, setpicLink] = useState(params.name);
    console.log(params);
    let imgsrc;
    // let desc;

    console.log(`./Bilder/${picLink}.png`);
    return (
        <div>
            <img src={`"./Bilder/${picLink}.png`} alt="Tisch"></img>
            <p>Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it.</p>
        </div>
    );
}

export default ProductPage;