import css from "./Price.module.css"

const Price = ({price}) => {

    const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
        useGrouping: false,
    }).format(price);

    return <span className={css.price}>{formattedPrice}</span>;
}

export default Price