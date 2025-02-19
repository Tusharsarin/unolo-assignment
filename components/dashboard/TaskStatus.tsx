"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function TaskStatus() {
  const chartOptions = {
    chart: {
      type: 'pie',
      height: '300px',
      backgroundColor: 'transparent'
    },
    title: {
      text: 'Task Status Overview',
      align: 'left',
      style: { fontSize: '14px' }
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '140%',
        innerSize: '60%',
        dataLabels: {
          enabled: true,
          distance: -30,
          style: {
            fontWeight: 'bold',
            color: 'white'
          },
          formatter: function(this: Highcharts.Point): string {
            return this.y?.toString() ?? '0';
          }
        }
      }
    },
    series: [{
      name: 'Tasks',
      data: [
        { name: 'Not Yet Started', y: 0, color: '#94a3b8' },
        { name: 'Delayed', y: 0, color: '#ef4444' },
        { name: 'In Progress', y: 0, color: '#3b82f6' },
        { name: 'Completed', y: 1, color: '#22c55e' }
      ]
    }],
    legend: {
      enabled: true,
      align: 'center',
      verticalAlign: 'bottom',
      layout: 'horizontal',
      itemStyle: {
        color: '#666',
        fontWeight: 'normal'
      }
    },
    credits: { enabled: false }
  };

  return (
    <Card className="border-none shadow-none">
      <CardContent>
        <div className="text-center mb-8">
          <div className="text-4xl font-semibold">1</div>
          <div className="text-sm text-gray-500">Total Tasks</div>
        </div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </CardContent>
    </Card>
  );
} 