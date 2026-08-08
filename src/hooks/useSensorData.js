import { useEffect, useState } from "react";
import sensorData from "../data/sensorData";

function generateValue(sensor) {
  if (sensor.title === "Temperature") {
    return Number((24 + Math.random() * 12).toFixed(1));
  }

  if (sensor.title === "Humidity") {
    return Math.floor(45 + Math.random() * 40);
  }

  if (sensor.title === "Pressure") {
    return Math.floor(990 + Math.random() * 35);
  }

  if (sensor.title === "Battery") {
    return Math.floor(70 + Math.random() * 31);
  }

  if (sensor.title === "Air Quality") {
    return Math.floor(30 + Math.random() * 120);
  }

  return sensor.value;
}

function useSensorData() {
  const [sensors, setSensors] = useState(sensorData);

  const [history, setHistory] = useState(() =>
    sensorData.map((sensor) => ({
      id: sensor.id,
      title: sensor.title,
      data: [sensor.value],
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSensors((currentSensors) => {
        const updatedSensors = currentSensors.map((sensor) => ({
          ...sensor,
          value: generateValue(sensor),
        }));

        setHistory((currentHistory) =>
          currentHistory.map((item) => {
            const updatedSensor = updatedSensors.find(
              (sensor) => sensor.id === item.id
            );

            return {
              ...item,
              data: [...item.data, updatedSensor.value].slice(-12),
            };
          })
        );

        return updatedSensors;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return { sensors, history };
}

export default useSensorData;