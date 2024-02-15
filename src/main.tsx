import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import App from './App.tsx'
import './variables.scss'
import './index.scss'
import CONTENTFUL_GRAPHQL_API from './constants/graphql.ts'

const client = new ApolloClient({
  uri: CONTENTFUL_GRAPHQL_API,
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
