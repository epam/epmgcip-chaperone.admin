import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { I18nextProvider } from 'react-i18next'
import App from './App.tsx'
import './variables.scss'
import './index.scss'
import CONTENTFUL_GRAPHQL_API from './constants/graphql.ts'
import i18n from './i18n.ts'

const client = new ApolloClient({
  uri: CONTENTFUL_GRAPHQL_API,
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
