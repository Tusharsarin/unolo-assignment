"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TimePeriod, workingHoursData } from "@/constants/chartData";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useState } from "react";

export default function WorkingHoursChart() {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('thisMonth');

  const getChartOptions = (period: TimePeriod) => ({
    chart: {
      type: 'column',
      height: 300,
      backgroundColor: 'transparent',
      spacingBottom: 0,
      spacingRight: 20,
      spacingLeft: 0
    },
    title: {
      text: null
    },
    xAxis: {
      categories: workingHoursData[period].dates,
      tickLength: 0,
      lineColor: '#E5E7EB',
      labels: {
        style: {
          color: '#6B7280',
          fontSize: '12px'
        }
      },
      tickmarkPlacement: 'between',
      startOnTick: true,
      endOnTick: true,
      minPadding: 0,
      maxPadding: 0
    },
    yAxis: {
      title: {
        text: 'Working Hours',
        style: {
          color: '#6B7280',
          fontSize: '12px'
        }
      },
      max: 1.6,
      tickInterval: 0.4,
      gridLineColor: '#E5E7EB',
      labels: {
        style: {
          color: '#6B7280',
          fontSize: '12px'
        },
        format: '{value:.1f}'
      }
    },
    plotOptions: {
      column: {
        borderRadius: 0,
        pointPadding: 0,
        groupPadding: 0,
        borderWidth: 0,
        pointPlacement: 'between',
        stacking: undefined,
        grouping: false,
        pointRange: 1
      },
      series: {
        states: {
          hover: {
            brightness: -0.1
          }
        }
      }
    },
    series: [{
      name: 'Hours',
      data: workingHoursData[period].hours,
      color: '#3b82f6',
      showInLegend: false
    }],
    tooltip: {
      backgroundColor: '#FFF',
      borderColor: '#E5E7EB',
      borderRadius: 8,
      padding: 12,
      shadow: {
        offsetX: 0,
        offsetY: 4,
        opacity: 0.1,
        width: 8
      },
      style: {
        color: '#374151'
      }
    },
    credits: { enabled: false }
  });

  return (
    <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Daily Average Working Hours</h2>
          <Select 
            defaultValue="thisMonth"
            onValueChange={(value: TimePeriod) => setSelectedPeriod(value)}
          >
            <SelectTrigger className="w-[130px] h-9 text-sm bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-none focus-visible:ring-none focus:ring-white">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="thisMonth">This Month</SelectItem>
              <SelectItem value="lastMonth">Last Month</SelectItem>
              <SelectItem value="last3Months">Last 3 Months</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <HighchartsReact 
          highcharts={Highcharts} 
          options={getChartOptions(selectedPeriod)} 
        />
      </CardContent>
    </Card>
  );
} 