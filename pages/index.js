import Header from '../src/components/Header/Header';
import Timeline from '../src/components/Timeline/Timeline';
import config from '../config.json';
import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu/Menu';
/* 33min */
function HomePage() {
  return (
    <>
      <CSSReset />
      <div>
        <Menu />
        <Header />
        <Timeline playlist={config} />
      </div>
    </>
  );
}
export default HomePage;
