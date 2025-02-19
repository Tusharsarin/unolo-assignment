import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function TeamwiseAttendance() {
  const teams = [
    { name: "Bond", punchedIn: 0, punchedOut: 1 },
    { name: "default", punchedIn: 2, punchedOut: 5 },
    { name: "Om Bhagwan", punchedIn: 1, punchedOut: 0 },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="flex-none p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Teamwise Attendance</h2>
      </div>
      <div className="flex-1 p-6">
        <Table>
          <TableBody>
            {teams.map((team) => (
              <TableRow key={team.name}>
                <TableCell className="font-medium">{team.name}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    {team.punchedIn}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    {team.punchedOut}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
} 