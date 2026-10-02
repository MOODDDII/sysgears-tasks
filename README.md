# Task Description

This project contains two JavaScript utility functions:

## 1) convert_length(type, num, to)

The `convert_length` function converts a value from one unit of length to another.

### How it works

- It uses a `meter_based_values` object that stores conversion factors for common length units.
- It converts the input value into meters.
- Then it converts the value from meters to the target unit.
- Finally, it returns a formatted string.

### Example

```javascript
console.log(convert_length('km', 35, 'mi'));
```

Output:

```javascript
35 km = 21.7 mi
```

### Notes

- The conversion is based on metric meters.
- The result is rounded to 1 decimal place using `toFixed(1)`.
- The function returns a string, not a number.

---

## 2) get_sorted(data, key, reversed)

The `get_sorted` function sorts an array of objects by a selected property.

### How it works

- It creates a copy of the array using `[...data]`.
- It sorts the data based on the provided `key`.
- If the property value is numeric, it subtracts values.
- If the property value is a string, it compares them using `localeCompare`.
- If `reversed` is `true`, the sorted result is reversed.

### Example

```javascript
console.log(get_sorted(input_data, "name"));
console.log(get_sorted(input_data, "rating", true));
```

### Notes

- It works with arrays of objects.
- It preserves the original array and sorts a copy instead of changing the original.
- The function can sort alphabetically or numerically depending on the field type.

---

## Summary

These functions are useful for:

- converting values between different length units
- sorting user or data records by name, rating, or other fields

They are simple examples of reusable JavaScript utility logic.