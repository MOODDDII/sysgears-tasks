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