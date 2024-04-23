// import html from './core.js';

// const cars = ['A','B','C'];
// const isSuccess = true;
// const output = html`
//     <h1>${isSuccess && 'Thành Công'}</h1>
//     <ul>
//         ${cars.map(car => `<li>${car}</li>`)}
//     </ul>
// `;
// console.log(output);

import { attach } from './store.js';

attach(() => '<h1> HELLO WORLD </h1>',document.getElementById('root'));

