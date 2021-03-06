var Zone = {
  None: 0,
  Front: 1,
  Middle : 1 << 1,
  Right : 1 << 2,
  Left : 1 << 3,
  Rear : 1 << 4,
  Center : 1 << 5,
  LeftSide : 1 << 6,
  RightSide : 1 << 7,
  FrontSide : 1 << 8,
  BackSide : 1 << 9
};

bluemonkey.loadModule("");

bluemonkey.createCustomProperty("VehicleSpeed", 10);
bluemonkey.createCustomProperty("EngineSpeed", 5000);
bluemonkey.createCustomProperty("PowertrainTorque", 324);
bluemonkey.createCustomProperty("AcceleratorPedalPosition", 50);
bluemonkey.createCustomProperty("ThrottlePosition", 50);
bluemonkey.createCustomProperty("TransmissionModeW3C", "park");
bluemonkey.createCustomProperty("TransmissionGearPosition", 1);
bluemonkey.createCustomProperty("CruiseControlActive", false);
bluemonkey.createCustomProperty("CruiseControlSpeed", 10);

///LightStatus:
bluemonkey.createCustomProperty("LightHead", false);
bluemonkey.createCustomProperty("LightRightTurn", false);
bluemonkey.createCustomProperty("LightLeftTurn", false);
bluemonkey.createCustomProperty("LightBrake", false);
bluemonkey.createCustomProperty("LightFog", true);
bluemonkey.createCustomProperty("LightHazard", false);
bluemonkey.createCustomProperty("LightParking", false);
bluemonkey.createCustomProperty("LightHighBeam", false);
bluemonkey.createCustomProperty("LightAutomatic", true);
bluemonkey.createCustomProperty("LightDynamicHighBeam", false);

bluemonkey.createCustomProperty("Horn", false);
bluemonkey.createCustomProperty("Chime", false);

///Fuel:
bluemonkey.createCustomProperty("FuelLevel", 90);
bluemonkey.createCustomProperty("FuelRange", 100);
bluemonkey.createCustomProperty("FuelConsumption", 10);
bluemonkey.createCustomProperty("FuelEconomy", 10);
bluemonkey.createCustomProperty("FuelAverageEconomy", 10);
bluemonkey.createCustomProperty("FuelAverageConsumption", 10);
bluemonkey.createCustomProperty("FuelConsumptionSinceRestart", 10);
bluemonkey.createCustomProperty("LightHighBeam", false);
bluemonkey.createCustomProperty("LightAutomatic", true);
bluemonkey.createCustomProperty("FuelTimeSinceRestart", 10000);

///EngineOil:
bluemonkey.createCustomProperty("EngineOilTemperature", 60);
bluemonkey.createCustomProperty("EngineOilPressure", 60);
bluemonkey.createCustomProperty("EngineOilChangeIndicator", false);
bluemonkey.createCustomProperty("EngineOilLifeRemaining", 30);

bluemonkey.createCustomProperty("AccelerationX", 0);
bluemonkey.createCustomProperty("AccelerationY", 0);
bluemonkey.createCustomProperty("AccelerationZ", 10);

bluemonkey.createCustomProperty("SteeringWheelAngleW3C", 10);
bluemonkey.createCustomProperty("WheelTick", 1000);

bluemonkey.createCustomProperty("EngineCoolantLevel", 100);
bluemonkey.createCustomProperty("EngineCoolantTemperature", 60);

bluemonkey.createCustomProperty("IgnitionTimeOn", 5000);
bluemonkey.createCustomProperty("IgnitionTimeOff", 5000);

bluemonkey.createCustomProperty("YawRate", 128);
bluemonkey.createCustomProperty("WheelBrake", false);

bluemonkey.createCustomProperty("BrakesWorn", false, Zone.Front | Zone.Right)
bluemonkey.createCustomProperty("BrakeFluidLevel", 100, Zone.Front | Zone.Right)
bluemonkey.createCustomProperty("BrakeFluidLevelLow", false, Zone.Front | Zone.Right)
bluemonkey.createCustomProperty("BrakePadWear", 0, Zone.Front | Zone.Right)

bluemonkey.createCustomProperty("WasherFluidLevel", 100);
bluemonkey.createCustomProperty("WasherFluidLevelLow", false);

bluemonkey.createCustomProperty("MalfunctionIndicatorOn", false);

var speedProperty = bluemonkey.subscribeTo("VehicleSpeed");

var testTimer = bluemonkey.createTimer();
 testTimer.interval = 3000;
 testTimer.singleShot = false;
 testTimer.timeout.connect(function() {
  //VehicleSpeed
  speedProperty.value = Math.floor((Math.random() * 100) + 1);
 });
