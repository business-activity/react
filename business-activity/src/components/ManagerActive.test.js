import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { describe } from 'riteway';


import Admin from "./ManagerActive.js"
// import MockedMap from "./map";

// jest.mock("./map", () => {
//   return function DummyMap(props) {
//     return (
//       <div data-testid="map">
//         {props.center.lat}:{props.center.long}
//       </div>
//     );
//   };
// });

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
it("should render business name", () => {
    // act(() => {
      render(
        <Admin
         managerId="d070e48f-77f2-4361-9aa4-25cdb6502cdc"
        />,
        container
      );
    // });

    expect(container.querySelector('[data-testid="businessTitle"]').textContent).toContain(
        "update your business happy-life  details"
    );
  });
// const makeSut = (props) => {
//     return render(<Admin managerId={props.managerId} />);
// };
// it("renders with or without a business name", () => {
    // act(() => {
    //     render(<Admin />, container);
    // });
    // expect(container.textContent).toBe("update your business  details");

    //   act(() => {
    // render(<Admin name="happy-life" />, container);
    //   });
    // const { getByText } = makeSut({ managerId: "d070e48f-77f2-4361-9aa4-25cdb6502cdc" });
    // expect(getByText(/update your business happy-life  details/)).toBeInTheDocument();
    //   expect(container.textContent).toBe("update your business happy-life  details");

    //   act(() => {
    // render(<Admin name="Something" />, container);
    // expect(container.textContent).toBe("update your business Something  details");
// });
// });