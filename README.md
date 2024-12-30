# DO-Product-Card

Este es un paquete de pruebas de despliegue en NPM, curso devtalles

### Andrés Zamora

## Ejemplo

```
import {
  ProductCard, 
  ProductImage, 
  ProductTitle, 
  ProductButtons
} from 'az-product-card'
```

```
<ProductCard 
  key={ product.id }
  product={ product } 
  initialValues={{
  count: 1,
  maxCount: 30
  }}
>
  {
    ({
      count,
      maxCount,
      isMaxCountReached,
      increaseBy,
      reset
    }) => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />                 
      </>
    )
  }
</ ProductCard> 
```