"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { expenseData, ExpensePeriod } from "@/constants/expenseData";
import { cn } from "@/lib/utils";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useState } from "react";

export default function ExpenseOverview() {
  const [selectedPeriod, setSelectedPeriod] = useState<ExpensePeriod>('this-month');

  const currentData = expenseData[selectedPeriod];
  
  const chartOptions = {
    chart: {
      type: 'pie',
      height: 200,
      backgroundColor: 'transparent',
      marginRight: 0
    },
    title: {
      text: null
    },
    plotOptions: {
      pie: {
        innerSize: '0%',
        size: '85%',
        dataLabels: {
          enabled: true,
          distance: -25,
          style: {
            fontWeight: 'bold',
            color: 'white',
            fontSize: '16px'
          },
        },
        showInLegend: false
      }
    },
    series: [{
      name: 'Expenses',
      data: currentData.breakdown.map(item => ({
        name: item.label,
        y: item.percentage,
        color: item.color
      }))
    }],
    credits: { enabled: false }
  };

  return (
    <Card className="border border-gray-100 shadow-none">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
          <h2 className="text-base font-semibold text-gray-900">Expense Overview</h2>
          <Select 
            defaultValue="this-month"
            onValueChange={(value: ExpensePeriod) => setSelectedPeriod(value)}
          >
            <SelectTrigger className="w-[130px] h-9 text-sm bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-none focus-visible:ring-none focus:ring-white">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="last-3-months">Last 3 Months</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
          <div className="w-full lg:w-[45%] xl:w-1/2 min-w-[160px] max-w-[200px] lg:max-w-none">
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
          </div>

          <div className="w-full lg:w-[55%] xl:w-1/2 flex flex-col gap-2">
            {[currentData.total, ...currentData.breakdown].map((item, index) => (
              <div 
                key={index} 
                className={cn(
                  "flex items-center justify-between py-0.5",
                  index === 0 && "pb-2 mb-1 border-b border-gray-100"
                )}
              >
                <div className="flex items-center gap-2">
                  {item.color && (
                    <div 
                      className="w-2.5 h-2.5 rounded-sm flex-shrink-0" 
                      style={{ backgroundColor: item.color }}
                    />
                  )}
                  <span className="text-sm text-gray-600">{item.label}</span>
                </div>
                <div className="text-sm font-medium text-gray-900 whitespace-nowrap">
                  {item.amount}
                  <span className="text-gray-500 ml-1">({item.count})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 