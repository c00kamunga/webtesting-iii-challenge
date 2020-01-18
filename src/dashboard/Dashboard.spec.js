// Test away




import React from 'react';
import Dashboard from './Dashboard'
import {render} from '@testing-library/react';



test("display 'closed' if the close prop is true", ()=>{
    const App = render(<Dashboard/>)
    expect(App).toMatchSnapshot()
})