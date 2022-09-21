import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './Home';

describe('Home.tsx Test Suite', () => {


    it('should assert "Home Page" in the component', () => {
        
        render(<Router><Home/></Router>)
        const text = screen.getByText('Home Page');
        expect(text).toBeInTheDocument()
    
    })
    
    it('should assert "GSAP Heading Element" not to be in the component', () => {
        
        render(<Router><Home/></Router>)
        // use `queryBy..` to avoid throwing an error with `getBy..`
        const text = screen.queryByText('GSAP Heading Element');
        expect(text).not.toBeInTheDocument()
    
    })
    
    it('should assert "GSAP Heading Element" to be in the component after button click', async() => {
        
        render(<Router><Home/></Router>)
        const btn = screen.getByText('Show GSAP');
        await userEvent.click(btn);

        const gsapText = screen.queryByText('GSAP Heading Element');
        expect(gsapText).toBeInTheDocument();
    
    })


});


