import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BaseBallBanner from "../../Pages/BaseBall/BaseBallBanner/BaseBallBanner";

describe("BaseBallBanner",()=>{
    it("Component should render without crashing",()=>{
        render(<BrowserRouter>
            <BaseBallBanner></BaseBallBanner>
        </BrowserRouter>)
        const bannerTitleElement = screen.getByText(/Find and Download Free Graphic Resources for Football Banner/i);
        expect(bannerTitleElement).toBeInTheDocument();
    })

    it("ifrasme should in the document",()=>{
        render(<BrowserRouter>
            <BaseBallBanner></BaseBallBanner>
        </BrowserRouter>)
        const iframeElement = screen.getByTitle(/YouTube video player/i);
        expect(iframeElement).toBeInTheDocument();
    })
});