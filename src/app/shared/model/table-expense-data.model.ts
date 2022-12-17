import { ExpenseCategory } from './expense-category.model';

export interface TableExpenseData {
  id: number;
  date: string;
  category: string;
  amount: number;
  description: string | null;
}

export const columnsExpenseTable = ['date', 'category', 'amount', 'description'];

export const mockTableData: Array<TableExpenseData> = [{
  "id": 1,
  "date": "04/08/2022",
  "category": "Lib",
  "amount": 30.1,
  "description": null
}, {
  "id": 2,
  "date": "26/01/2022",
  "category": "Sue",
  "amount": 96.7,
  "description": null
}, {
  "id": 3,
  "date": "10/10/2022",
  "category": "Gigi",
  "amount": 15.9,
  "description": "Physicians Total Care, Inc."
}, {
  "id": 4,
  "date": "26/05/2022",
  "category": "Mirella",
  "amount": 7.6,
  "description": "L'Oreal USA Products Inc"
}, {
  "id": 5,
  "date": "18/12/2022",
  "category": "Kassi",
  "amount": 54.8,
  "description": "Lake Erie Medical & Surgical Supply DBA Quality Care Products LLC"
}, {
  "id": 6,
  "date": "28/01/2022",
  "category": "Ray",
  "amount": 58.4,
  "description": null
}, {
  "id": 7,
  "date": "29/06/2022",
  "category": "Sallie",
  "amount": 57.6,
  "description": "Wal-Mart Stores Inc"
}, {
  "id": 8,
  "date": "01/01/2022",
  "category": "Bendite",
  "amount": 12.2,
  "description": "Conopco Inc. d/b/a Unilever"
}, {
  "id": 9,
  "date": "12/10/2022",
  "category": "Vinni",
  "amount": 89.5,
  "description": "Cardinal Health"
}, {
  "id": 10,
  "date": "02/06/2022",
  "category": "Dian",
  "amount": 45.4,
  "description": null
}, {
  "id": 11,
  "date": "21/06/2022",
  "category": "Dalia",
  "amount": 55.9,
  "description": "RITE AID CORPORATION"
}, {
  "id": 12,
  "date": "27/05/2022",
  "category": "Pia",
  "amount": 17.9,
  "description": "Lannett Company, Inc."
}, {
  "id": 13,
  "date": "28/12/2021",
  "category": "Dorrie",
  "amount": 30.9,
  "description": null
}, {
  "id": 14,
  "date": "21/07/2022",
  "category": "Diannne",
  "amount": 75.8,
  "description": null
}, {
  "id": 15,
  "date": "06/04/2022",
  "category": "Pia",
  "amount": 97.7,
  "description": "Zydus Pharmaceuticals (USA) Inc."
}, {
  "id": 16,
  "date": "11/04/2022",
  "category": "Maggi",
  "amount": 92.8,
  "description": "Washington Homeopathic Products"
}, {
  "id": 17,
  "date": "04/02/2022",
  "category": "Deina",
  "amount": 10.1,
  "description": "Apotheca Company"
}, {
  "id": 18,
  "date": "02/02/2022",
  "category": "Coralyn",
  "amount": 45.0,
  "description": "BluePoint Laboratories"
}, {
  "id": 19,
  "date": "17/12/2022",
  "category": "Lulita",
  "amount": 90.9,
  "description": "Bracco Diagnostics Inc"
}, {
  "id": 20,
  "date": "17/04/2022",
  "category": "Rhoda",
  "amount": 16.7,
  "description": null
}, {
  "id": 21,
  "date": "17/10/2022",
  "category": "Katti",
  "amount": 37.8,
  "description": "Aphena Pharma Solutions - Tennessee, Inc."
}, {
  "id": 22,
  "date": "27/03/2022",
  "category": "Jenine",
  "amount": 3.8,
  "description": null
}, {
  "id": 23,
  "date": "13/01/2022",
  "category": "Toinette",
  "amount": 35.3,
  "description": "Upsher-Smith Laboratories, Inc."
}, {
  "id": 24,
  "date": "14/10/2022",
  "category": "Susanetta",
  "amount": 59.5,
  "description": "Natural Health Supply"
}, {
  "id": 25,
  "date": "15/11/2022",
  "category": "Libbey",
  "amount": 71.2,
  "description": null
}, {
  "id": 26,
  "date": "19/12/2022",
  "category": "Cicely",
  "amount": 85.5,
  "description": "Preferred Plus (Kinray)"
}, {
  "id": 27,
  "date": "04/12/2021",
  "category": "Bobinette",
  "amount": 84.1,
  "description": null
}, {
  "id": 28,
  "date": "20/07/2022",
  "category": "Rosemary",
  "amount": 97.9,
  "description": null
}, {
  "id": 29,
  "date": "25/11/2022",
  "category": "Agace",
  "amount": 17.0,
  "description": "Boca Pharmacal, Inc."
}, {
  "id": 30,
  "date": "27/04/2022",
  "category": "Tessy",
  "amount": 23.4,
  "description": "NCS HealthCare of KY, Inc dba Vangard Labs"
}, {
  "id": 31,
  "date": "02/03/2022",
  "category": "Anabal",
  "amount": 84.5,
  "description": "Paddock Laboratories, LLC"
}, {
  "id": 32,
  "date": "07/09/2022",
  "category": "Meagan",
  "amount": 42.4,
  "description": "Contract Pharmacy Services-PA"
}, {
  "id": 33,
  "date": "01/10/2022",
  "category": "Teddi",
  "amount": 13.7,
  "description": "Hospira, Inc."
}, {
  "id": 34,
  "date": "03/12/2021",
  "category": "Meta",
  "amount": 39.1,
  "description": "Kinray Inc."
}, {
  "id": 35,
  "date": "21/06/2022",
  "category": "Wandis",
  "amount": 92.6,
  "description": null
}, {
  "id": 36,
  "date": "14/02/2022",
  "category": "Denny",
  "amount": 62.6,
  "description": null
}, {
  "id": 37,
  "date": "15/01/2022",
  "category": "Brianna",
  "amount": 61.6,
  "description": "Uriel Pharmacy Inc."
}, {
  "id": 38,
  "date": "27/06/2022",
  "category": "Hedi",
  "amount": 34.6,
  "description": "Laboratorios Genesse SL"
}, {
  "id": 39,
  "date": "08/06/2022",
  "category": "Margit",
  "amount": 36.2,
  "description": null
}, {
  "id": 40,
  "date": "24/04/2022",
  "category": "Cathie",
  "amount": 30.9,
  "description": "SAVE-A-LOT FOOD STORES, LTD."
}, {
  "id": 41,
  "date": "12/03/2022",
  "category": "Amalita",
  "amount": 98.1,
  "description": "ORGANIC & SUSTAINABLE BEAUTY"
}, {
  "id": 42,
  "date": "16/03/2022",
  "category": "Erika",
  "amount": 62.1,
  "description": "Macleods Pharmaceuticals Limited"
}, {
  "id": 43,
  "date": "17/12/2022",
  "category": "Waneta",
  "amount": 15.4,
  "description": "Family Dollar"
}, {
  "id": 44,
  "date": "28/04/2022",
  "category": "Sherri",
  "amount": 60.2,
  "description": "Time-Cap Labs, Inc"
}, {
  "id": 45,
  "date": "28/07/2022",
  "category": "Celestyna",
  "amount": 61.8,
  "description": "GlaxoSmithKline Consumer Heathcare LP"
}, {
  "id": 46,
  "date": "17/07/2022",
  "category": "Kristina",
  "amount": 90.1,
  "description": "Aidarex Pharmaceuticals LLC"
}, {
  "id": 47,
  "date": "31/10/2022",
  "category": "Kirsten",
  "amount": 28.8,
  "description": null
}, {
  "id": 48,
  "date": "18/01/2022",
  "category": "Patty",
  "amount": 71.0,
  "description": "The Kroger Co."
}, {
  "id": 49,
  "date": "01/04/2022",
  "category": "Juliana",
  "amount": 30.9,
  "description": "Freds Inc"
}, {
  "id": 50,
  "date": "25/12/2022",
  "category": "Lynnett",
  "amount": 11.3,
  "description": "W. F. Young, Inc."
}, {
  "id": 51,
  "date": "29/09/2022",
  "category": "Jillane",
  "amount": 83.3,
  "description": "Biogen Idec Inc."
}, {
  "id": 52,
  "date": "10/03/2022",
  "category": "Federica",
  "amount": 39.1,
  "description": null
}, {
  "id": 53,
  "date": "15/09/2022",
  "category": "Tate",
  "amount": 53.6,
  "description": null
}, {
  "id": 54,
  "date": "19/10/2022",
  "category": "Madeline",
  "amount": 97.7,
  "description": null
}, {
  "id": 55,
  "date": "09/12/2022",
  "category": "Gabie",
  "amount": 87.3,
  "description": "MSD Consumer care, Inc."
}, {
  "id": 56,
  "date": "18/10/2022",
  "category": "Jessi",
  "amount": 7.5,
  "description": null
}, {
  "id": 57,
  "date": "09/04/2022",
  "category": "Albertina",
  "amount": 2.4,
  "description": "Meijer Distribution Inc"
}, {
  "id": 58,
  "date": "30/08/2022",
  "category": "Aleta",
  "amount": 87.7,
  "description": "BioComp Pharma, Inc."
}, {
  "id": 59,
  "date": "10/10/2022",
  "category": "Cristabel",
  "amount": 81.1,
  "description": "REMEDYREPACK INC."
}, {
  "id": 60,
  "date": "05/02/2022",
  "category": "Ariela",
  "amount": 58.7,
  "description": "Rebel Distributors Corp"
}, {
  "id": 61,
  "date": "20/12/2021",
  "category": "Maiga",
  "amount": 57.4,
  "description": "Uriel Pharmacy Inc."
}, {
  "id": 62,
  "date": "23/01/2022",
  "category": "Sisile",
  "amount": 69.2,
  "description": null
}, {
  "id": 63,
  "date": "13/10/2022",
  "category": "Mavra",
  "amount": 7.6,
  "description": "Major Pharmaceuticals"
}, {
  "id": 64,
  "date": "29/06/2022",
  "category": "Gui",
  "amount": 41.9,
  "description": null
}, {
  "id": 65,
  "date": "18/07/2022",
  "category": "Kelcy",
  "amount": 22.3,
  "description": null
}, {
  "id": 66,
  "date": "24/11/2022",
  "category": "Dody",
  "amount": 88.9,
  "description": "KW ABSC, INC."
}, {
  "id": 67,
  "date": "29/04/2022",
  "category": "Alexia",
  "amount": 80.1,
  "description": "Acetylene Oxygen Company"
}, {
  "id": 68,
  "date": "03/11/2022",
  "category": "Carley",
  "amount": 31.8,
  "description": "LUPIN LIMITED"
}, {
  "id": 69,
  "date": "23/10/2022",
  "category": "Emera",
  "amount": 57.1,
  "description": null
}, {
  "id": 70,
  "date": "30/12/2021",
  "category": "Denny",
  "amount": 48.3,
  "description": "Eduard Gerlach GmbH"
}, {
  "id": 71,
  "date": "01/07/2022",
  "category": "Camila",
  "amount": 70.6,
  "description": null
}, {
  "id": 72,
  "date": "25/07/2022",
  "category": "Rodie",
  "amount": 97.7,
  "description": "Sanum Kehlbeck GmbH & Co. KG"
}, {
  "id": 73,
  "date": "25/02/2022",
  "category": "Valencia",
  "amount": 58.4,
  "description": "Conopco Inc. d/b/a Unilever"
}, {
  "id": 74,
  "date": "07/09/2022",
  "category": "Raeann",
  "amount": 3.6,
  "description": "AMERICAN SALES COMPANY"
}, {
  "id": 75,
  "date": "15/11/2022",
  "category": "Audry",
  "amount": 35.6,
  "description": "Fresenius Kabi USA, LLC"
}, {
  "id": 76,
  "date": "15/12/2022",
  "category": "Fayina",
  "amount": 73.4,
  "description": "Aurobindo Pharma Limited"
}, {
  "id": 77,
  "date": "30/11/2022",
  "category": "Fanny",
  "amount": 36.3,
  "description": null
}, {
  "id": 78,
  "date": "22/10/2022",
  "category": "Cathleen",
  "amount": 48.9,
  "description": "MARPE LLC"
}, {
  "id": 79,
  "date": "24/12/2022",
  "category": "Constance",
  "amount": 7.0,
  "description": "SHISEIDO AMERICAS CORPORATION"
}, {
  "id": 80,
  "date": "29/12/2022",
  "category": "Ashia",
  "amount": 35.2,
  "description": null
}, {
  "id": 81,
  "date": "17/04/2022",
  "category": "Madelle",
  "amount": 65.7,
  "description": "Amerisource Bergen"
}, {
  "id": 82,
  "date": "04/08/2022",
  "category": "Tresa",
  "amount": 88.5,
  "description": "Washington Homeopathic Products"
}, {
  "id": 83,
  "date": "06/01/2022",
  "category": "Feliza",
  "amount": 33.3,
  "description": "Proficient Rx LP"
}, {
  "id": 84,
  "date": "26/01/2022",
  "category": "Gerladina",
  "amount": 73.4,
  "description": null
}, {
  "id": 85,
  "date": "24/01/2022",
  "category": "Faunie",
  "amount": 65.5,
  "description": "GOJO Industries, Inc."
}, {
  "id": 86,
  "date": "31/03/2022",
  "category": "Robinia",
  "amount": 95.2,
  "description": "Zydus Pharmaceuticals (USA) Inc."
}, {
  "id": 87,
  "date": "30/06/2022",
  "category": "Stacee",
  "amount": 56.9,
  "description": null
}, {
  "id": 88,
  "date": "21/11/2022",
  "category": "Melinde",
  "amount": 17.0,
  "description": null
}, {
  "id": 89,
  "date": "23/06/2022",
  "category": "Sena",
  "amount": 14.6,
  "description": null
}, {
  "id": 90,
  "date": "11/12/2022",
  "category": "Serene",
  "amount": 11.2,
  "description": null
}, {
  "id": 91,
  "date": "14/12/2021",
  "category": "Heidi",
  "amount": 37.9,
  "description": null
}, {
  "id": 92,
  "date": "22/06/2022",
  "category": "Lorelle",
  "amount": 72.7,
  "description": "Dr. Reddy's Laboratories Limited"
}, {
  "id": 93,
  "date": "09/07/2022",
  "category": "Theresina",
  "amount": 52.6,
  "description": "AstraZeneca LP"
}, {
  "id": 94,
  "date": "11/07/2022",
  "category": "Kirstin",
  "amount": 95.4,
  "description": "WALGREEN CO."
}, {
  "id": 95,
  "date": "04/11/2022",
  "category": "Korry",
  "amount": 72.4,
  "description": "H.J. Harkins Company, Inc."
}, {
  "id": 96,
  "date": "06/05/2022",
  "category": "Evangeline",
  "amount": 21.8,
  "description": "Pernix Therapeutics"
}, {
  "id": 97,
  "date": "11/06/2022",
  "category": "Dacia",
  "amount": 85.5,
  "description": null
}, {
  "id": 98,
  "date": "30/08/2022",
  "category": "Jacki",
  "amount": 73.9,
  "description": "Nature's Way Holding Co"
}, {
  "id": 99,
  "date": "01/01/2022",
  "category": "Rebekah",
  "amount": 26.8,
  "description": "Cardinal Health"
}, {
  "id": 100,
  "date": "15/12/2021",
  "category": "Krystyna",
  "amount": 72.3,
  "description": null
}]