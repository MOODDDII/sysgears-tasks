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