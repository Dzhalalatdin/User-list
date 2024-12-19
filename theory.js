// Event Loop

function delay(callback, delay) {
  setInterval(callback, delay);
}

// delay(() => {
//   console.log("Hello, World!");
// }, 1000);

// const delay = (time = 1000) => {
//   const promise = new Promise((resolve, reject) =>
//     setTimeout(() => {
//       resolve([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//     }, time)
//   );
//   setTimeout(() => {}, time);
//   return promise;
// };

// delay(2500)
//   .then((data) => {
//     console.log("Hello, World!", data);
//     return data.map((x) => x * 2);
//   })
//   .then((data) => {
//     console.log("World, Hello!", data);
//   });

// const getData = (data) => {
//   new Promise((resolve, reject) => {
//     resolve([1, 2, 4]);
//   });
// };

// async function asyncExample() {
//   try {
//     await delay(2500);
//     const data = await getData();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Finally block");
//   }
// }
