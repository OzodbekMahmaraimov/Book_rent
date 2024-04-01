import { useState, useEffect } from 'react';
import Routeses from './routes';
import Loading from './components/loading';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <Routeses />
    </>
  );
};

export default App;
