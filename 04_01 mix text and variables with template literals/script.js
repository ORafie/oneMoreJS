/**
 * Use template literals to output HTML
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

//1. create a template literal:
/*
const content = `
  <main>
      <article>
        <h1>Everyday Backpack</h1>
        <ul>
          <li>Volume:</li>
          <li>Color:</li>
          <li>Age:</li>
          <li>Number of pockets:</li>
          <li>Left strap length:</li>
          <li>Right strap length:</li>
          <li>Lid status:</li>
        </ul>
      </article>
  </main>
`;
*/
//2. fill the template with placeholders:
const content = `
  <main>
      <article>
        <h1>${everydayPack.name}</h1>
        <ul>
          <li>Volume:${everydayPack.volume}</li>
          <li>Color:${everydayPack.color}</li>
          <li>Age:${everydayPack.backpackAge}</li>
          <li>Number of pockets:${everydayPack.pocketNum}</li>
          <li>Left strap length:${everydayPack.strapLength.left}</li>
          <li>Right strap length:${everydayPack.strapLength.right}</li>
          <li>Lid status:${everydayPack.lidOpen}</li>
        </ul>
      </article>
  </main>
`;


document.body.innerHTML = content;

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());


/*
in your browser:
// whole document is an object
document
// get document body
document.body
// get document inner HTML
document.body.innerHTML
// rplace inner HTML with anything
document.body.innerHTML = 'some text'


*/