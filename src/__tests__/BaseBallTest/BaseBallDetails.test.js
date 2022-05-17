import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import BaseBallDetails from "../../Pages/BaseBall/BaseBallDetails/BaseBallDetails";

describe("BaseBallDetails", () => {
  it("BaseBallDetails should render", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <BaseBallDetails></BaseBallDetails>
        </BrowserRouter>
      </Provider>
    );
  });
  // it("",()=>{})
});
