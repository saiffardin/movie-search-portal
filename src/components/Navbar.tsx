import Nav from "react-bootstrap/Nav";
import { PATHS } from "@constants/paths";
import { NavDropdown } from "react-bootstrap";
import NavbarBST from "react-bootstrap/Navbar";
import { IGenre } from "@api/genre-list/types";
import Container from "react-bootstrap/Container";
import { useLocation, useNavigate } from "react-router";

interface Props {
  genres: IGenre[];
}

const Navbar = ({ genres }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLight = location.pathname === PATHS.HOME;

  const navBg = isLight ? "light" : "dark";

  const handleRouteChange = (route: string) => {
    navigate(route);
  };

  return (
    <div className="sticky-top">
      <NavbarBST
        collapseOnSelect
        expand="lg"
        bg={isLight ? "light" : "dark"}
        variant={navBg}
      >
        <Container>
          <NavbarBST.Brand>Cefalo Movie Portal</NavbarBST.Brand>
          <NavbarBST.Toggle aria-controls="responsive-navbar-nav" />
          <NavbarBST.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                className="me-2"
                onClick={() => handleRouteChange(PATHS.HOME)}
              >
                Home
              </Nav.Link>

              <Nav.Link
                className="me-2"
                onClick={() => handleRouteChange(PATHS.WISHLIST)}
              >
                Wishlist
              </Nav.Link>

              <NavDropdown
                className="me-2"
                title="Genre List"
                disabled={!genres?.length}
              >
                <div style={{ height: "200px", overflowY: "scroll" }}>
                  {genres?.map((genre) => (
                    <NavDropdown.Item
                      key={genre.id}
                      onClick={() =>
                        handleRouteChange(PATHS.GENRE_ID.NAVIGATE(genre.id))
                      }
                    >
                      {genre.name}
                    </NavDropdown.Item>
                  ))}
                </div>
              </NavDropdown>
            </Nav>
          </NavbarBST.Collapse>
        </Container>
      </NavbarBST>
    </div>
  );
};

export default Navbar;
