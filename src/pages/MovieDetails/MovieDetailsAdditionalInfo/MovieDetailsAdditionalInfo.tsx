// import { MovieDetailsAdditionalInfo } from "./MovieDetailsAdditionaInfoInterface/MovieDetailsAdditionalInfoInterface";
import { MovieDetailsAdditionalInfoInterface } from "./MovieDetailsAdditionaInfoInterface/MovieDetailsAdditionalInfoInterface";
import { AdditionalInfoContainer } from "./MovieDetailsAdditionalInfo.styled";

export const AdditionalInfo = () => {
  return (
    <AdditionalInfoContainer>
      <h2>Additional information</h2>
      <MovieDetailsAdditionalInfoInterface></MovieDetailsAdditionalInfoInterface>
    </AdditionalInfoContainer>
  );
};
