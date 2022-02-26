import "./App.css";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { id: 'e2', title: "SuperMarket", amount: 23, date: new Date(2022, 1, 26) },
    { id: 'e3', title: "Car Fixing", amount: 222, date: new Date(2022, 2, 23) },
    { id: 'e1', title: "Car Ensurance", amount: 123, date: new Date(2022, 6, 26) },
    { id: 'e4', title: "Coffee", amount: 1, date: new Date(2022, 8, 12) },
  ];

  return (
    <Expenses items={expenses}></Expenses>
  );
}

export default App;
