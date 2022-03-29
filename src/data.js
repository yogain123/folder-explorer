export const folderData = {
  name: "root",
  isFolder: true,
  children: [
    {
      id: "1",
      name: "Office Map",
    },
    {
      id: "2",
      name: "New Employee Onboarding",
      isFolder: true,
      children: [
        {
          id: "8",
          name: "Onboarding Materials",
        },
        {
          id: "9",
          name: "Training",
        },
      ],
    },
    {
      id: "3",
      name: "Office Events",
      isFolder: true,
      children: [
        {
          id: "6",
          name: "2018",
          isFolder: true,

          children: [
            {
              id: "10",
              name: "Summer Picnic",
            },
            {
              id: "11",
              name: "Valentine's Day Party",
            },
            {
              id: "12",
              name: "New Year's Party",
            },
          ],
        },
        {
          id: "7",
          name: "2017",
          isFolder: true,
          children: [
            {
              id: "13",
              name: "Company Anniversary Celebration",
            },
          ],
        },
      ],
    },
    {
      id: "4",
      name: "Public Holidays",
    },
    {
      id: "5",
      name: "Vacations and Sick Leaves",
    },
  ],
};
