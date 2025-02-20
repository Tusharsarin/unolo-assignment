export interface Employee {
  id: string;
  name: string;
  code?: string;
  attendance: {
    status: 'punched_in' | 'punched_out' | 'never_marked',
    time?: string,
    location?: string
  };
  lastLocation?: string;
  lastSeen?: string;
}

export const employees: Employee[] = [
  {
    id: "KV",
    name: "Kumar Viswas",
    attendance: {
      status: "never_marked",
    }
  },
  {
    id: "MT",
    name: "Mayur Tyagi",
    attendance: {
      status: "punched_in",
      time: "Today at 5:14 PM",
      location: "Unolo"
    },
    lastLocation: "514 The Palm Springs Plaza, Golf Course Rd, DLF Phase 5, Sector 54, Gurugram",
    lastSeen: "7 hours ago"
  },
  {
    id: "MB",
    name: "Mohan Bishnoi",
    code: "123",
    attendance: {
      status: "punched_out",
      time: "19-12-2024"
    },
    lastLocation: "Vikas Marg, South City II, Sector 49, Gurugram",
    lastSeen: "2 months ago"
  },
  {
    id: "OB",
    name: "OM BHAGWAN",
    attendance: {
      status: "punched_in",
      time: "Today at 4:27 PM",
      location: "Unolo"
    },
    lastLocation: "514 The Palm Springs Plaza, Golf Course Rd, DLF Phase 5, Sector 54, Gurugram",
    lastSeen: "7 hours ago"
  },
  {
    id: "PJ",
    name: "Pranav Jadli",
    code: "0012",
    attendance: {
      status: "punched_out",
      time: "24-12-2024"
    },
    lastLocation: "514 The Palm Springs Plaza, Golf Course Rd, DLF Phase 5, Sector 54, Gurugram",
    lastSeen: "2 months ago"
  },
  {
    id: "RS",
    name: "rahul Singh",
    attendance: {
      status: "punched_out",
      time: "Today at 7:30 AM"
    },
    lastLocation: "Sector 46, Gurugram",
    lastSeen: "18 hours ago"
  }
]; 