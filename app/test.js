
const smartcar = require('smartcar'); 
const token = '2ab3f348-5a9a-4803-b230-14ca319e21f0'
(async function hello() {
  
  // List all vehicles associated with this access token
  const {vehicles} = await smartcar.getVehicleIds(token);
  
  // Use the first vehicle
  const vehicle = new smartcar.Vehicle(vehicles[0], token);
  
  // Lock the vehicle
  await vehicle.lock();
  
  // Unlock the vehicle
  await vehicle.unlock();
})();