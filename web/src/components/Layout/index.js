import React from "react";

import styled from "styled-components";

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
`;

const Layout = ({ children }) => <StyledLayout>{children}</StyledLayout>;

export default Layout;
