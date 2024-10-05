import styled from "@emotion/styled";
import background from "../../assets/images/background.png";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${background});
  background-repeat: repeat-y;

  background-position: center;
  display: flex;
  flex-direction: column;
`;

export const Navigation = styled.nav`
  margin-bottom: 24px;
`;
export const NavList = styled.ul`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;

  display: flex;
  gap: 18px;
  padding: 14px;

  background: rgba(255, 255, 255, 0.1);
  background-blend-mode: overlay;
  backdrop-filter: blur(50px);
  border-radius: 20px;
`;

export const NavItem = styled.li<{ isActive: boolean }>`
  span {
    color: ${(props) => (props.isActive ? "white" : "#ffc700")};
  }

  a {
    text-decoration: none;
    color: ${(props) => (props.isActive ? "#ffc700" : "inherit")};
  }

  a:hover,
  a:focus {
    color: #ffc700;
    span {
      color: white;
    }
  }
`;
export const ContetntContainer = styled.div`
  padding: 0px 50px;
`;
