export const expenseData = {
  'this-month': {
    total: {
      label: 'Total Expenses',
      amount: '₹12,000',
      count: '15',
      color: undefined
    },
    breakdown: [
      {
        label: 'Pending Expenses',
        amount: '₹12,000',
        count: '15',
        color: '#f97316',
        percentage: 100
      },
      {
        label: 'Approved Expenses',
        amount: '₹0',
        count: '0',
        color: '#22c55e',
        percentage: 0
      },
      {
        label: 'Rejected Expenses',
        amount: '₹0',
        count: '0',
        color: '#ef4444',
        percentage: 0
      },
      {
        label: 'Paid Out',
        amount: '₹0',
        count: '0',
        color: '#3b82f6',
        percentage: 0
      }
    ]
  },
  'last-month': {
    total: {
      label: 'Total Expenses',
      amount: '₹25,000',
      count: '28',
      color: undefined
    },
    breakdown: [
      {
        label: 'Pending Expenses',
        amount: '₹8,000',
        count: '8',
        color: '#f97316',
        percentage: 32
      },
      {
        label: 'Approved Expenses',
        amount: '₹10,000',
        count: '12',
        color: '#22c55e',
        percentage: 40
      },
      {
        label: 'Rejected Expenses',
        amount: '₹2,000',
        count: '3',
        color: '#ef4444',
        percentage: 8
      },
      {
        label: 'Paid Out',
        amount: '₹5,000',
        count: '5',
        color: '#3b82f6',
        percentage: 20
      }
    ]
  },
  'last-3-months': {
    total: {
      label: 'Total Expenses',
      amount: '₹75,000',
      count: '85',
      color: undefined
    },
    breakdown: [
      {
        label: 'Pending Expenses',
        amount: '₹15,000',
        count: '20',
        color: '#f97316',
        percentage: 20
      },
      {
        label: 'Approved Expenses',
        amount: '₹30,000',
        count: '35',
        color: '#22c55e',
        percentage: 40
      },
      {
        label: 'Rejected Expenses',
        amount: '₹7,500',
        count: '10',
        color: '#ef4444',
        percentage: 10
      },
      {
        label: 'Paid Out',
        amount: '₹22,500',
        count: '20',
        color: '#3b82f6',
        percentage: 30
      }
    ]
  }
};

export type ExpensePeriod = 'this-month' | 'last-month' | 'last-3-months'; 