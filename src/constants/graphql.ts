const CONTENTFUL_GRAPHQL_API = `https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE_ID}/environments/${import.meta.env.VITE_CONTENTFUL_ENVIRONMENT}?access_token=${import.meta.env.VITE_CONTENTFUL_CONTENT_DELIVERY_ACCESS_TOKEN}`
export default CONTENTFUL_GRAPHQL_API
