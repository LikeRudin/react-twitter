import { render, screen } from "@testing-library/react";
import AppRouter from "@/components/Router";
import "@testing-library/jest-dom";


describe("AppRouter Component", () => {
  it("renders Home component when isLoggedIn is true", () => {
    render(<AppRouter isLoggedIn={true} />
    );

    const homeElement = screen.getByText(/Home/i);
    expect(homeElement).toBeInTheDocument()
  });

  it("renders Auth component when isLoggedIn is false", () => {
    render(
        <AppRouter isLoggedIn={false} />
    );

    const authElement = screen.getByText(/Auth/i);
    expect(authElement).toBeInTheDocument();
  });
});