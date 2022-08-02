import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
// import Business from "./Business";


import BusinessForUsers from './Business'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import { mount, shallow } from "enzyme";
// import axios from "axios";
// import * as enzyme from 'enzyme';
// import * as Adapter from 'enzyme-adapter-react-16';
// enzyme.configure({ adapter: new Adapter() });
// jest.mock("axios");

// mock data
// const url= "https://meetings-test.herokuapp.com/business";

describe("business tests", () => {

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
  it("should render business title", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<BusinessForUsers />} />
        </Routes>
      </BrowserRouter>,
      container
    );

    expect(container.textContent).toContain("business page");

  });
//--axios.get test
  //   let wrapper;

  //   // clear all mocks
  //   afterEach(() => {
  //     jest.clearAllMocks();
  //   });

  //   test("load business", async () => {
  //     // mock axios promise
  //     await act(async () => {
  //       await axios.get.mockImplementationOnce(() => Promise.resolve(url));
  //       wrapper = mount(<BusinessForUsers/>);
  //     });

  //     wrapper.update();
  //     await expect(axios.get).toHaveBeenCalledTimes(1);
  //   });
  // });

  // let container = null;
  // beforeEach(() => {
  //   // setup a DOM element as a render target
  //   container = document.createElement("div");
  //   document.body.appendChild(container);
  // });

  // afterEach(() => {
  //   // cleanup on exiting
  //   unmountComponentAtNode(container);
  //   container.remove();
  //   container = null;
  // });

//   it("renders user data", async () => {
//     const fakeUser =

//     {
//       "ownersName": "Shoshi&Nechami",
//       "businessName": "Water sport",
//       "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/PikiWiki_Israel_65689_extreme.jpg/800px-PikiWiki_Israel_65689_extreme.jpg",
//       "services": [
//         {
//           "name": "bananas",
//           "numOfMeetings": 2,
//           "durationOfMeeting": "15 miniutes",
//           "cost": "60$",
//           "OpeningHours": "10:00-18:00",
//           "address": {
//             "city": "Tiberias",
//             "street": "rimon",
//             "number": 10
//           },
//           "id": "6b727a39-6bec-4098-8231-459f23389555",
//           "businessId": "20db5cfa-2016-44ae-a3a4-63218ff21d3c"
//         }
//       ],
//       "userId": "d0bed1c9-ead8-4527-acf9-f8bf84efba6c",
//       "id": "6178f559-9a4f-4eeb-bb24-aadd223f2475"
//     }



//     jest.spyOn(global, "fetch").mockImplementation(() =>
//       Promise.resolve({
//         json: () => Promise.resolve(fakeUser)
//       })
//     );


//     await (async () => {
//       render(<Business />, container);
//     });


//     expect(container.textContent).toContain(fakeUser.businessName);
//     global.fetch.mockRestore();
//   });
});
