import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import PostList from '../components/PostList';

export default ({ children, title = 'The Universal Blog' }) => (
  <Layout>
    <Header>
      <Jumbotron>
        <h1>{title}</h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing eli
      </Jumbotron>
      <PostList />
    </Header>
  </Layout>
);
