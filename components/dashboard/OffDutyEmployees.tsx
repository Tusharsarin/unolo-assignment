"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { offDutyEmployees } from "@/constants/offDutyData";
import { FileX2 } from "lucide-react";
import { useMemo, useState } from "react";

export default function OffDutyEmployees() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredEmployees = useMemo(() => {
    return offDutyEmployees.filter((employee) => {
      const matchesSearch = 
        employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.status.toLowerCase().includes(searchQuery.toLowerCase());

      switch (filter) {
        case "all":
          return matchesSearch;
        case "weekly_off":
          return matchesSearch && employee.status === "Weekly Off";
        case "sick_leave":
          return matchesSearch && employee.status === "Sick Leave";
        case "vacation":
          return matchesSearch && employee.status === "Vacation";
        default:
          return matchesSearch;
      }
    });
  }, [searchQuery, filter]);

  return (
    <Card className="border-none shadow-none">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b border-gray-200">
        <CardTitle className="text-base font-semibold text-gray-900">
          Off Duty Employees ({filteredEmployees.length})
        </CardTitle>
        <div className="flex items-center gap-2">
          <Select
            defaultValue="all"
            onValueChange={setFilter}
          >
            <SelectTrigger className="w-[130px] h-9 text-sm bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-none focus-visible:ring-none focus:ring-white">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="weekly_off">Weekly Off</SelectItem>
              <SelectItem value="sick_leave">Sick Leave</SelectItem>
              <SelectItem value="vacation">Vacation</SelectItem>
            </SelectContent>
          </Select>
          <Input
            placeholder="Search Here"
            className="w-[200px] h-9 text-sm rounded-full focus:outline-none focus:ring-none focus-visible:ring-none focus:ring-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent className="p-2 pt-0 mt-2">
        <div className="border border-gray-200 rounded-md overflow-x-auto">
          <div className="min-w-[700px]"> {/* Adjusted minimum width */}
            {/* Fixed Header */}
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="bg-gray-50/50 w-[250px]">Employee</TableHead>
                  <TableHead className="bg-gray-50/50 w-[200px]">Team Name</TableHead>
                  <TableHead className="bg-gray-50/50 w-[250px]">Status</TableHead>
                </TableRow>
              </TableHeader>
            </Table>

            {/* Scrollable Body */}
            <div className="h-[300px] overflow-y-auto">
              {filteredEmployees.length > 0 ? (
                <Table>
                  <TableBody>
                    {filteredEmployees.map((employee) => (
                      <TableRow key={employee.id} className="hover:bg-gray-50">
                        <TableCell className="w-[250px]">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="bg-blue-100 text-blue-600">
                                {employee.id}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-medium text-gray-900">
                              {employee.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="w-[200px] text-gray-600">
                          {employee.team}
                        </TableCell>
                        <TableCell className="w-[250px] text-gray-600">
                          {employee.status}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="flex flex-col items-center justify-center h-full py-8 text-gray-500">
                  <FileX2 className="h-12 w-12 mb-3 text-gray-400" />
                  <p className="text-base font-medium">No Records Found</p>
                  <p className="text-sm text-gray-400">
                    Try adjusting your search or filter to find what you are looking for.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 