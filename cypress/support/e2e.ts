import "./commands";
// Отключить service workers для SauceDemo
// beforeEach(() => {
//   cy.window().then((win) => {
//     if (win.navigator && win.navigator.serviceWorker) {
//       win.navigator.serviceWorker.getRegistrations().then((regs) => {
//         regs.forEach((reg) => reg.unregister());
//       });
//     }
//   });
// });
