import { NavButton } from "./PageNavButton/PageNavButton";
import {
  PageIndexContainer,
  PageNavButtonsContainer,
} from "./PageNavButtonsWrapper.styled";

type PageNavButtonsWrapperProps = {
  page: number;
  handlePageChange: (arg: number) => void;
  totalPages: number;
};

export const PageNavButtonsWrapper = ({
  page,
  handlePageChange,
  totalPages,
}: PageNavButtonsWrapperProps) => {
  return (
    <PageNavButtonsContainer>
      <NavButton
        disabled={page === 1}
        label="Prev page"
        icon="left_arrow"
        ///////////////////////////// вот тут я добавил reverse следующей строкой потому что TS ругался что я его не передаю.
        /////////////////////////////Но надеюсь это не сломает логику.
        reverse
        onClick={() => handlePageChange(page - 1)}
      ></NavButton>
      <PageIndexContainer>{page}</PageIndexContainer>
      <NavButton
        disabled={totalPages === page}
        label="Next page"
        icon="right_arrow"
        reverse={true}
        onClick={() => handlePageChange(page + 1)}
      ></NavButton>
    </PageNavButtonsContainer>
  );
};
