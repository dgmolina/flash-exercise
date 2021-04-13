import React from 'react';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Routes from './routes'

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});


const {Header, Content} = Layout;

function App() {
  return (
    <ApolloProvider client={ client }>
      <Layout>
        <Header>
          <h1 style={{ color: 'white'}}>Exercício Dev</h1>
        </Header>
        <Content style={{ padding: '20px 50px' }}>
          <Routes />
        </Content>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
