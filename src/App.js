import { Card } from './components/Card/Card'
import logo from './images/logo.png'
import uiExample from './images/interface-placeholder.png'
import './normalize.css'
import './App.css'
import './components/Card/Card.css'

function App() {
  return (
    <main>
      <div className='row'>
        <article className='card'>
          <img src={logo} alt='Krilloud logo' />
          <a href='http://example.org' className='button-link'>
            Download for Windows
          </a>
        </article>
        <Card>
          <h1>Making interactive audio important</h1>
          <article>
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut faucibus odio.
              Pellentesque nec dolor sit amet est blandit pellentesque et nec nibh. Nulla vitae
              fermentum ante. Etiam consequat lobortis est. Nullam a convallis turpis. Quisque non
              tortor lectus. Morbi ac lorem nec lacus semper consectetur at vitae urna. Nullam
              fermentum non orci non rhoncus. Aenean ornare congue leo, consectetur tristique nulla
              volutpat ut. Morbi nibh sapien, commodo non nunc laoreet, blandit varius velit.
            </p>
          </article>
        </Card>
      </div>
      <div className='row'>
        <Card>
          <h1>What is Krilloud and what it does</h1>
          <article>
            <h2>Info</h2>
            <p>
              Ut pellentesque enim a posuere posuere. Cras ullamcorper posuere diam at dictum. Sed
              in venenatis lacus, vel dictum ante. Suspendisse lobortis metus quis lorem iaculis,
              sed iaculis urna placerat. Sed hendrerit ipsum nulla, vel placerat enim pretium sed.
              Aenean gravida tincidunt ante, at aliquet leo sagittis non. Maecenas dignissim magna
              turpis, sit amet consequat orci lobortis sit amet.
            </p>
            <a href='http://example.org' className='button-link'>
              Watch Tutorial
            </a>
          </article>
        </Card>
        <Card>
          <article className='head-splash'>
            <h1 className='head-splash-title'>Picture</h1>
          </article>
          <img src={uiExample} alt='Krilloud interface' />
        </Card>
      </div>
    </main>
  )
}

export default App
