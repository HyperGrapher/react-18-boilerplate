import {render, screen, waitFor} from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from "App";
import { HelmetProvider } from 'react-helmet-async';

describe('App.tsx Test Suite', () => {

    

    it("should assert document title as expected", async () => {
        render(<Router><HelmetProvider><App /></HelmetProvider></Router>);
        await waitFor( () => expect(document.title).toEqual("React 18 Template"))


    });

});
