import { render, screen } from "@testing-library/react"
import { SideBar } from "../SideBar"

describe("SideBar", () => {

    it("should render correctly", () => {
        render(<SideBar/>);

        expect(screen.getByText("Home")).toBeInTheDocument
    })
})