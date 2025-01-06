import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle } from '../../src/components/ProductTitle';
import { product1 } from '../data/products';
import { ProductCard } from '../../src/components/index';


// obsoleto, se debe usar jest 
describe("ProductTitle", () => {
    
    test('debe de mostrar el componente correctamente con el titulo personalizado', () => {

        const wrapper = renderer.create(
            <ProductTitle title='Custom Product'/>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
        
    });

    test("debe de mostrar el componente con el nombre del producto", () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    });

})