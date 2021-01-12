import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import PureComp from './components/PureComp'
import ParentComp from './components/ParentComp'
import MemoComp from './components/MemoComp'
import RefsDemo from './components/RefsDemo'
import FRParentInput from './components/FRParentInput'
import PortalDemo from './components/PortalDemo'
import Error from './components/Error'
import ErrorBoundary from './components/ErrorBoundary'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import ClickCounterTwo from './components/ClickCounterTwo.js'
import HoverCounterTwo from './components/HoverCounterTwo'
import User from './components/User'
import CounterTwo from './components/CounterTwo'
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/userContext'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import HookCounter from './components/HookCounter.js'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'
import HookCounterFour from './components/HookCounterFour'
import EffectCounter from './components/EffectCounter'
import HookMouse from './components/HookMouse'
import MouseContainer from './components/MouseContainer'

function App() {
  return (
    <div className="App">

      {/*<MouseContainer />
      <HookMouse />*/}

      {/*<EffectCounter />*/}

      {/*<HookCounterFour />*/}

      {/*<HookCounterThree />*/}

      {/*<HookCounterTwo />*/}

      {/*<HookCounter />*/}

      {/*<PostForm />*/}
      {/*<PostList />*/}

      {/*<UserProvider value="Shahriar">
        <ComponentC />
      </UserProvider>*/}
      
      {/*<CounterTwo render={(count, incrementCount) => (
        <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}/>

      <CounterTwo render={(count, incrementCount) => (
        <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}/>*/}
      {/*<User render={(isLoggedIn) => isLoggedIn ? "Adib" : "Guest"} />
      <HoverCounterTwo />
      <ClickCounterTwo />*/}
      {/*<HoverCounter />
      <ClickCounter name="Adib"/>*/}
      {/*<ErrorBoundary>
        <Error heroName='Spider Man'/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Error heroName='Iron Man'/>
      </ErrorBoundary>
      <ErrorBoundary>

        <Error heroName='Goblin'/>
      </ErrorBoundary>*/}
        
      {/*<PortalDemo />*/}
      {/*<FRParentInput />*/}
      {/*<RefsDemo />*/}
      {/*<ParentComp />*/}
      {/*<Table />
      <FragmentDemo />*/}
      {/*<LifecycleA />
      <Form />
      <h1 className="error">Module Style</h1>
      <h1 className={styles.success}>Module Style</h1>
      <Stylesheet primary={true}/>
      <NameList />
      <UserGreeting />
      <ParentComponent> 
      </ParentComponent>
      <EventBind />
      <FunctionClick />
      <Counter />
      <Message />
      <Greet name="Abrar">
       <p>This is children props</p>
       <p>This is 2nd children props</p>
      </Greet>
      <Greet name="Shahriar"/>
      <Greet name="Adib"/>
      <Welcome name="Tony">
       <p>This is class children</p>
      </Welcome>
      <Welcome name="Stark"/>*/}
    </div>
  );
}

export default App;

