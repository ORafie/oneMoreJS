/**
 * Create a Backpack object.
 */

const updateBag = (update) => {
  let main = document.querySelector("main");
  main.innerHTML = markup(bag);
  console.info(update, bag);
};

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);
console.log("Strap length L:", backpack.strapLength.left);

var query = 'pocketNum';

console.log("The pocketNum value:", backpack[query]);
console.log("The pocketNum value:", backpack['pocketNum']);
console.log("The pocketNum value:", backpack['something-braking-rules']);


 /* Create a Backpack object.
 */;

const bag = {
  name: "Small pink bag",
  volume: 1,
  color: "pink",
  pocketNum: 5,
  strapLength: {
    short: 30,
    long: 90,
  },
  trinket: true,
  toggleTrinket: function (trinketStatus) {
    this.trinket = trinketStatus;
    updateBag(`Trinket status changed.`);
  },
  strapLength: function (lengthShort, lengthLong) {
    this.lengthShort.short = lengthShort;
    this.lengthLong.long = lengthLong;
    updateBag(`Strap lengths updated.`);
  },
};

console.log("The bag object:", bag);
console.log("The pocketNum value:", bag.pocketNum);
console.log("Strap length Long:", bag.strapLength.long);

var query = 'pocketNum';

console.log("The pocketNum value:", bag[query]);
console.log("The pocketNum value:", bag['pocketNum']);
console.log("The pocketNum value:", bag['something-braking-rules']);


const markup = (bag) => {
  return `
  <div>
    <h3>${bag.name}</h3>
    <ul>
      <li>Volume: ${bag.volume}</li>
      <li>Color: ${bag.color}</li>
      <li>Number of pockets: ${bag.pocketNum}</li>
      <li>Strap lengths: short: ${bag.strapLength.short}, long: ${bag.strapLength.long
    } </li>
      <li>Trinket: ${bag.toggleTrinket ? "Is present" : "Is absent"}</li>
    </ul>
  </div>
`;
};

const main = document.createElement("main");
main.innerHTML = markup(bag);
document.body.appendChild(main);