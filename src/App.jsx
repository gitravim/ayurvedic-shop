import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navigation from './components/Navigation';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import QuizPage from './pages/QuizPage';
import SourceEthicsPage from './pages/SourceEthicsPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <CartDrawer />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/source-ethics" element={<SourceEthicsPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order-success" element={<OrderSuccessPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
