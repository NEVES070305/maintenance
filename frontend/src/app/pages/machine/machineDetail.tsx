import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MachineDetailPage = () => {
  // Mocked data for the chart
  const maintenanceData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Maintenance Count',
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const, // Explicitly set the type as a constant
      },
      title: {
        display: true,
        text: 'Maintenance History',
      },
    },
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Machine Details</h2>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Maintenance History</h3>
        <Bar data={maintenanceData} options={options} />
      </div>
    </div>
  );
};

export default MachineDetailPage;
