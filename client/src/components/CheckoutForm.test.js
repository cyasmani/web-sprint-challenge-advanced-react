import React from "react";
import { render , fireEvent} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { act } from "react-dom/test-utils";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", async () => {
    const { getByPlaceholderText, getByLabelText , getByText} = render(<CheckoutForm/>);
});

test("form shows success message on submit with form details", async() => {

    const { getByPlaceholderText, getByLabelText , getByText, getByRole} = render(<CheckoutForm/>);

    const firstName = getByLabelText(/First Name:/i)
    const lastName = getByLabelText(/Last Name:/i)
    const address = getByLabelText(/Address:/i)
    const city = getByLabelText(/City:/i)
    const state = getByLabelText(/State:/i)
    const zip = getByLabelText(/Zip:/i)

    fireEvent.change(firstName, {
        target: {value :"Big Gucci Sosa"}
    })
    
    fireEvent.change(lastName, {
        target: {value: "3 Hunnid Hunnid"}
    })

    fireEvent.change(address, {
        target:{value: "fresh prince of bel-air"}
    })

    fireEvent.change(city, {
        target: {value: "Wakanda"}
    })

    fireEvent.change(state, {
        target: {value: "Pangea"}
    })

    fireEvent.change(zip, {
        target: {value: "89142"}
    })

    await act(async() => {
        fireEvent.click(getByRole('button'))
    })


});
