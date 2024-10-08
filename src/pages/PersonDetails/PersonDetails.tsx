import { GoBackLink } from "pages/MovieDetails/MovieDetailsGoBackLink/MovieDetailsGoBackLink";
import { useLocation, useParams } from "react-router-dom";
import { PersonDetailsCard } from "./PersonDetailsCard/PersonDetailsCard";
import { useGetPersonDetailsQuery } from "store/person/getPersonDetailsRTK";

const PersonDetails = () => {
  const { personId } = useParams();
  const personDetailsLocation = useLocation();
  const { data: personIdData } = useGetPersonDetailsQuery(personId);
  // console.log("personIdData", personIdData);

  const backLinkHref = personDetailsLocation.state?.from ?? "/movies";
  return (
    <>
      <GoBackLink backLinkHref={backLinkHref} />
      {personIdData && (
        <PersonDetailsCard
          personIdData={personIdData}
          personId={personId}
        ></PersonDetailsCard>
      )}
    </>
  );
};

export default PersonDetails;
