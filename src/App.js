import { Card, CardContent } from './components/Card/Card'
import logo from './images/logo.png'
import { ReactComponent as WindowsLogo } from './icons/windows-logo.svg'
import uiExample from './images/interface-placeholder.png'
import './normalize.css'
import './App.css'

function App() {
  return (
    <main>
      <div className='row'>
        <CardContent>
          <img src={logo} alt='Krilloud logo' />
          <a href='http://example.org' className='button-link'>
            <WindowsLogo className='button-icon' />
            <p className='button-text text-align-right'>Download for Windows</p>
          </a>
        </CardContent>
        <Card>
          <CardContent>
            <h1 className='card-title'>
              <span className='uppercase'>Making interactive audio important</span>
            </h1>
          </CardContent>
          <CardContent>
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut faucibus odio.
              Pellentesque nec dolor sit amet est blandit pellentesque et nec nibh. Nulla vitae
              fermentum ante. Etiam consequat lobortis est. Nullam a convallis turpis. Quisque non
              tortor lectus. Morbi ac lorem nec lacus semper consectetur at vitae urna. Nullam
              fermentum non orci non rhoncus. Aenean ornare congue leo, consectetur tristique nulla
              volutpat ut. Morbi nibh sapien, commodo non nunc laoreet, blandit varius velit.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className='row'>
        <Card>
          <CardContent>
            <h1 className='card-title'>
              What is <span className='uppercase'>Krilloud</span> and what it does
            </h1>
          </CardContent>
          <CardContent>
            <h2>Info</h2>
            <p>
              Ut pellentesque enim a posuere posuere. Cras ullamcorper posuere diam at dictum. Sed
              in venenatis lacus, vel dictum ante. Suspendisse lobortis metus quis lorem iaculis,
              sed iaculis urna placerat. Sed hendrerit ipsum nulla, vel placerat enim pretium sed.
              Aenean gravida tincidunt ante, at aliquet leo sagittis non. Maecenas dignissim magna
              turpis, sit amet consequat orci lobortis sit amet.
            </p>
            <a href='http://example.org' className='button-link'>
              <p className='button-text'>Watch Tutorial</p>
            </a>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className='head-splash-bg'>
              <h1 className='head-splash-title'>Picture</h1>
            </div>
          </CardContent>
          <CardContent>
            <img src={uiExample} alt='Krilloud interface' />
          </CardContent>
        </Card>
      </div>
      <small>
        Icons made by{' '}
        <a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
          Freepik
        </a>{' '}
        from{' '}
        <a href='https://www.flaticon.com/' title='Flaticon'>
          www.flaticon.com
        </a>
      </small>
    </main>
  )
}

export default App
