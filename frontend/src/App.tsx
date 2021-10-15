import { useEffect, useState, useContext } from 'react';
import { Header } from './components/Header/Header';
import { Accordion } from './components/Accordion/Accordion';
import { CircularProgress } from '@material-ui/core';
import AppContext  from './App.context';
import './App.css';
import { RocketListProps } from './types';
import { IntlProvider } from 'react-intl';

function App() {

  const [rocketData,setRocketData] = useState<any>();
  const [loading,setLoading] = useState<boolean>(true);
  const { api } = useContext(AppContext);

  useEffect(() => {
    const fetchRocketData = async () => {
     const data: RocketListProps = await api.fetchRocketData(); 
     setRocketData(data);
     setLoading(false);
    }

    if(loading) {
      fetchRocketData();  
    }

  },[rocketData, loading]);
  
  return (  
    <IntlProvider locale="pt" defaultLocale="pt">
      <div className="App">    
        <Header />       
        { !loading ?
          <Accordion rocketData={rocketData} />
        : <CircularProgress color="primary" style={{marginTop: 50}}   />}
      </div>
    </IntlProvider>
  );
}

export default App;
