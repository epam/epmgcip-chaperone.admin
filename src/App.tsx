import MainTemplate from './components/templates/MainTemplate/MainTemplate.tsx'
import Exhibit from './components/pages/Exhibit/Exhibit.tsx'

function App() {
  const slug = window.location.pathname.split('/').pop()
  return (
    <div data-testid='app-component'>
      <MainTemplate>
        <Exhibit slug={slug || ''} />
      </MainTemplate>
    </div>
  )
}

export default App
