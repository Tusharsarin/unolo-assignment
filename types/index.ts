export interface Employee {
  id: string;
  name: string;
  email: string;
  team: string;
  status: 'active' | 'inactive';
  lastLocation?: {
    lat: number;
    lng: number;
    address: string;
    timestamp: string;
  };
}

export interface AttendanceRecord {
  id: string;
  employeeId: string;
  type: 'punch_in' | 'punch_out';
  timestamp: string;
  location?: {
    lat: number;
    lng: number;
    address: string;
  };
}

export interface Team {
  id: string;
  name: string;
  leaderId: string;
  memberCount: number;
}

// Add more types as needed 