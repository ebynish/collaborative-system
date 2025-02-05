import { Box, Text } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Contributions",
        data: [5, 10, 20, 25, 40, 50, 25],
        fill: true,
        backgroundColor: "rgba(46, 69, 107, 0.1)",
        borderColor: "#2E456B",
      },
    ],
  };

  return (
    <Box>
      <Text fontSize="lg" mb="2">
        Contributions Over Time
      </Text>
      <Line data={data} />
    </Box>
  );
};
