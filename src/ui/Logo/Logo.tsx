import * as SC from "./LogoStyled"

import {ReactComponent as LogoPic} from "../../assets/images/logo_pic.svg"

const Logo:React.FC = () => {
    return ( <SC.GeneralWrapper>
        <LogoPic/>
        <h1>maker</h1>
    </SC.GeneralWrapper> );
}
 
export default Logo;