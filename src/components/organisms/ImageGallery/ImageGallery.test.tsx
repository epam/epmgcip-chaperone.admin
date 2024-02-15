import { render } from '@testing-library/react'
import ImageGallery from './ImageGallery.tsx'
import '@testing-library/jest-dom'

const images = [
  {
    url: './picture1.png',
    id: '1',
  },
  {
    url: './picture2.png',
    id: '2',
  },
]

describe('ImageGallery', () => {
  it('renders without crashing', async () => {
    const { getByTestId } = render(<ImageGallery images={images} />)

    expect(getByTestId('image-gallery-image-0')).toBeInTheDocument()
  })
})
