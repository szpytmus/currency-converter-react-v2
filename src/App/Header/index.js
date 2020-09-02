import React from 'react';
import { StyledHeader } from './styled'

const Header = ({ title }) => (
    <React.Fragment>
        <StyledHeader>
            <h1 className="header">{title}</h1>
        </StyledHeader>
    </React.Fragment>
);

export default Header;