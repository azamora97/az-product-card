import React from 'react';
import renderer from 'react-test-renderer';
import { product1 } from '../data/products';
import { ProductCard } from '../../src/components/index';

//const { act } = renderer;


describe('ProductCard', () => {

    test('debe de mostrar el componte de manera correcta', () => {


        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <h1>Product Card</h1>
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    })

    test('debe de incrementar el contador', () => {


        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    ({count, increaseBy}) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{count}</span>
                            <button onClick={() => increaseBy(1)}>+1</button>
                        </>
                    )
                }
            </ProductCard>
        )

        let tree = wrapper.toJSON();
        expect( tree ).toMatchSnapshot();

        // no funciona ya que es obsoleto, se deberia usar como en el curso de react
       /* 
        act(() => {
            (tree as any).children[2].props.onClick();
        })
        tree = wrapper.toJSON();
        
        expect((tree as any).children[1].children).toBe(1);
        */
    })


})