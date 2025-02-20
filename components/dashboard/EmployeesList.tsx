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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Employee, employees } from "@/constants/employeesData";
import { FileX2 } from "lucide-react";
import { useMemo, useState } from "react";

export default function EmployeesList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const matchesSearch = employee.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      if (filter === "all") return matchesSearch;
      if (filter === "new") {
        // Example: Consider employees with recent activity as "new"
        return (
          matchesSearch &&
          employee.lastSeen &&
          employee.lastSeen.includes("hours ago")
        );
      }
      return matchesSearch;
    });
  }, [searchQuery, filter]);

  const getAttendanceText = (employee: Employee) => {
    switch (employee.attendance.status) {
      case "punched_in":
        return (
          <span className="text-green-600">
            Punched In · {employee.attendance.time}
            {employee.attendance.location && (
              <span className="text-gray-500">
                <br />
                From : {employee.attendance.location}
              </span>
            )}
          </span>
        );
      case "punched_out":
        return <span className="text-gray-600">Punched Out · {employee.attendance.time}</span>;
      case "never_marked":
        return <span className="text-red-500">Never Marked Attendance</span>;
      default:
        return "NA";
    }
  };

  return (
    <Card className="border-none shadow-none">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b border-gray-200">
        <CardTitle className="text-base font-semibold text-gray-900">
          Employees ({filteredEmployees.length})
        </CardTitle>
        <div className="flex items-center gap-2">
          <Select
            defaultValue="all"
            onValueChange={setFilter}
          >
            <SelectTrigger className="w-[100px] h-9 text-sm bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-none focus-visible:ring-none focus:ring-white">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="new">New</SelectItem>
            </SelectContent>
          </Select>
          <Input
            placeholder="Search By Employee Name"
            className="w-[200px] h-9 text-sm rounded-full focus:outline-none focus:ring-none focus-visible:ring-none focus:ring-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent className="p-2 pt-0 mt-2">
        <div className="border border-gray-200 rounded-md overflow-x-auto">
          <div className="min-w-[850px]">
            {/* Fixed Header */}
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="bg-gray-50/50 w-[250px]">Employee</TableHead>
                  <TableHead className="bg-gray-50/50 w-[250px]">Attendance</TableHead>
                  <TableHead className="bg-gray-50/50 w-[350px]">Last Location</TableHead>
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
                            <div>
                              <span className="font-medium text-gray-900">
                                {employee.name}
                              </span>
                              {employee.code && (
                                <span className="text-gray-500 ml-1">
                                  ({employee.code})
                                </span>
                              )}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="w-[250px]">
                          {getAttendanceText(employee)}
                        </TableCell>
                        <TableCell className="w-[350px]">
                          {employee.lastLocation !== "NA" ? (
                            <div>
                              <div className="text-gray-900">{employee.lastLocation}</div>
                              {employee.lastSeen && (
                                <div className="text-sm text-gray-500">
                                  {employee.lastSeen}
                                </div>
                              )}
                            </div>
                          ) : (
                            <span className="text-gray-500">NA</span>
                          )}
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