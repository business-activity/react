// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
// import EditService from './EditService'


// let container = null;
// beforeEach(() => {
//     container = document.createElement("div");
//     document.body.appendChild(container);
// });

// afterEach(() => {

//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
// });

// it("renders service data", async () => {
//     const fakeService = {
//             "numOfMeetings": 4,
//             "durationOfMeeting": "1 hour",
//             "cost": "500$",
//             "OpeningHours": "10:00-22:30",
//             "address": {
//                 "city": "bnei-brak",
//                 "street": "pardo",
//                 "number": 2
//             },
//             "id": "25d11739-516e-42ad-8980-3e8c2b7a2961",
//             "name": "Lectures on the importance of laughter for health",
//             "businessId": "b088d638-3694-4b32-bc25-892ad99b9d03"
        
//     };
//     jest.spyOn(global, "fetch").mockImplementation(() =>
//         Promise.resolve({
//             json: () => Promise.resolve(fakeService)
//         })
//     );
//     await (async () => {
//         render(<EditService id="e97ec65a-a5d9-4834-9bef-3a6189b15fe4" />, container);
//       });
//       expect(container.querySelector("summary").textContent).toBe(fakeService.numOfMeetings);
//      // expect(container.textContent).toContain(fakeService.numOfMeetings);
     
//       global.fetch.mockRestore();

     
// })  

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import EditService from './EditService'

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

it("renders service data", async () => {
    const fakeService = {
        "numOfMeetings": 4,
        "durationOfMeeting": "1 hour",
        "cost": "500$",
        "OpeningHours": "10:00-22:30",
        "address": {
            "city": "bnei-brak",
            "street": "pardo",
            "number": 2
        },
        "id": "25d11739-516e-42ad-8980-3e8c2b7a2961",
        "name": "Lectures on the importance of laughter for health",
        "businessId": "b088d638-3694-4b32-bc25-892ad99b9d03"
 
};
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeService)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await (async () => {
    render(<EditService id="25d11739-516e-42ad-8980-3e8c2b7a2961" />, container);
  });
  expect(container.textContent).toContain(fakeService.cost)
  global.fetch.mockRestore();
});
