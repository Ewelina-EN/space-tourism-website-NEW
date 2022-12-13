import { Navigation, ImgLogo, Menu, MenuList, Span } from "../style/navigation/styled";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";

export const Nav = () => {
    return (
    <Navigation>
            <ImgLogo src={logo} alt="Space logo" />
            <Menu>
                <MenuList>
                    <Link to="/space-tourism/" ><Span><strong>00</strong> HOME</Span></Link>
                    <Link to="/space-tourism/" ><Span><strong>00</strong> HOME</Span></Link>
                    <Link to="/space-tourism/" ><Span><strong>00</strong> HOME</Span></Link>
                    <Link to="/space-tourism/" ><Span><strong>00</strong> HOME</Span></Link>
                </MenuList>
                </Menu>
    </Navigation>
    )
}