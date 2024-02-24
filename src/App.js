import { BrowserRouter,Route, Switch} from 'react-router-dom';
import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'

const App = () => {return(
  <BrowserRouter>
  <Header />
  
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
</BrowserRouter>
  
)}

export default App
