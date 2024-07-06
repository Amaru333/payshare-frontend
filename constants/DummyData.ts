export const group_data = [
  {
    id: 1,
    type: "group",
    name: "Roommates",
    members: [1, 2, 3, 4],
    owe: 25000,
    lent: 25000,
  },
  {
    id: 2,
    type: "group",
    name: "Family",
    members: [1, 2, 3, 4],
    owe: 0,
    lent: 0,
  },
  {
    id: 3,
    type: "group",
    name: "Friends",
    members: [1, 2, 3, 4],
    owe: 25000,
    lent: 25000,
  },
  {
    id: 4,
    type: "single",
    name: "John Doe",
    members: [1],
    owe: 25000,
    lent: 25000,
  },
  {
    id: 5,
    type: "group",
    name: "Family",
    members: [1, 2, 3, 4],
    owe: 25000,
    lent: 25000,
  },
];

export const transaction_data = [
  {
    id: 1,
    paid_by: {
      id: 1,
      name: "John Doe",
    },
    amount: 232,
    currency: "USD",
    date: "Wednesday at 14:22",
    description: "Rent",
    split: [
      {
        user: {
          id: 1,
          name: "John Doe",
        },
        amount: 100,
      },
      {
        user: {
          id: 2,
          name: "Jane Doe",
        },
        amount: 100,
      },
      {
        user: {
          id: 3,
          name: "Johnny Doe",
        },
        amount: 32,
      },
    ],
  },
  {
    id: 2,
    paid_by: {
      id: 2,
      name: "Jane Doe",
    },
    amount: 232,
    currency: "USD",
    date: "Tuesday at 14:22",
    description: "Rent",
    split: [
      {
        user: {
          id: 1,
          name: "John Doe",
        },
        amount: 100,
      },
      {
        user: {
          id: 2,
          name: "Jane Doe",
        },
        amount: 100,
      },
      {
        user: {
          id: 3,
          name: "Johnny Doe",
        },
        amount: 32,
      },
    ],
  },
  {
    id: 3,
    paid_by: {
      id: 1,
      name: "John Doe",
    },
    amount: 232,
    currency: "USD",
    date: "Wednesday at 14:22",
    description: "Rent",
    split: [
      {
        user: {
          id: 1,
          name: "John Doe",
        },
        amount: 100,
      },
      {
        user: {
          id: 2,
          name: "Jane Doe",
        },
        amount: 100,
      },
      {
        user: {
          id: 3,
          name: "Johnny Doe",
        },
        amount: 32,
      },
    ],
  },
  {
    id: 4,
    paid_by: {
      id: 2,
      name: "Jane Doe",
    },
    amount: 232,
    currency: "USD",
    date: "Tuesday at 14:22",
    description: "Rent",
    split: [
      {
        user: {
          id: 1,
          name: "John Doe",
        },
        amount: 100,
      },
      {
        user: {
          id: 2,
          name: "Jane Doe",
        },
        amount: 100,
      },
      {
        user: {
          id: 3,
          name: "Johnny Doe",
        },
        amount: 32,
      },
    ],
  },
];
