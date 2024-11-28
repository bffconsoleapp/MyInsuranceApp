const creditUnions = [
  {
    id: "1",
    Contract_Number: "123",
    Credit_Union_Name: "Credit Union One",
    Premium_Adjustments: [
      {
        id: "1",
        Product_Name: "Product A",
        Report_Period: "202301",
        Status: "Completed",
        Last_Update: "2023-10-01",
        Period_Ending: "2023-12-31",
        Adjustment_Type_to_the_Credit_Union: "Type A",
        Comment: "No issues",
        Total_Borrower_Fees_: 100.0,
        CU_Retail_Rate: 0.075,
        Protected_Loan_Amount: 2000.0,
        Pay_Rate: 0.85,
        Premium_Due: 50.0,
        Total_Amount: 2150.0,
      },
    ],
  },
];

const premiumAdjustments = [
  {
    id: "1",
    Product_Name: "Product A",
    Report_Period: "202301",
    Status: "Completed",
    Last_Update: "2023-10-01",
    Period_Ending: "2023-12-31",
    Adjustment_Type_to_the_Credit_Union: "Type A",
    Comment: "No issues",
    Total_Borrower_Fees_: 100.0,
    CU_Retail_Rate: 0.075,
    Protected_Loan_Amount: 2000.0,
    Pay_Rate: 0.85,
    Premium_Due: 50.0,
    Total_Amount: 2150.0,
  },
];

const resolvers = {
  Query: {
    getCreditUnions: () => creditUnions,
    getPremiumAdjustments: () => premiumAdjustments,
  },
  Mutation: {
    addCreditUnion: (_, { input }) => {
      creditUnions.push(input);
      return input;
    },
    addPremiumAdjustment: (_, { input }) => {
      premiumAdjustments.push(input);
      return input;
    },
  },
};

export default resolvers;