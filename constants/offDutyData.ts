export interface OffDutyEmployee {
  id: string;
  name: string;
  team: string;
  status: string;
}

export const offDutyEmployees: OffDutyEmployee[] = [
  {
    id: "RS",
    name: "rahul Singh",
    team: "default",
    status: "Weekly Off"
  },
  {
    id: "MB",
    name: "Mohan Bishnoi",
    team: "Sales",
    status: "Sick Leave"
  },
  {
    id: "PJ",
    name: "Pranav Jadli",
    team: "Marketing",
    status: "Vacation"
  },
  {
    id: "KV",
    name: "Kumar Viswas",
    team: "Development",
    status: "Weekly Off"
  }
]; 