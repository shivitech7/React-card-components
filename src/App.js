import './App.css';

import FormCard1 from './Components/Form-cards/FormCard1';
import FormCard2 from './Components/Form-cards/FormCard2';
import FormCard3 from './Components/Form-cards/FormCard3';
import ProductItem1 from './Components/Product-Items/ProductItem1';
import CardItems from './Components/Card-items/CardItems';
import Testimonials from './Components/Testimonials/Testimonials';
import PricingCards from './Components/PricingCards/PricingCards';
import ContentCards from './Components/ContentCards/ContentCards.jsx';

function App() {
  return (
    <div className="App">
      <FormCard1 />
      <FormCard2 />
      <FormCard3 />
      <ProductItem1 />
      <CardItems />
      <Testimonials />
      <PricingCards />
      <ContentCards />
    </div>
  );
}

export default App;
