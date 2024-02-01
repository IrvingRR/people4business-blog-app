import { LinkButton } from "../components/common";
import { pathRoutes } from "../router/routes";
import { Actions, NotFoundContainer } from "../styled/pages/notFound";

export const NotFound = () => {
  return (
    <NotFoundContainer>
        <h2>Not found</h2>
        <p>The page you are looking for was not found</p>
        <Actions>
            <LinkButton label='Return to home' to={pathRoutes.entries}/>
        </Actions>
    </NotFoundContainer>
  );
};