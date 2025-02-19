"use client";
import { Card, CardContent } from "@/components/ui/card";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function ExpenseOverview() {
  const chartOptions = {
    chart: {
      type: 'pie',
      height: '300px',
      backgroundColor: 'transparent'
    },
    title: {
      text: 'Expense Overview',
      align: 'left',
      style: { fontSize: '14px' }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Amount',
      data: [
        { name: 'Pending Expenses', y: 38.06, color: '#f59e0b' },
        { name: 'Approved Expenses', y: 0, color: '#22c55e' },
        { name: 'Rejected Expenses', y: 0, color: '#ef4444' },
        { name: 'Paid Out', y: 0, color: '#3b82f6' }
      ]
    }],
    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical',
      itemMarginBottom: 10,
      symbolRadius: 0,
      squareSymbol: true,
      itemStyle: {
        color: '#666',
        fontWeight: 'normal'
      }
    },
    tooltip: {
      pointFormat: '₹{point.y:.2f}'
    },
    credits: { enabled: false }
  };

  return (
    <Card className="border-none shadow-none">
      <CardContent>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-sm font-medium">Total Expenses</h3>
            <div className="mt-1">
              <span className="text-2xl font-semibold">₹38.06</span>
              <span className="text-sm text-gray-500 ml-2">(6)</span>
            </div>
          </div>
          <select className="text-sm border rounded-md px-2 py-1">
            <option>This Month</option>
          </select>
        </div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </CardContent>
    </Card>
  );
} 