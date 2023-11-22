export default function data() {
  const table_data = [
    {
      "timestamp": "2023-09-25 01:00:00",
      "load actual": 1.87,
      "loac prediction": 2.06,
      "irradiance": 0.0,
      "temperature": 19.6
    },
    {
      "timestamp": "2023-09-25 02:00:00",
      "load actual": 1.92,
      "loac prediction": 2.11,
      "irradiance": 0.0,
      "temperature": 18.9
    },
    {
      "timestamp": "2023-09-25 03:00:00",
      "load actual": 1.8,
      "loac prediction": 1.98,
      "irradiance": 0.0,
      "temperature": 18.9
    },
    {
      "timestamp": "2023-09-25 04:00:00",
      "load actual": 1.85,
      "loac prediction": 2.04,
      "irradiance": 0.0,
      "temperature": 19.2
    },
    {
      "timestamp": "2023-09-25 05:00:00",
      "load actual": 1.82,
      "loac prediction": 2.0,
      "irradiance": 5.0,
      "temperature": 18.7
    },
    {
      "timestamp": "2023-09-25 06:00:00",
      "load actual": 9.0,
      "loac prediction": 9.9,
      "irradiance": 102.0,
      "temperature": 19.2
    },
    {
      "timestamp": "2023-09-25 07:00:00",
      "load actual": 50.99,
      "loac prediction": 56.09,
      "irradiance": 329.0,
      "temperature": 23.6
    },
    {
      "timestamp": "2023-09-25 08:00:00",
      "load actual": 82.28,
      "loac prediction": 90.51,
      "irradiance": 566.0,
      "temperature": 25.6
    },
    {
      "timestamp": "2023-09-25 09:00:00",
      "load actual": 73.09,
      "loac prediction": 80.4,
      "irradiance": 758.0,
      "temperature": 27.7
    },
    {
      "timestamp": "2023-09-25 10:00:00",
      "load actual": 78.27,
      "loac prediction": 86.1,
      "irradiance": 865.0,
      "temperature": 29.0
    },
    {
      "timestamp": "2023-09-25 11:00:00",
      "load actual": 66.81,
      "loac prediction": 73.49,
      "irradiance": 977.0,
      "temperature": 30.2
    },
    {
      "timestamp": "2023-09-25 12:00:00",
      "load actual": 106.25,
      "loac prediction": 116.88,
      "irradiance": 1028.0,
      "temperature": 30.9
    },
    {
      "timestamp": "2023-09-25 13:00:00",
      "load actual": 146.69,
      "loac prediction": 161.36,
      "irradiance": 902.0,
      "temperature": 31.7
    },
    {
      "timestamp": "2023-09-25 14:00:00",
      "load actual": 95.01,
      "loac prediction": 104.51,
      "irradiance": 696.0,
      "temperature": 31.4
    },
    {
      "timestamp": "2023-09-25 15:00:00",
      "load actual": 115.67,
      "loac prediction": 127.23,
      "irradiance": 367.0,
      "temperature": 30.8
    },
    {
      "timestamp": "2023-09-25 16:00:00",
      "load actual": 42.88,
      "loac prediction": 47.17,
      "irradiance": 74.0,
      "temperature": 30.2
    },
    {
      "timestamp": "2023-09-25 17:00:00",
      "load actual": 23.87,
      "loac prediction": 26.25,
      "irradiance": 26.0,
      "temperature": 29.1
    },
    {
      "timestamp": "2023-09-25 18:00:00",
      "load actual": 11.63,
      "loac prediction": 12.79,
      "irradiance": 0.0,
      "temperature": 27.6
    },
    {
      "timestamp": "2023-09-25 19:00:00",
      "load actual": 2.55,
      "loac prediction": 2.8,
      "irradiance": 0.0,
      "temperature": 25.8
    },
    {
      "timestamp": "2023-09-25 20:00:00",
      "load actual": 2.75,
      "loac prediction": 3.03,
      "irradiance": 0.0,
      "temperature": 24.4
    },
    {
      "timestamp": "2023-09-25 21:00:00",
      "load actual": 1.67,
      "loac prediction": 1.84,
      "irradiance": 0.0,
      "temperature": 23.5
    },
    {
      "timestamp": "2023-09-25 22:00:00",
      "load actual": 1.62,
      "loac prediction": 1.78,
      "irradiance": 0.0,
      "temperature": 22.9
    },
    {
      "timestamp": "2023-09-25 23:00:00",
      "load actual": 1.63,
      "loac prediction": 1.79,
      "irradiance": 0.0,
      "temperature": 22.4
    },
    // Dan seterusnya hingga 100 data
  ];
  const transformedData = table_data.map(item => {
    const timestamp = new Date(item.timestamp);
    const formattedDate = `${timestamp.getDate().toString().padStart(2, '0')}-${(timestamp.getMonth() + 1).toString().padStart(2, '0')}-${timestamp.getFullYear()}`;

    return {
      Tanggal: formattedDate,
      Jam: timestamp.toLocaleTimeString('en-US', { hour12: false }),
      LoadActual: item["load actual"],
      LoadPrediction: item["loac prediction"],
      Irradiance: item["irradiance"],
      Temperature: item["temperature"]
    };
  });

  return {
    columns: [
      { name: "Tanggal", align: "left" },
      { name: "Jam", align: "center" },
      { name: "LoadActual", align: "center" },
      { name: "LoadPrediction", align: "center" },
      { name: "Irradiance", align: "center" },
      { name: "Temperature", align: "center" },
    ],

    rows: transformedData,
  };
}