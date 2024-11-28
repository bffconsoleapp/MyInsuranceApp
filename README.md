```graphql
const typeDefs = `
  type Credit_Union {
    id: ID!
    Contract_Number: String!
    Credit_Union_Name: String!
    Premium_Adjustments: [Premium_Adjustment]
  }

  type Premium_Adjustment {
    id: ID!
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  input CreateCreditUnionInput {
    id: ID!
    Contract_Number: String!
    Credit_Union_Name: String!
    Premium_Adjustments: [CreatePremiumAdjustmentInput]
  }

  input CreatePremiumAdjustmentInput {
    id: ID!
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  type Query {
    getCreditUnions: [Credit_Union]
    getPremiumAdjustments: [Premium_Adjustment]
  }

  type Mutation {
    addCreditUnion(input: CreateCreditUnionInput): Credit_Union
    addPremiumAdjustment(input: CreatePremiumAdjustmentInput): Premium_Adjustment
  }
`;
```

```javascript
// Resolvers
codegen-start-resolver

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

codegen-end-resolver
```