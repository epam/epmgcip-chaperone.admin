declare global {
  interface Window {
    dataLayer: {
      event: string
      exhibit_id: string
      item_url_name?: string
      item_url_path?: string
    }[]
  }
}

export {}
