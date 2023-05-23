
import React from 'react';
import styled from 'styled-components'
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import {getPublicGists,getGistForUser} from './services/gistService'
import GistList from './components/GistList';


const App = () => {
  const [gists, setGists] = React.useState([]);
  const [username, setUsername] = React.useState("");


  React.useEffect(() => {
    if (username) {
      // Fetch gists for the specified username
      getGistForUser(username)
        .then((response) => setGists(response.data))
        .catch((error) => console.error(error));
    } else {
      // Fetch public gists
      getPublicGists()
        .then((response) => setGists(response.data))
        .catch((error) => console.error(error));
    }
  }, [username]);
  

  return (
    <Wrapper className="App" data-testid="app">
      <Header onInputChange={setUsername} />
      <GlobalStyles />
      <GistList gists={gists}/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
