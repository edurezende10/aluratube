import Header from '../src/components/Header/Header';
import Timeline from '../src/components/Timeline/Timeline';
import config from '../config.json';
import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu/Menu';
import React from 'react';
/* 37 50min */
function HomePage() {
  const [valorDaBusca, setValorDaBusca] = React.useState('');

  return (
    <>
      <CSSReset />
      <div>
        <Menu setValorDaBusca={setValorDaBusca} valorDaBusca={valorDaBusca} />
        <Header />
        <Timeline searchValue={valorDaBusca} playlists={config.playlists}/>
          
        
      </div>
    </>
  );
}
export default HomePage;
