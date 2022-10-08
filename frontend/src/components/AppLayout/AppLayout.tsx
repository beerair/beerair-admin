import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import styled from '@emotion/styled';

import whiteLogo from '@/assets/logo_wh.svg';
import whiteLogoShort from '@/assets/logo_short_wh.svg';

interface AppLayoutProps {
  children?: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapseChange = (_collapsed: boolean) => {
    setCollapsed(_collapsed);
  };

  return (
    <StyledLayout>
      <Layout.Sider collapsible collapsed={collapsed} onCollapse={handleCollapseChange}>
        <div className="AppLayout__logo-wrapper">
          <img
            src={collapsed ? whiteLogoShort : whiteLogo}
            className={`AppLayout__logo-${collapsed ? 'short' : 'long'}`}
            alt="logo"
          />
        </div>
        <Menu mode="inline" items={[]} />
      </Layout.Sider>
      <Layout.Content className="AppLayout__content-wrapper">{children}</Layout.Content>
    </StyledLayout>
  );
};

const StyledLayout = styled(Layout)`
  min-height: 100vh;

  & .AppLayout__logo-wrapper {
    display: flex;
    justify-content: center;
    padding: 20px;

    & img.AppLayout__logo-short {
      width: 40px;
    }

    & img.AppLayout__logo-long {
      width: 160px;
    }
  }

  & .AppLayout__content-wrapper {
    padding: 10px 14px;
  }
`;

export default AppLayout;
