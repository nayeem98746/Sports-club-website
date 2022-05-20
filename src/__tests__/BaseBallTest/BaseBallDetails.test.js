import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import useAuth from "../../Hook/UseAuth";
import BaseBallDetails from "../../Pages/BaseBall/BaseBallDetails/BaseBallDetails";

jest.mock("../../Hook/UseAuth")

describe("BaseBallDetails", () => {
  it("BaseBallDetails should render", () => {
    useAuth.mockReturnValue({
        user:{},
        admin: true,
        isLoading: true,
        authError: "",
        modal: false,
        githubsignIn: jest.fn(),
        handleFacebookSingIn: jest.fn(),
        googleSignIn: jest.fn(),
        logOut: jest.fn(),
        loginUser: jest.fn(),
        registerUser: jest.fn(),
    })
    render(
      <Provider store={store}>
        <BrowserRouter>
          <BaseBallDetails></BaseBallDetails>
        </BrowserRouter>
      </Provider>
    );
    const baseballDetailsBox = screen.getByTestId("baseballDetails-box");
    expect(baseballDetailsBox).toBeInTheDocument()
  });

  // it("should give an alert to require all fields",()=>{
  //   const testSubmitData = {email:"abc@gmail.com",name:"Alif",feedback:5,PlayerName:"messi"}
  //   render(<BaseBallDetails></BaseBallDetails>)
  //   const reviewBtn = screen.getByTestId(/comment-submit/i);
  // })
});
