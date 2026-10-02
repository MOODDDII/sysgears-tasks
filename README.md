# SysGears Tasks

This workspace contains JavaScript utilities for three different problems:

1. length conversion
2. sorting objects in an array
3. finding a meteor position in 3D space

## 1) Length conversion

The `convert_length` function in `index.js` converts a value from one unit to another.

### Example

```javascript
console.log(convert_length('km', 35, 'mi'));
```

Output:

```javascript
35 km = 21.7 mi
```

### Behavior

- It uses a table of conversion factors to meters.
- It converts the original value into meters.
- It converts the result into the target unit.
- It returns a formatted string with one decimal place.

---

## 2) Sorting data

The `get_sorted` function in `index.js` sorts an array of objects by any selected key.

### Example

```javascript
console.log(get_sorted(input_data, 'name'));
console.log(get_sorted(input_data, 'rating', true));
```

### Behavior

- Creates a shallow copy of the input array.
- Sorts by the requested key.
- Handles numeric values and string values correctly.
- Supports reverse order with the `reversed` flag.

---

## 3) Meteor position calculation

The `find_meteor` function in `index.js` generates a random asteroid position and estimates its location in relation to four known zont coordinates.

### Example

```javascript
console.log(find_meteor());
```

### Returned structure

```javascript
{
  meteor_position: [x, y, z],
  zonts_coordinates: [[0, 0, 0], [100, 0, 0], [0, 100, 0], [0, 0, 100]],
  zonts_qt: 4
}
```

This script uses 3D distance calculations and a coordinate geometry formula to estimate the meteor's position.

---

## Running the project

Use Node.js to run each file:

```bash
node index.js
```

The project is a small collection of JavaScript exercises and utility functions demonstrating unit conversion, sorting, and 3D geometry calculations.