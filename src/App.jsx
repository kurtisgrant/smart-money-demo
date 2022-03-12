import styled from 'styled-components';
import theme from './theme';

function App() {

  const App = styled.div`
  background-color: ${theme.backgroundColor};
  margin: 0;
  padding: 0;
  `;

  return (
    <App>
      Empty App
    </App>
  );
}

export default App;
