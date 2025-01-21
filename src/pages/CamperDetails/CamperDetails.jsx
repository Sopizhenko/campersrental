import {useEffect} from 'react';
import css from "./CamperDetails.module.css";
import {NavLink, Outlet, useNavigate, useParams} from "react-router-dom";
import Heading from "../../components/Shared/Heading/Heading";
import Container from "../../components/Shared/Container/Container";
import RatingSummary from "../../components/Shared/RatingSummary/RatingSummary";
import Location from "../../components/Shared/Location/Location";
import Price from "../../components/Shared/Price/Price";
import CamperGallery from "../../components/CamperGallery/CamperGallery";
import {useDispatch, useSelector} from "react-redux";
import {fetchCamper} from "../../redux/campersOps.js";
import {
    selectErrorCampers,
    selectLoadingCampers,
    selectSelectedCamper,
} from "../../redux/campersSlice.js";
import Text from "../../components/Shared/Text/Text.jsx";
import BookingForm from "../../components/BookingForm/BookingForm.jsx";

const CamperDetails = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {camperId} = useParams();

    const camper = useSelector(selectSelectedCamper);
    const isLoading = useSelector(selectLoadingCampers);
    const isError = useSelector(selectErrorCampers);

    const hasReviews = camper?.reviews?.length > 0;
    const totalReviews = camper?.reviews?.length;

    useEffect(() => {
        dispatch(fetchCamper(camperId));
    }, [dispatch, camperId]);

    useEffect(() => {
        // Redirect to 'features' route on initial render only if no nested route is active
        if (window.location.pathname === `/catalog/${camperId}`) {
            navigate("features", {replace: true});
        }
    }, [navigate, camperId]);

    if (isLoading) return <h1>Loading...</h1>;

    if (isError) return <h1>An error occurred while fetching the camper details.</h1>;

    if (!camper) return <h1>Camper not found or loading...</h1>;

    return (
        <Container>
            <main>
                <Heading>{camper.name}</Heading>

                <div className={css.ratingLine}>
                    <RatingSummary rating={camper.rating} hasReviews={hasReviews} totalReviews={totalReviews}/>
                    <Location camperLocation={camper.location}/>
                </div>

                <div className={css.priceLine}>
                    <Price price={camper.price}/>
                </div>

                <CamperGallery/>

                <div className={css.camperDescription}>
                    <Text>{camper.description}</Text>
                </div>

                <ul className={css.camperDetailsTabs}>
                    <li className={css.tab}>
                        <NavLink
                            to="features"
                            state={camper.id}
                            className={({isActive}) => (isActive ? css.activeTab : "")}
                        >
                            Features
                        </NavLink>
                    </li>
                    <li className={css.tab}>
                        <NavLink
                            to="reviews"
                            state={camper.id}
                            className={({isActive}) => (isActive ? css.activeTab : "")}
                        >
                            Reviews
                        </NavLink>
                    </li>
                </ul>

                <div className={css.tabContent}>
                    <div className={css.tabContent_left}>
                        <Outlet/>
                    </div>
                    <div className={css.tabContent_right}>
                        <BookingForm/>
                    </div>
                </div>
            </main>
        </Container>
    );
};

export default CamperDetails;
