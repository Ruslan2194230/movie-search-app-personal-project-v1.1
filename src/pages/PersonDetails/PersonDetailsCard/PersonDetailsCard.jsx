import { DetailsCardImage } from "components/DetailsCardImage/DetailsCardImage";
import {
  PersonCardDescr,
  PersonCardSubTitle,
  PersonCardTitle,
  PersonCardWrapper,
} from "./PersonDetailsCard.module";
import { useState } from "react";
import { MovieList } from "components/MovieList/MovieList";
import { useGetPersonMovieDetailsQuery } from "store/person/getPersonDetailsRTK";

export const PersonDetailsCard = ({ personIdData, personId }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const bioSentences = personIdData.biography.split(". ");
  const bioPreview =
    bioSentences.slice(0, 5).join(". ") +
    (bioSentences.length > 5 ? "..." : "");
  const { data: personMoviesData } = useGetPersonMovieDetailsQuery(personId);

  return (
    <>
      <PersonCardWrapper>
        <DetailsCardImage
          imageDataKey={personIdData.profile_path}
          imagePlaceholderkey={personIdData.name}
        />
        <div>
          <PersonCardTitle>{personIdData.name}</PersonCardTitle>
          <PersonCardSubTitle>Birthday</PersonCardSubTitle>
          <PersonCardDescr>{personIdData.birthday}</PersonCardDescr>
          <PersonCardSubTitle>Popularity</PersonCardSubTitle>
          <PersonCardDescr>
            {Math.round(personIdData.popularity)}
          </PersonCardDescr>
          <PersonCardSubTitle>Biography</PersonCardSubTitle>
          <PersonCardDescr>
            {isExpanded ? personIdData.biography : bioPreview}
            {bioSentences.length > 5 && (
              <button onClick={toggleExpand}>
                {isExpanded ? "Show less" : "Show more"}
              </button>
            )}
          </PersonCardDescr>
          <PersonCardSubTitle>Place of birth</PersonCardSubTitle>
          <PersonCardDescr>{personIdData.place_of_birth}</PersonCardDescr>
        </div>
      </PersonCardWrapper>

      {personMoviesData && (
        <MovieList movies={personMoviesData.cast}></MovieList>
      )}
    </>
  );
};
