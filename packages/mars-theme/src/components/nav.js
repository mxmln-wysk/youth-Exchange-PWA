import { connect, styled } from "frontity";
import Link from "./link";
import colors from "../helper/colors";

const Nav = ({ state }) => (
  <NavContainer>
    {state.theme.menu.map(([name, link]) => {
      const data = state.source.get(state.router.link);
      const isCurrentPage = data.route === link;

      return (
        <NavItem key={name}>
          <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
            {name}
          </Link>
        </NavItem>
      );
    })}
  </NavContainer>
);

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: auto;
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: ${colors.font};
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 1em; 
  }
`;
