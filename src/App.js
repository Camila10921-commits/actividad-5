// src/App.js
import './App.css';
import OrderSummary from './components/OrderSummary'; // Importa el componente que creaste
import './styles/styles.scss'; // Asegúrate de que la ruta sea correcta

const App = () => {
  return (
    <div className="App">
      <OrderSummary />
    </div>
  );
};

export default App;
