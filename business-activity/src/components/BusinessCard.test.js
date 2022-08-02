import { render, unmountComponentAtNode } from "react-dom";
import { BusinessCard } from "./BusinessCard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

describe("<BusinessCard />", () => {
    let container = null;
    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });
    test("Should render card correctly with details", () => {
        const business = {
            ownersName: "Ora&Naama",
            businessName: "happy-life",
            img: "https://www.animatedimages.org/data/media/1309/animated-laughing-image-0022.gif",
            userId: "6145be68-adfa-422a-886a-8638df0b80cc",
            id: "acffe709-75cb-41a7-b15d-c1de98d41f8c"
        }

        render(<BrowserRouter>
            <Routes>
                <Route path="*" element={<BusinessCard business={business} />} />
            </Routes>
        </BrowserRouter>, container);
        expect(container.textContent).toContain(business.ownersName);
    });
});