import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';
import FormRender, { FormSpaceRender } from 'antd-form-render';
import './App.less';

const { TabPane } = Tabs;

const StyledContainer = styled.div`
  padding: 20px;
`;

const App = () => {
  const [key, setKey] = useState('1');

  return (
    <StyledContainer>
      <Tabs defaultActiveKey="1" onChange={setKey}>
        <TabPane tab="FormRender" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="FormSpaceRender" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </StyledContainer>
  );
};

export default App;
