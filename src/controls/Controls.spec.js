// Test away!


import React from 'react';
import Controls from './Controls';
import { render, fireEvent } from '@testing-library/react';
import { exportAlldeclaration } from '@babel/types'
describe('controls tests', ()=>{

test('does CONTROLS render', ()=>{
    render(<Controls/>)
})

test("if 'locked' prop is true, 'unlock gate' renders" , ()=>{
const { getByText } = render(<Controls locked={}/>)
getByText(/unlock gate/i)
})

test("buttons' text hanges to reflect the state the door will be in if clicked'", ()=>{
    const { getByText } = render(<Dashboard/>)
    const button = getByText(/open gate/i)
    fireEvent.click(button)
    getByText(/close gate/i)
})

})






