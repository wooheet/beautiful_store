import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { Compass } from "./Icons";

const Header = styled.header`
  width: 100%;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  border-bottom: ${props => props.theme.boxBorder};
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  display: flex;
  justify-content: center;
`;

const HeaderColumn = styled.div`
  width: 33%;
  text-align: center;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;

const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export default withRouter(({ history }) => {
    return (
        <Header>
            <HeaderWrapper>
                <HeaderColumn>
                    <Link to="/">
                        <img className="logo" src="http://www.beautifulstore.org/wp-content/themes/bs/images/brand.png"
                             alt="Beautiful Store"
                             width="117" height="30"
                             srcSet="http://www.beautifulstore.org/wp-content/themes/bs/images/brand@2x.png 2x"/>
                    </Link>
                </HeaderColumn>
                <HeaderColumn>
                    <HeaderLink to="/">
                        <Compass />
                    </HeaderLink>
                </HeaderColumn>
            </HeaderWrapper>
        </Header>
    );
});