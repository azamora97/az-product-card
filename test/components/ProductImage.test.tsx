import React from 'react';
import renderer from 'react-test-renderer';
import { product2 } from '../data/products';
import { ProductCard } from '../../src/components/index';
import { ProductImage } from '../../src/components/ProductImage';


// obsoleto, se debe usar jest 
describe("ProductImage", () => {
    
    test('debe de mostrar el componente correctamente con la imagen personalizada', () => {

        const wrapper = renderer.create(
            <ProductImage  img='https://holamundo.jpg' />
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
        
    });

    test("debe de mostrar el componente con la imagen del producto", () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    });

})