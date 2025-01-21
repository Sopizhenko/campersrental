import css from "./Hero.module.css"
import hero_jpg from "../../assets/images/hero.jpg";
import hero_jpg2x from "../../assets/images/hero@2x.jpg";
import hero_webp1x from "../../assets/images/hero.webp";
import hero_webp2x from "../../assets/images/hero@2x.webp";
import hero_avif1x from "../../assets/images/hero.avif";
import hero_avif2x from "../../assets/images/hero@2x.avif";
import Button from "../Shared/Button/Button";
import Container from "../Shared/Container/Container.jsx";
import {useNavigate} from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/catalog')
    }

    return (
        <div className={css.hero}>
            <picture className={css.heroImage}>
                <source srcSet={`${hero_avif1x} 1x, ${hero_avif2x} 2x`} type="image/avif"/>
                <source srcSet={`${hero_webp1x} 1x, ${hero_webp2x} 2x`} type="image/webp"/>
                <img src={hero_jpg} srcSet={`${hero_jpg} 1x, ${hero_jpg2x} 2x`} alt="Hero" className={css.heroImage}/>
            </picture>
            <div className={css.heroContent}>
                <Container>
                    <h1 className={css.heroTitle}>Campers of your dreams</h1>
                    <p className={css.heroText}>Rent a truck for your next adventure</p>
                    <Button onClick={handleClick} type='button' text='Book now' className={css.heroButton}/>
                </Container>
            </div>
        </div>
    );
}

export default Hero