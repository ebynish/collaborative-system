import React, { useState } from 'react';
import { Box, Button, VStack, HStack } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // Import the Filler plugin
} from 'chart.js';

// Register Chart.js components, including the Filler plugin
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // Register the Filler plugin
);

// Sample dataset for different views
const chartData = {
  day: { labels: ['12 AM', '6 AM', '12 PM', '6 PM', '11:59 PM'], data: [5, 10, 15, 20, 25] },
  week: { labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], data: [10, 20, 15, 25, 30, 35, 40] },
  month: { labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], data: [100, 150, 120, 180] },
  year: { labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'], data: [20, 20, 25, 24, 24, 27, 30, 35] }
};

const OverviewChart = () => {
  const [view, setView] = useState('year');

  const currentData = chartData[view] || { labels: [], data: [] };
  const safeData = Array.isArray(currentData.data) ? currentData.data : [];

  const data = {
    labels: currentData.labels,
    datasets: [
      {
        label: 'Contributions',
        data: safeData,
        borderColor: '#F2FAD8', // Line color
        backgroundColor: 'rgba(242, 250, 216, 0.4)', // Stronger opacity for visibility
        tension: 0.3, // Smooth curve
        fill: true, // Enables area fill
        borderWidth: 4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    height: 340,               // You can explicitly set height (if maintainAspectRatio is false)
    width: '100%',              
    plugins: {
      legend: { display: false },
      // title: { display: true, text: `Contributions - ${view.toUpperCase()}` }
    },
    scales: {
      x: {
        grid: { display: true }
      },
      y: {
        display: false, // Hide y-axis
        grid: { display: false }
      }
    }
  };

  return (
    <Box p={4} >
      <VStack spacing={1} align="stretch">
      <HStack spacing={1} flex={1} justifyContent="flex-end" alignItems="center">
        {['day', 'week', 'month', 'year'].map((type) => (
          <Button
            fontSize={10}
            key={type}
            background={"white"}
            border={view === type ? '1px solid black' : '0px solid black'}
            outlineWidth={view === type ? 'thin' : 'ghost'}
            onClick={() => setView(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Button>
        ))}
      </HStack>

        <Box  height={"334px"}>
          <Line data={data} options={options} />
        </Box>
      </VStack>
    </Box>
  );
};

export default OverviewChart;
