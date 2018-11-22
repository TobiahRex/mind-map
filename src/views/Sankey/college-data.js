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
      name: 'The Structure and Interpretation of Computer Programs',
    },
    {
      name: 'Data Structures'
    },
    {
      name: 'Machine Structures'
    },
    {
      name: 'NO Course Available'
    },
    {
      name: 'COMSC 210'
    },
    {
      name: 'Program Design & Data Structures'
    },
    {
      name: 'Assembly Language Programming & Computer Organization'
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
    // {
    //   source: 'UC Berkeley',
    //   target: 'Computer Science, B.S. (EECS)',
    //   value: 0.25
    // },
    // {
    //   source: 'UC Davis',
    //   target: 'Computer Science, B.S.',
    //   value: 0.25
    // },
    // {
    //   source: 'UC Davis',
    //   target: 'Computer Science & Engineering, B.S.',
    //   value: 0.25
    // },
    {
      source: 'Computer Science, B.A. (L&S)',
      target: 'COMPSCI 61A',
      value: 0.08
    },
    {
      source: 'Computer Science, B.A. (L&S)',
      target: 'COMPSCI 61B',
      value: 0.08
    },
    {
      source: 'Computer Science, B.A. (L&S)',
      target: 'COMPSCI 61C',
      value: 0.08
    },
    {
      source: 'COMPSCI 61A',
      target: 'NO Course Available',
      value: 0.08
    },
    {
      source: 'COMPSCI 61B',
      target: 'COMSC 210',
      value: 0.08
    },
    {
      source: 'COMPSCI 61C',
      target: 'COMSC 260',
      value: 0.08
    },
    {
      source: 'COMSC 210',
      target: 'Program Design & Data Structures',
      value: 0.08
    },
    {
      source: 'COMSC 260',
      target: 'Assembly Language Programming & Computer Organization',
      value: 0.08
    },
  ]
};
