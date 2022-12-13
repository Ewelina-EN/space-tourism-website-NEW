import { Navigation, ImgLogo } from "../style/navigation/styled";
import logo from "../assets/shared/logo.svg";

export const Nav = () => {
    return (
    <Navigation>
            <ImgLogo src={logo} alt="Space logo" />
    </Navigation>
    )
}