import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug - Card!',
  img: './coffee-mug.png'
}

const App = () => {
  return (
    <>
      <ProductCard
        key={product.id}
        product={product}
        initialValues={{
          count: 1,
          maxCount: 30,
        }}
      >
        {({ count, maxCount, isMaxCountReached, increaseBy, reset }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
