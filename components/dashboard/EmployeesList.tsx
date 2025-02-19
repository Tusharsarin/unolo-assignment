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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function EmployeesList() {
  const employees = [
    {
      id: "KV",
      name: "Kumar Viswas",
      attendance: "Never Marked Attendance",
      location: "NA",
      lastSeen: "",
    },
    {
      id: "MT",
      name: "Mayur Tyagi",
      attendance: "Punched In · Today at 5:14 PM",
      location: "514 The Palm Springs Plaza, Golf Course Rd, DLF Phase 5, Sector 54, Gu...",
      lastSeen: "7 hours ago",
    },
    // Add more employees as needed
  ];

  return (
    <Card className="border-none">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-sm font-medium">Employees (9)</CardTitle>
        <div className="flex items-center gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="new">New</SelectItem>
            </SelectContent>
          </Select>
          <Input
            placeholder="Search Here"
            className="max-w-[200px]"
          />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee</TableHead>
              <TableHead>Attendance</TableHead>
              <TableHead>Last Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{employee.id}</AvatarFallback>
                    </Avatar>
                    <span>{employee.name}</span>
                  </div>
                </TableCell>
                <TableCell>{employee.attendance}</TableCell>
                <TableCell>
                  <div>
                    <div>{employee.location}</div>
                    {employee.lastSeen && (
                      <div className="text-sm text-gray-500">{employee.lastSeen}</div>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
} 