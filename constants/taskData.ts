export const taskStatusData = {
  'this-month': {
    notYetStarted: 0,
    delayed: 0,
    inProgress: 0,
    completed: 1,
    totalTasks: 1
  },
  'last-month': {
    notYetStarted: 2,
    delayed: 1,
    inProgress: 3,
    completed: 5,
    totalTasks: 11
  },
  'last-3-months': {
    notYetStarted: 5,
    delayed: 3,
    inProgress: 8,
    completed: 12,
    totalTasks: 28
  }
};

export type TaskPeriod = 'this-month' | 'last-month' | 'last-3-months'; 