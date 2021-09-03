import './App.css';
import { Header } from './components/header/Header';
import { Banner } from './components/banner/Banner';
import { BlueSection } from './components/bluesection/Blue';
import { Features } from './components/features/Features';
import Basic from './components/basicfeature/Basic';
import CallAction from './components/callaction/CallAction';
import AppSection from './components/appsection/AppSection';
import { Footer } from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      
      <Header />
      <Banner />
      <BlueSection />
      <Features />
      <Basic />
      <CallAction />
      <AppSection />
      <Footer />

    </div>
  );
}

export default App;
