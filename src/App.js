import './App.css';
import ContactProvider from './context/contactContext';
import ContactPage from './pages/contactPage';

function App() {
  return (
    <ContactProvider>
      <ContactPage />
    </ContactProvider>
  );
}

export default App;
