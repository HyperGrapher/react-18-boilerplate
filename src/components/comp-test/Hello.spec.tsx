import {render, screen} from '@testing-library/react'
import Hello from './Hello'


it('should assert "Hello Kitty!" in the component', () => {

    render(<Hello/>)
    const text = screen.getByText('Hello Kitty!');
    expect(text).toBeInTheDocument()
})