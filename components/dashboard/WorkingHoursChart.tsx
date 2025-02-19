"use client";
import { Card, CardContent } from "@/components/ui/card";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function WorkingHoursChart() {
  const chartOptions = {
    chart: {
      type: 'column',
      height: '300px'
    },
    title: {
      text: 'Daily Average Working Hours',
      align: 'left',
      style: { fontSize: '14px' }
    },
    xAxis: {
      categories: ['03-02', '06-02', '09-02', '12-02', '15-02', '18-02', '21-02', '24-02', '28-02']
    },
    yAxis: {
      title: { text: 'Working Hours' },
      max: 2
    },
    series: [{
      name: 'Hours',
      data: [1.1, 0.8, 0.4, 1.0, 1.3, 0, 0, 0, 0],
      color: '#2563eb'
    }],
    credits: { enabled: false }
  };

  return (
    <Card className="border-none shadow-none">
      <CardContent>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </CardContent>
    </Card>
  );
} 