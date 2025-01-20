import css from "./Price.module.css"
import {useSelector} from "react-redux";
import {selectSelectedCamperPrice} from "../../../redux/campersSlice.js";

const Price = () => {
    const price = useSelector(selectSelectedCamperPrice);

    const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
        useGrouping: false,
    }).format(price);

    return <span className={css.price}>{formattedPrice}</span>;
}

export default Price