export const ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from_sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "contractId",
        type: "address",
      },
    ],
    name: "ReturnContrctId",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "address",
        name: "opadd",
        type: "address",
      },
    ],
    name: "returnLoginStatus",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userId",
        type: "address",
      },
    ],
    name: "addOperators",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address",
        name: "orgAdd",
        type: "address",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
    ],
    name: "addOrganisation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "documentArray",
    outputs: [
      {
        internalType: "string",
        name: "cidValue",
        type: "string",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "string",
        name: "docName",
        type: "string",
      },
      {
        internalType: "string",
        name: "time",
        type: "string",
      },
      {
        internalType: "string",
        name: "size",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "foundDoc",
    outputs: [
      {
        internalType: "string",
        name: "cidValue",
        type: "string",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "string",
        name: "docName",
        type: "string",
      },
      {
        internalType: "string",
        name: "time",
        type: "string",
      },
      {
        internalType: "string",
        name: "size",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllOperators",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "_userAdd",
            type: "address",
          },
          {
            internalType: "string[]",
            name: "documents",
            type: "string[]",
          },
        ],
        internalType: "struct syncVault.Operators[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oppadd",
        type: "address",
      },
    ],
    name: "getDocuments",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "cidValue",
            type: "string",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "string",
            name: "docName",
            type: "string",
          },
          {
            internalType: "string",
            name: "time",
            type: "string",
          },
          {
            internalType: "string",
            name: "size",
            type: "string",
          },
        ],
        internalType: "struct syncVault.Document[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOperators",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "_userAdd",
            type: "address",
          },
          {
            internalType: "string[]",
            name: "documents",
            type: "string[]",
          },
        ],
        internalType: "struct syncVault.Operators",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getOperatorss",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "_userAdd",
            type: "address",
          },
          {
            internalType: "string[]",
            name: "documents",
            type: "string[]",
          },
        ],
        internalType: "struct syncVault.Operators",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOrganisation",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "orgName",
            type: "string",
          },
          {
            internalType: "address",
            name: "orgAddress",
            type: "address",
          },
          {
            internalType: "string[]",
            name: "members",
            type: "string[]",
          },
          {
            internalType: "string",
            name: "officeLocation",
            type: "string",
          },
        ],
        internalType: "struct syncVault.Organisations[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_cidValue",
        type: "string",
      },
    ],
    name: "getShares",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "string",
            name: "time",
            type: "string",
          },
        ],
        internalType: "struct syncVault.Shares[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orgadd",
        type: "address",
      },
    ],
    name: "isAvailable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "add",
        type: "address",
      },
    ],
    name: "operatorFinder",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "_userAdd",
            type: "address",
          },
          {
            internalType: "string[]",
            name: "documents",
            type: "string[]",
          },
        ],
        internalType: "struct syncVault.Operators",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "add",
        type: "address",
      },
    ],
    name: "operatorLogin",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "organisationAvaailable",
    outputs: [
      {
        internalType: "string",
        name: "orgName",
        type: "string",
      },
      {
        internalType: "address",
        name: "orgAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "officeLocation",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "hashedDoc",
        type: "string",
      },
    ],
    name: "presenceChecker",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "receivedDocs",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "cidValue",
            type: "string",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "string",
            name: "docName",
            type: "string",
          },
          {
            internalType: "string",
            name: "time",
            type: "string",
          },
          {
            internalType: "string",
            name: "size",
            type: "string",
          },
        ],
        internalType: "struct syncVault.Document[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "string",
        name: "_cidValue",
        type: "string",
      },
      {
        internalType: "string",
        name: "_time",
        type: "string",
      },
      {
        internalType: "string",
        name: "_size",
        type: "string",
      },
      {
        internalType: "string",
        name: "_docName",
        type: "string",
      },
    ],
    name: "sendDocument",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_cidValue",
        type: "string",
      },
      {
        internalType: "string",
        name: "_time",
        type: "string",
      },
      {
        internalType: "string",
        name: "_docName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_size",
        type: "string",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orgadd",
        type: "address",
      },
    ],
    name: "testingAddress",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "orgName",
            type: "string",
          },
          {
            internalType: "address",
            name: "orgAddress",
            type: "address",
          },
          {
            internalType: "string[]",
            name: "members",
            type: "string[]",
          },
          {
            internalType: "string",
            name: "officeLocation",
            type: "string",
          },
        ],
        internalType: "struct syncVault.Organisations",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "usersMapping",
    outputs: [
      {
        internalType: "address",
        name: "userAddres",
        type: "address",
      },
      {
        internalType: "string",
        name: "userType",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_cid",
        type: "string",
      },
    ],
    name: "verifyDocument",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
export const CONTRACTADDRESS = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
