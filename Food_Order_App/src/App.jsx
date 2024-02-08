import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Header from "./Components/Header";
import Meals from "./Components/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContexProvider } from "./store/UsrProgressContext";
function App() {
  return (
    <>
    <UserProgressContexProvider>
    <CartContextProvider>
        <Header />
        <Meals />
        <Cart/>
        <Checkout/>
      </CartContextProvider>
    </UserProgressContexProvider>
     
    </>
  );
}

export default App;
