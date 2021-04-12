import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import SearchEmployee from './components/search-employee.component';

const {Header, Content} = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <h1 style={{ color: 'white'}}>Exercício Dev</h1>
      </Header>
      <Content style={{ padding: '20px 50px' }}>
        <SearchEmployee></SearchEmployee>
      </Content>
    </Layout>
  );
}

export default App;
