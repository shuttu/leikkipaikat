export const getDistance = (origin, destination) => {
  const lon1 = toRadian(origin[1]);
  const lat1 = toRadian(origin[0]);
  const lon2 = toRadian(destination[1]);
  const lat2 = toRadian(destination[0]);

  const deltaLat = lat2 - lat1;
  const deltaLon = lon2 - lon1;

  const a =
    Math.pow(Math.sin(deltaLat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon / 2), 2);
  const c = 2 * Math.asin(Math.sqrt(a));
  const earthRadius = 6371;
  return Math.round(c * earthRadius * 1000);
};

const toRadian = (degree) => {
  return (degree * Math.PI) / 180;
};

export const parseData = (data) => {
  const parsedData = [];
  if (data.includes("-")) {
    data = data.split("-");
    for (let i = 0; i < data.length; i++) {
      if (i < 1) {
        parsedData.push(
          data[i].trim()[0].toUpperCase() +
            data[i].trim().slice(1).toLowerCase()
        );
      } else {
        parsedData.push(
          " - " +
            data[i].trim()[0].toUpperCase() +
            data[i].trim().slice(1).toLowerCase()
        );
      }
    }
  } else if (data.includes(".")) {
    data = data.split(".");
    for (let i = 0; i < data.length; i++){
      if (i < 1) {
        parsedData.push(
          data[i].trim()[0].toUpperCase() +
            data[i].trim().slice(1).toLowerCase()
        );
      } else {
        parsedData.push(
          "." +
            data[i].trim()[0].toUpperCase() +
            data[i].trim().slice(1).toLowerCase()
        );
      }
    }
  } else {
    parsedData.push(data[0].toUpperCase() + data.slice(1).toLowerCase());
  }
  return parsedData;
};
