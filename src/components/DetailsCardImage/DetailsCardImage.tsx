import { useState } from "react";
import { CardImageImg, CardImageWrapper } from "./DetailsCardImage.styled";
import { Loader } from "components/Loader/Loader";
import { BASE_POSTER_URL, PLACEHOLDER } from "utils/constants";

type DetailsCardImageProps = {
  imageDataKey: string | null;
  imagePlaceholderkey: string;
};
export const DetailsCardImage = ({
  imageDataKey,
  imagePlaceholderkey,
}: DetailsCardImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <CardImageWrapper>
      {isLoading && <Loader />}
      <CardImageImg
        src={`${
          imageDataKey
            ? BASE_POSTER_URL + imageDataKey
            : PLACEHOLDER + "?text=" + imagePlaceholderkey
        }`}
        alt="get"
        onLoad={handleImageLoad}
        style={{ display: isLoading ? "none" : "block" }}
      />
    </CardImageWrapper>
  );
};

////так сделал потому что ответы от бекенда на запрос детальной информации на актера и на запрос детальной информации о фильме
// выдают разные ключи к доступу к изображению (названия свойств отличаются),и чтобы сделать переиспользуемыс компонент пришлось такое написать
