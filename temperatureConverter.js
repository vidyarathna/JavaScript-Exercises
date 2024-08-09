// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Function to convert Celsius to Kelvin
function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Function to convert Fahrenheit to Kelvin
function fahrenheitToKelvin(fahrenheit) {
  return (fahrenheit - 32) * 5/9 + 273.15;
}

// Function to convert Kelvin to Celsius
function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

// Function to convert Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvin) {
  return (kelvin - 273.15) * 9/5 + 32;
}

// Function to handle user input and conversion
function handleUserInput() {
  const temperature = parseFloat(prompt('Enter the temperature to convert:'));
  const unit = prompt('Enter the unit of the temperature (C for Celsius, F for Fahrenheit, K for Kelvin):').toUpperCase();

  if (isNaN(temperature) || !['C', 'F', 'K'].includes(unit)) {
    alert('Invalid input. Please enter a valid temperature and unit.');
    return;
  }

  let convertedTemperatures;

  switch (unit) {
    case 'C':
      convertedTemperatures = `Celsius: ${temperature}\nFahrenheit: ${celsiusToFahrenheit(temperature)}\nKelvin: ${celsiusToKelvin(temperature)}`;
      break;
    case 'F':
      convertedTemperatures = `Celsius: ${fahrenheitToCelsius(temperature)}\nFahrenheit: ${temperature}\nKelvin: ${fahrenheitToKelvin(temperature)}`;
      break;
    case 'K':
      convertedTemperatures = `Celsius: ${kelvinToCelsius(temperature)}\nFahrenheit: ${kelvinToFahrenheit(temperature)}\nKelvin: ${temperature}`;
      break;
    default:
      alert('Invalid unit.');
      return;
  }

  alert(`Converted Temperatures:\n${convertedTemperatures}`);
}

// Call the function to handle user input
handleUserInput();
