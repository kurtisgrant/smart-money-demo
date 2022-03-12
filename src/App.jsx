import { useState, useEffect } from 'react';
import { UserContext } from './UserContext';

function App() {
  const [socket, setSocket] = useState(null);
  const [user, setUserState] = useState(null);

  const wsEndpoint = process.env.REACT_APP_WS_ENDPOINT;

  const setUser = (user) => {
    if (user === null) {
      if (socket) {
        socket.disconnect();
        setSocket(null);
      }
      sessionStorage.removeItem('user');
      setUserState(null);
    } else {
      sessionStorage.setItem('user', JSON.stringify(user));
      setUserState(user);
      setupSocket(user);
    }
  };

  const setupSocket = (userObj) => {

    // Establish socket connection with server
    const s = io(wsEndpoint);
    s.on('connect', () => {
      console.log(`Socket connection established (in App.jsx)\n  ↳ My socket id is: ${s.id}`);
      s.emit('SET_USER', userObj);
      const clientId = s.id;
      s.on('disconnect', () => {
        console.log(`Socket connection lost. Client id was: ${clientId}`);
      });
    });
    setSocket(s);
  };

  // On first render:
  useEffect(() => {

    // Set user if stored in session storage
    const sessionUser = JSON.parse(sessionStorage.getItem('user'));
    sessionUser && setUser(sessionUser);

    return () => {
      // Unsubscribe from socket events to prevent memory leaks
      socket && socket.removeAllListeners();
    };
  }, []);


  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <SocketContext.Provider value={{ socket }}>
          <Navbar />
          <div className="main-container">
            <Routes>
              <Route path="/" element={user?.type === 'teacher' ? <Simulations /> : <Login />} />
              <Route path="/sim/:simulationKey" element={
                user?.type === 'teacher' ? <SimulationControlPanel /> :
                  (user?.type === 'student' ? <StudentDashboard /> : <AccessCodeLogin />)} />
              <Route path="/new" element={user?.type === 'teacher' ? <NewSimulation /> : <Login />} />
            </Routes>
          </div>
        </SocketContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
