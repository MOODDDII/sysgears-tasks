// 1 task
function convert_length(type, num, to) {
  const meter_based_values = {
  mm: 0.001,
  cm: 0.01,
  dm: 0.1,
  m: 1,
  dam: 10,
  hm: 100,
  km: 1000,

  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.344,

  nautical_mile: 1852,

  micrometer: 0.000001,
  nanometer: 0.000000001,
};

  const meter_result =  meter_based_values[type] * num;
  const r = (meter_result / meter_based_values[to]).toFixed(1);
  const str_r = `${num} ${type} = ${r} ${to}`

  return str_r;
}

console.log(convert_length('km', 35, 'mi'));

// 2 task
const input_data  = [
  {
    name: "John",
    email: "john123@gmail.com",
    alive: true,
    rating: 30,
  },
  {
    name: "Max",
    email: "mmaxbsx@gmail.com",
    alive: true,
    rating: 80,
  },
  {
    name: "Floid",
    email: "flo123id@gmail.com",
    alive: false,
    rating: 10,
  },
];

function get_sorted(data, key, reversed) {
  const r = [...data].sort((a, b) => {
    let result;

    if (typeof a[key] === "number") 
      return a[key] - b[key];

    return a[key].localeCompare(b[key]);
  });

  return reversed ? r.reverse() : r;
}

console.log(get_sorted(input_data, "name"));
console.log(get_sorted(input_data, "rating", true));

// 3 task
const asteroid = [Math.random() * 100, Math.random() * 100, Math.random() * 100];

function find_meteor() {
  const result = {};

  const z1 = [0, 0, 0];
  const z2 = [100, 0, 0];
  const z3 = [0, 100, 0];
  const z4 = [0, 0, 100];

  const d1 = Math.sqrt((asteroid[0] - z1[0]) ** 2 + (asteroid[1] - z1[1]) ** 2 + (asteroid[2] - z1[2]) ** 2);
  const d2 = Math.sqrt((asteroid[0] - z2[0]) ** 2 + (asteroid[1] - z2[1]) ** 2 + (asteroid[2] - z2[2]) ** 2);
  const d3 = Math.sqrt((asteroid[0] - z3[0]) ** 2 + (asteroid[1] - z3[1]) ** 2 + (asteroid[2] - z3[2]) ** 2);
  const d4 = Math.sqrt((asteroid[0] - z4[0]) ** 2 + (asteroid[1] - z4[1]) ** 2 + (asteroid[2] - z4[2]) ** 2);

  const x = (Math.pow(d1, 2) - Math.pow(d2, 2) + Math.pow(z2[0], 2)) / (2 * z2[0]);
  const y = (Math.pow(d1, 2) - Math.pow(d3, 2) + Math.pow(z3[1], 2)) / (2 * z3[1]);
  const z = (Math.pow(d1, 2) - Math.pow(d4, 2) + Math.pow(z4[2], 2)) / (2 * z4[2]); 

  result.meteor_position = [+x.toFixed(2), +y.toFixed(2), +z.toFixed(2)];
  result.zonts_coordinates = [z1, z2, z3, z4];
  result.zonts_qt = [z1, z2, z3, z4].length;

  return result;
}

console.log(find_meteor(asteroid));

// 5 task
function count_nines(n) {
  let count = 0;

  for (let i = 0; i <= n; i++) {
    const digit = i.toString();

    for (const char of digit) {
      if (char === "9") {
        count++;
      }
    }
  }

  return count;
}

console.log(count_nines(20));

// 6 task
function getPermutation(items, k) {
  const circle = [...items];
  const result = [];
  let position = 0;

  while (circle.length > 0) {
    position = (position + k - 1) % circle.length;
    result.push(circle[position]);
    circle.splice(position, 1);
  }

  return result;
}

console.log(getPermutation([1, 2, 3, 6, 9, 12, 40], 3));

// 7 task
function rgb_to_hex(r, g, b) {
  const R = Math.min(255, Math.max(0, r)).toString(16).padStart(2, "0").toUpperCase();
  const G = Math.min(255, Math.max(0, g)).toString(16).padStart(2, "0").toUpperCase();
  const B = Math.min(255, Math.max(0, b)).toString(16).padStart(2, "0").toUpperCase();

  return `${R}${G}${B}`;
}

console.log(rgb_to_hex(255, 0, 0));