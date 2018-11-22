// Dyanmic Control Flow
// 1. Add a new node for every possible entry.
// 2. Add a link, with source and target.
// 3. value should be it's percentage of the total list?

export default {
  nodes: [
    {
      name: 'Diablo Valley College'
    },
    {
      name: 'UC Berkeley'
    },
    {
      name: 'UC Davis'
    },
    {
      name: 'Computer Science, B.A. (L&S)' // Berkeley
    },
    {
      name: 'Computer Science, B.S. (EECS)' // Berkeley
    },
    {
      name: 'Computer Science, B.S.' // Davis
    },
    {
      name: 'Computer Science & Engineering, B.S.' // Davis
    },
    {
      name: 'COMPSCI 61A'
    },
    {
      name: 'COMPSCI 61B'
    },
    {
      name: 'COMPSCI 61C'
    },
    {
      name: 'NO COURSE AVAILABLE'
    },
    {
      name: 'COMSC 210\nProgram Design & Data Structures'
    },
    {
      name: 'COMSC 260\nAssembly Language Programming & Computer Organization'
    },
  ],
  links: [
    {
      source: 'Diablo Valley College',
      target: 'UC Berkeley',
      value: 0.5
    },
    {
      source: 'Diablo Valley College',
      target: 'UC Davis',
      value: 0.5
    },
    {
      source: 'UC Berkeley',
      target: 'Computer Science, B.A. (L&S)',
      value: 0.25
    },
    {
      source: 'UC Berkeley',
      target: 'Computer Science, B.S. (EECS)',
      value: 0.25
    },
    {
      source: 'Computer Science, B.A. (L&S)',
      target: 'COMPSCI 61A',
      value: 0.08333
    },
    {
      source: 'Computer Science, B.S. (EECS)',
      target: 'COMPSCI 61A',
      value: 0.08333
    },
    {
      source: 'COMPSCI 61A',
      target: 'NO COURSE AVAILABLE',
      value: 0.166
    },
    {
      source: 'Computer Science, B.A. (L&S)',
      target: 'COMPSCI 61B',
      value: 0.08333
    },
    {
      source: 'Computer Science, B.S. (EECS)',
      target: 'COMPSCI 61B',
      value: 0.08333
    },
    {
      source: 'COMPSCI 61B',
      target: 'COMSC 210\nProgram Design & Data Structures',
      value: 0.1666
    },
    {
      source: 'Computer Science, B.A. (L&S)',
      target: 'COMPSCI 61C',
      value: 0.08333
    },
    {
      source: 'Computer Science, B.S. (EECS)',
      target: 'COMPSCI 61C',
      value: 0.08333
    },
    {
      source: 'COMPSCI 61C',
      target: 'COMSC 260\nAssembly Language Programming & Computer Organization',
      value: 0.166
    },
    {
      source: 'UC Davis',
      target: 'Computer Science, B.S.',
      value: 0.25,
    },
    {
      source: 'UC Davis',
      target: 'Computer Science & Engineering, B.S.',
      value: 0.25,
    }
  ]
};
