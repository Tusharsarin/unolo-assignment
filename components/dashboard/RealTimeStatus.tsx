"use client";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeaderWithTooltip } from "@/components/ui/card-header-with-tooltip";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";

export default function RealTimeStatus() {
  const [isLoading, setIsLoading] = useState(true);
  const [isClientReady, setIsClientReady] = useState(false);

  useEffect(() => {
    setIsClientReady(true);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const chartOptions = {
    chart: {
      type: 'pie',
      height: '200px',
    },
    title: null,
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '140%',
        innerSize: '60%',
        dataLabels: {
          enabled: true,
          distance: -25,
          style: {
            fontWeight: 'bold',
            color: 'white'
          },
          formatter: function (this: Highcharts.Point): string {
            return this.y?.toString() ?? '0';
          }
        }
      }
    },
    series: [{
      name: 'Employees',
      data: [
        {
          name: 'Punched In',
          y: 3,
          color: '#4CAF50' // green
        },
        {
          name: 'Punched Out',
          y: 6,
          color: '#FF5252' // red
        }
      ]
    }],
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    credits: {
      enabled: false
    }
  };

  return (
    <div className="h-full flex flex-col">
      <CardHeaderWithTooltip 
        title="Real Time Status"
        tooltip="Shows the current status of all employees - who is punched in and who is punched out"
      />
      <div className="flex-1 p-4 flex items-center justify-center">
        <Card className="border-none shadow-none w-full">
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-2 items-center"><div className="w-3 h-3 rounded-full bg-green-500" />3</div>
                <span className="text-sm">Punched In</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-2 items-center"><div className="w-3 h-3 rounded-full bg-red-500" /> 6</div>
                <span className="text-sm">Punched Out</span>
              </div>
            </div>
            {isClientReady && (
              <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
              />
            )}
            <div className="text-center mt-2">
              <span className="text-sm text-gray-500">All Employees</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 