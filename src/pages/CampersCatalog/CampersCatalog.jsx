import css from "./CampersCatalog.module.css"
import CampersList from "../../components/CampersList/CampersList.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentPage, selectHasCampers} from "../../redux/campersSlice.js";
import Container from "../../components/Shared/Container/Container.jsx";
import {useEffect} from "react";
import {fetchCampers} from "../../redux/campersOps.js";
import {selectFilters} from "../../redux/filtersSlice.js";
import CampersFilters from "../../components/CampersFilters/CampersFilters.jsx";
import {getFilterParams} from "../../Utills.js";

const CampersCatalog = () => {
    const dispatch = useDispatch();
    // const totalCampers = useSelector(selectTotalCampers);
    const currentPage = useSelector(selectCurrentPage);
    // const isLoading = useSelector(selectLoadingCampers);
    // const isError = useSelector(selectErrorCampers);
    const filters = useSelector(selectFilters);
    const hasCampers = useSelector(selectHasCampers);
    // const hasMore = totalCampers > currentPage * 4;

    useEffect(() => {
        if (!hasCampers) {
            dispatch(fetchCampers(getFilterParams(filters, currentPage)));
        }
    }, [dispatch, currentPage, filters, hasCampers]);

    return (
        <Container>
            <div className={css.campersCatalog}>
                <div className={css.sidebar}>
                    <CampersFilters/>
                </div>
                <div className={css.content}>
                    <CampersList/>
                </div>
            </div>
        </Container>
    )
        ;
}

export default CampersCatalog