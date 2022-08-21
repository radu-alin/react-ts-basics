// import Greet from './components/Greet';
// import Person from './components/Person';
// import PersonList from './components/PersonList';
// import Status from './components/Status';
// import Heading from './components/Heading';
// import Oscar from './components/Oscar';
// import Button from './components/Button';
// import Input from './components/Input';
// import Container from './components/Container';

// import LoggedIn from './components/state/LoggedIn';
// import User from './components/state/User';
// import Counter from './components/state/Counter';

import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';

import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';

import './App.css';

// const personName = {
//   first: 'Bruce',
//   last: 'Wayne',
// };

// const nameList = [
//   {
//     first: 'Bruce',
//     last: 'Wayne',
//   },

//   {
//     first: 'Clark',
//     last: 'Kent',
//   },

//   {
//     first: 'Spider',
//     last: 'Man',
//   },
// ];

function App() {
  return (
    <div className="App">
      {/* <Greet name={'Alin'} messageCount={20} isLoggedIn={true} />

      <Person name={personName} />

      <PersonList names={nameList} />

      <Status status="loading" />

      <Oscar>
        <Heading>Oscar goes to DiCaprio!</Heading>
      </Oscar>

      <Button
        handleCLick={(event, id) =>
          console.log(
            '%c-> developmentConsole: Button= clicked ',
            'color:#77dcfd',
            event,
            id
          )
        }
      />

      <hr />

      <Input
        value=""
        onChangeHandler={(event) =>
          console.log(
            '%c-> developmentConsole: event= ',
            'color:#77dcfd',
            event
          )
        }
      />

      <Container styles={{ border: '1px solid black', padding: '1rem' }}>
        Text goes Here!
      </Container> */}

      {/* <div style={{ height: '1rem' }} />

      <LoggedIn />
      <hr />
      <div style={{ height: '1rem' }} />

      <UserState />
      <hr />
      <div style={{ height: '1rem' }} />

      <Counter />
      <hr /> */}

      <div style={{ height: '1rem' }} />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      
      <hr />
      <div style={{ height: '1rem' }} />

      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
