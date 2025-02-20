"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TaskPeriod, taskStatusData } from "@/constants/taskData";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useState } from "react";

export default function TaskStatus() {
  const [selectedPeriod, setSelectedPeriod] = useState<TaskPeriod>('this-month');

  const getTaskData = (period: TaskPeriod) => {
    const data = taskStatusData[period];
    return [
      { name: 'Not Yet Started', value: data.notYetStarted, color: '#f97316' },
      { name: 'Delayed', value: data.delayed, color: '#3b82f6' },
      { name: 'In Progress', value: data.inProgress, color: '#0000ff' },
      { name: 'Completed', value: data.completed, color: '#22c55e' }
    ];
  };

  const currentTasks = getTaskData(selectedPeriod);

  const chartOptions = {
    chart: {
      type: 'pie',
      height: 180,
      backgroundColor: 'transparent',
      spacingTop: 0,
      spacingBottom: 0,
      spacingLeft: 0,
      spacingRight: 0
    },
    title: {
      text: null
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '130%',
        innerSize: '60%',
        dataLabels: {
          enabled: false
        },
        showInLegend: false
      }
    },
    series: [{
      name: 'Tasks',
      data: currentTasks.map(item => ({
        name: item.name,
        y: item.value,
        color: item.color
      }))
    }],
    credits: { enabled: false }
  };

  return (
    <Card className="border-none border-gray-100 shadow-none">
      <CardContent className="p-4 lg:p-5">
        <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-4">
          <h2 className="text-base font-semibold text-gray-900">Task Status Overview</h2>
          <Select 
            defaultValue="this-month"
            onValueChange={(value: TaskPeriod) => setSelectedPeriod(value)}
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

        <div className="flex flex-col items-center justify-between gap-4">
          {/* Status Indicators */}
          <div className="w-full lg:w-auto flex flex-wrap gap-y-3 gap-x-6">
            {currentTasks.map((task, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 min-w-[140px] flex-1 sm:flex-none"
              >
                <div 
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: task.color }} 
                />
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-gray-900">
                    {task.value}
                  </span>
                  <span className="text-sm text-gray-600 whitespace-nowrap">
                    {task.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Chart Section */}
          <div className="relative w-full lg:w-auto flex flex-col items-center pb-[50px]">
            <div className="w-[200px] h-[100px]">
              <HighchartsReact highcharts={Highcharts} options={chartOptions} />
            </div>
            <div className="absolute top-[60%] left-1/2 -translate-x-1/2 text-center">
              <div className="text-xl font-semibold text-gray-900">
                {taskStatusData[selectedPeriod].totalTasks}
              </div>
              <div className="text-sm text-gray-600">Total Tasks</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 