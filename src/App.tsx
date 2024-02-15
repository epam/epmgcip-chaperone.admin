import MainTemplate from './components/templates/MainTemplate/MainTemplate.tsx'
import Exhibit from './components/pages/Exhibit/Exhibit.tsx'

function App() {
  const slug = window.location.pathname.split('/').pop()
  return (
    <MainTemplate data-testId='app-component'>
      <Exhibit slug={slug || ''} />
    </MainTemplate>
  )
}

export default App
