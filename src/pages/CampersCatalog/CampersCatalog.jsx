import css from "./CampersCatalog.module.css";
import CampersList from "../../components/CampersList/CampersList.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectErrorCampers,
  selectHasCampers,
  selectLoadingCampers,
  selectTotalCampers,
  setCurrentPage,
} from "../../redux/campersSlice.js";
import Container from "../../components/Shared/Container/Container.jsx";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campersOps.js";
import { selectFilters } from "../../redux/filtersSlice.js";
import CampersFilters from "../../components/CampersFilters/CampersFilters.jsx";
import { getFilterParams } from "../../Utills.js";
import Button from "../../components/Shared/Button/Button.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import { is } from "date-fns/locale";

const CampersCatalog = () => {
  const dispatch = useDispatch();
  const totalCampers = useSelector(selectTotalCampers);
  const currentPage = useSelector(selectCurrentPage);
  const isLoading = useSelector(selectLoadingCampers);
  const isError = useSelector(selectErrorCampers);
  const filters = useSelector(selectFilters);
  const hasCampers = useSelector(selectHasCampers);
  const hasMore = totalCampers > currentPage * 4;

  // Fetch campers on initial render
  useEffect(() => {
    if (!hasCampers) {
      dispatch(fetchCampers(getFilterParams(filters, currentPage)));
    }
  }, [dispatch, currentPage, filters, hasCampers]);

  const handleLoadMore = () => {
    dispatch(setCurrentPage(currentPage + 1));
    dispatch(fetchCampers(getFilterParams(filters, currentPage + 1)));
  };

  return (
    <Container>
      {isError && <h1>An error occurred while fetching the campers.</h1>}
      <main>
        <div className={css.campersCatalog}>
          <div className={css.sidebar}>
            <CampersFilters />
          </div>
          <div className={css.content}>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <CampersList />
                {hasMore && (
                  <Button
                    onClick={handleLoadMore}
                    text="Load more"
                    className={css.loadMoreButton}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </main>
    </Container>
  );
};

export default CampersCatalog;
