import { Link } from 'react-router-dom';
import { GoBackLinkSpan } from './MovieDetailsGoBackLink.styled';

export const GoBackLink = ({ backLinkHref }:{backLinkHref:{}}) => {
  return (
    <GoBackLinkSpan>
      <Link to={backLinkHref}>Go back</Link>
    </GoBackLinkSpan>
  );
};
