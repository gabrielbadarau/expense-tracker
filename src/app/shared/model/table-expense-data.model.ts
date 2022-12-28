import { ExpenseCategory } from './expense-category.model';

export interface TableExpenseData {
  id: number;
  date: string;
  category: string;
  amount: number;
  description: string | null;
}

export const columnsExpenseTable = ['date', 'category', 'amount', 'description'];

export const mockTableData: Array<TableExpenseData> = [
  {
    id: 1,
    date: '2022-11-15T00:54:13Z',
    category: 'Sibley',
    amount: 54.5,
    description: null,
  },
  {
    id: 2,
    date: '2022-05-18T04:00:25Z',
    category: 'Tabbi',
    amount: 77.4,
    description: null,
  },
  {
    id: 3,
    date: '2022-11-07T08:03:11Z',
    category: 'Shani',
    amount: 4.4,
    description: null,
  },
  {
    id: 4,
    date: '2022-07-02T13:48:25Z',
    category: 'Billy',
    amount: 72.0,
    description: null,
  },
  {
    id: 5,
    date: '2022-02-17T09:23:49Z',
    category: 'Augustina',
    amount: 70.7,
    description: null,
  },
  {
    id: 6,
    date: '2022-11-02T08:13:12Z',
    category: 'Bernetta',
    amount: 55.1,
    description: null,
  },
  {
    id: 7,
    date: '2022-09-03T08:58:41Z',
    category: 'Deb',
    amount: 18.3,
    description: 'Antigen Laboratories, Inc.',
  },
  {
    id: 8,
    date: '2022-02-14T12:50:09Z',
    category: 'Winnifred',
    amount: 47.3,
    description: 'Nash Finch Company',
  },
  {
    id: 9,
    date: '2022-09-24T13:17:09Z',
    category: 'Darsey',
    amount: 81.1,
    description: null,
  },
  {
    id: 10,
    date: '2022-12-30T16:20:12Z',
    category: 'Amalle',
    amount: 57.4,
    description: 'Acella Pharmaceuticals, LLC',
  },
  {
    id: 11,
    date: '2022-12-27T22:27:16Z',
    category: 'Berget',
    amount: 67.5,
    description: 'Forest Laboratories, Inc.',
  },
  {
    id: 12,
    date: '2022-01-01T00:59:42Z',
    category: 'Renelle',
    amount: 27.2,
    description: 'Uriel Pharmacy Inc.',
  },
  {
    id: 13,
    date: '2022-10-19T19:42:16Z',
    category: 'Devina',
    amount: 13.2,
    description: null,
  },
  {
    id: 14,
    date: '2022-07-07T23:17:04Z',
    category: 'Celesta',
    amount: 43.8,
    description: null,
  },
  {
    id: 15,
    date: '2022-07-02T04:24:05Z',
    category: 'Jonis',
    amount: 26.5,
    description: null,
  },
  {
    id: 16,
    date: '2022-08-05T17:51:12Z',
    category: 'Cyndie',
    amount: 73.1,
    description: 'West-ward Pharmaceutical Corp.',
  },
  {
    id: 17,
    date: '2022-04-27T09:41:08Z',
    category: 'Doloritas',
    amount: 85.1,
    description: null,
  },
  {
    id: 18,
    date: '2022-02-08T06:32:32Z',
    category: 'Edy',
    amount: 65.0,
    description: null,
  },
  {
    id: 19,
    date: '2022-11-27T17:24:24Z',
    category: 'Gennifer',
    amount: 39.4,
    description: 'Physicians Total Care, Inc.',
  },
  {
    id: 20,
    date: '2022-12-04T12:55:39Z',
    category: 'Louisette',
    amount: 65.1,
    description: null,
  },
  {
    id: 21,
    date: '2022-09-01T04:26:30Z',
    category: 'Henryetta',
    amount: 43.2,
    description: 'Uriel Pharmacy Inc.',
  },
  {
    id: 22,
    date: '2022-03-03T23:07:33Z',
    category: 'Dianne',
    amount: 62.4,
    description: 'Uriel Pharmacy Inc.',
  },
  {
    id: 23,
    date: '2022-12-30T15:22:27Z',
    category: 'Harmonia',
    amount: 14.8,
    description: 'REMEDYREPACK INC.',
  },
  {
    id: 24,
    date: '2022-07-28T06:41:49Z',
    category: 'Atlanta',
    amount: 31.9,
    description: null,
  },
  {
    id: 25,
    date: '2022-04-17T10:08:45Z',
    category: 'Auberta',
    amount: 92.4,
    description: 'STAT Rx USA LLC',
  },
  {
    id: 26,
    date: '2022-05-23T16:00:49Z',
    category: 'Beth',
    amount: 56.0,
    description: null,
  },
  {
    id: 27,
    date: '2022-11-11T20:40:58Z',
    category: 'Chrysa',
    amount: 29.3,
    description: null,
  },
  {
    id: 28,
    date: '2022-07-03T01:35:19Z',
    category: 'Yvonne',
    amount: 86.1,
    description: 'GlaxoSmithKline LLC',
  },
  {
    id: 29,
    date: '2022-04-20T21:49:39Z',
    category: 'Carmon',
    amount: 58.4,
    description: 'Aphena Pharma Solutions - Tennessee, LLC',
  },
  {
    id: 30,
    date: '2022-06-16T10:50:46Z',
    category: 'Lori',
    amount: 21.9,
    description: 'Torrent Pharmaceuticals Limited',
  },
  {
    id: 31,
    date: '2022-03-20T17:04:11Z',
    category: 'Alvina',
    amount: 98.2,
    description: 'Deb USA, Inc.',
  },
  {
    id: 32,
    date: '2022-09-26T07:06:13Z',
    category: 'Floria',
    amount: 76.4,
    description: 'Caraco Pharmaceutical Laboratories, Ltd.',
  },
  {
    id: 33,
    date: '2022-02-06T07:49:37Z',
    category: 'Amara',
    amount: 33.8,
    description: 'Meijer Distribution Inc',
  },
  {
    id: 34,
    date: '2022-05-06T17:17:48Z',
    category: 'Chrissy',
    amount: 85.6,
    description: 'CHARMZONE CO LTD',
  },
  {
    id: 35,
    date: '2022-07-13T20:09:42Z',
    category: 'Kylynn',
    amount: 41.3,
    description: 'Amneal Pharmaceuticals',
  },
  {
    id: 36,
    date: '2022-08-26T20:13:51Z',
    category: 'Blithe',
    amount: 53.3,
    description: 'Cadila Healthcare Limited',
  },
  {
    id: 37,
    date: '2022-12-11T08:28:06Z',
    category: 'Nat',
    amount: 69.0,
    description: null,
  },
  {
    id: 38,
    date: '2022-05-15T14:47:51Z',
    category: 'Gail',
    amount: 45.4,
    description: 'SAFEWAY INC.',
  },
  {
    id: 39,
    date: '2022-07-05T03:58:22Z',
    category: 'Valencia',
    amount: 49.8,
    description: null,
  },
  {
    id: 40,
    date: '2022-04-26T08:38:40Z',
    category: 'Linn',
    amount: 59.1,
    description: 'Dolgencorp, LLC',
  },
  {
    id: 41,
    date: '2022-11-09T21:56:40Z',
    category: 'Berenice',
    amount: 53.0,
    description: 'Mallinckrodt, Inc.',
  },
  {
    id: 42,
    date: '2022-09-22T16:00:52Z',
    category: 'Mela',
    amount: 63.4,
    description: 'Solco healthcare U.S., LLC',
  },
  {
    id: 43,
    date: '2022-07-31T19:54:44Z',
    category: 'Nicoline',
    amount: 90.3,
    description: null,
  },
  {
    id: 44,
    date: '2021-12-06T17:06:47Z',
    category: 'Carlyn',
    amount: 41.1,
    description: 'Exelan Pharmaceuticals, Inc.',
  },
  {
    id: 45,
    date: '2022-05-30T13:42:46Z',
    category: 'Augustina',
    amount: 8.6,
    description: null,
  },
  {
    id: 46,
    date: '2022-09-27T09:46:10Z',
    category: 'Kristin',
    amount: 7.3,
    description: 'Greenbrier International, Inc.',
  },
  {
    id: 47,
    date: '2022-09-22T13:46:17Z',
    category: 'Pietra',
    amount: 67.4,
    description: null,
  },
  {
    id: 48,
    date: '2022-10-07T01:45:40Z',
    category: 'Ninetta',
    amount: 69.3,
    description: 'Physician Therapeutics LLC',
  },
  {
    id: 49,
    date: '2022-02-01T08:43:15Z',
    category: 'Jaquith',
    amount: 78.4,
    description: 'Guthy-Renker LLC',
  },
  {
    id: 50,
    date: '2022-10-29T00:10:24Z',
    category: 'Karin',
    amount: 66.9,
    description: null,
  },
  {
    id: 51,
    date: '2022-08-01T20:59:26Z',
    category: 'Donica',
    amount: 83.4,
    description: 'FLEX-POWER KOREA INC',
  },
  {
    id: 52,
    date: '2022-01-08T00:09:52Z',
    category: 'Leigha',
    amount: 21.1,
    description: null,
  },
  {
    id: 53,
    date: '2022-02-07T00:57:45Z',
    category: 'Garnette',
    amount: 85.4,
    description: null,
  },
  {
    id: 54,
    date: '2022-05-18T16:32:39Z',
    category: 'Sybila',
    amount: 56.2,
    description: 'Nelco Laboratories, Inc.',
  },
  {
    id: 55,
    date: '2022-12-29T09:19:19Z',
    category: 'Maureene',
    amount: 16.7,
    description: null,
  },
  {
    id: 56,
    date: '2022-04-16T14:15:42Z',
    category: 'Shani',
    amount: 49.0,
    description: 'L Perrigo Company',
  },
  {
    id: 57,
    date: '2022-05-21T18:13:26Z',
    category: 'Thia',
    amount: 2.1,
    description: 'Sage Products Inc.',
  },
  {
    id: 58,
    date: '2022-02-25T13:35:03Z',
    category: 'Emmalyn',
    amount: 10.5,
    description: null,
  },
  {
    id: 59,
    date: '2022-06-14T10:48:07Z',
    category: 'Dyna',
    amount: 59.3,
    description: 'Keltman Pharmaceuticals Inc.',
  },
  {
    id: 60,
    date: '2022-01-15T13:04:12Z',
    category: 'Yolande',
    amount: 83.1,
    description: 'Deseret Biologicals, Inc.',
  },
  {
    id: 61,
    date: '2022-08-30T06:23:53Z',
    category: 'Idalina',
    amount: 33.3,
    description: 'Apotheca Company',
  },
  {
    id: 62,
    date: '2022-12-17T19:52:31Z',
    category: 'Arden',
    amount: 55.2,
    description: 'West-ward Pharmaceutical Corp',
  },
  {
    id: 63,
    date: '2022-06-18T11:08:10Z',
    category: 'Camille',
    amount: 89.3,
    description: null,
  },
  {
    id: 64,
    date: '2022-08-16T09:33:02Z',
    category: 'Larissa',
    amount: 25.1,
    description: null,
  },
  {
    id: 65,
    date: '2022-01-06T05:25:44Z',
    category: 'Jacqueline',
    amount: 74.7,
    description: 'The Wise Alternative',
  },
  {
    id: 66,
    date: '2022-02-02T14:37:06Z',
    category: 'Elysee',
    amount: 38.6,
    description: null,
  },
  {
    id: 67,
    date: '2022-11-24T22:13:32Z',
    category: 'Kym',
    amount: 70.1,
    description: 'Mylan Institutional Inc.',
  },
  {
    id: 68,
    date: '2022-01-29T01:01:35Z',
    category: 'Tally',
    amount: 81.4,
    description: null,
  },
  {
    id: 69,
    date: '2022-06-29T12:21:14Z',
    category: 'Doti',
    amount: 80.9,
    description: null,
  },
  {
    id: 70,
    date: '2022-04-04T14:46:45Z',
    category: 'Cornelia',
    amount: 4.5,
    description: 'YVES ROCHER NORTH AMERICA INC',
  },
  {
    id: 71,
    date: '2022-10-11T20:49:21Z',
    category: 'Adore',
    amount: 58.8,
    description: null,
  },
  {
    id: 72,
    date: '2022-01-01T21:30:19Z',
    category: 'Lorna',
    amount: 29.1,
    description: 'Family Dollar',
  },
  {
    id: 73,
    date: '2022-09-02T15:42:33Z',
    category: 'Erminia',
    amount: 51.1,
    description: null,
  },
  {
    id: 74,
    date: '2022-05-28T22:08:02Z',
    category: 'Jennilee',
    amount: 33.4,
    description: null,
  },
  {
    id: 75,
    date: '2022-01-02T23:52:02Z',
    category: 'Chickie',
    amount: 37.5,
    description: 'DenTek Oral Care. Inc.',
  },
  {
    id: 76,
    date: '2022-11-25T23:23:28Z',
    category: 'Ibby',
    amount: 89.5,
    description: 'Bryant Ranch Prepack',
  },
  {
    id: 77,
    date: '2022-03-17T18:32:54Z',
    category: 'Felicdad',
    amount: 20.7,
    description: 'REMEDYREPACK INC.',
  },
  {
    id: 78,
    date: '2022-05-27T03:11:04Z',
    category: 'Stacee',
    amount: 37.0,
    description: null,
  },
  {
    id: 79,
    date: '2022-11-20T07:05:23Z',
    category: 'Sile',
    amount: 63.9,
    description: 'Aptalis Pharma US, Inc.',
  },
  {
    id: 80,
    date: '2022-07-08T02:33:55Z',
    category: 'Kim',
    amount: 72.8,
    description: null,
  },
  {
    id: 81,
    date: '2022-06-28T06:52:15Z',
    category: 'Luz',
    amount: 26.4,
    description: 'Hospira Worldwide, Inc.',
  },
  {
    id: 82,
    date: '2022-05-30T07:59:59Z',
    category: 'Shelly',
    amount: 35.6,
    description: 'Topco Associates LLC',
  },
  {
    id: 83,
    date: '2022-08-26T13:42:20Z',
    category: 'Shani',
    amount: 97.6,
    description: 'AvKARE, Inc.',
  },
  {
    id: 84,
    date: '2022-09-09T17:46:14Z',
    category: 'Moyna',
    amount: 58.8,
    description: 'Blenheim Pharmacal, Inc.',
  },
  {
    id: 85,
    date: '2022-02-21T07:06:51Z',
    category: 'Dacy',
    amount: 11.6,
    description: null,
  },
  {
    id: 86,
    date: '2022-03-14T05:37:05Z',
    category: 'Quintina',
    amount: 20.0,
    description: null,
  },
  {
    id: 87,
    date: '2022-01-01T11:03:50Z',
    category: 'Diahann',
    amount: 27.5,
    description: null,
  },
  {
    id: 88,
    date: '2022-11-13T22:41:29Z',
    category: 'Pansie',
    amount: 71.3,
    description: 'Johnson & Johnson Consumer Products company, Division of Johnson & Johnson Consumer Companies, Inc.',
  },
  {
    id: 89,
    date: '2022-03-25T13:20:37Z',
    category: 'Cariotta',
    amount: 94.8,
    description: 'McKesson Packaging Services Business Unit of McKesson Corporation',
  },
  {
    id: 90,
    date: '2022-07-27T12:25:20Z',
    category: 'Linell',
    amount: 26.5,
    description: null,
  },
  {
    id: 91,
    date: '2022-03-31T06:01:34Z',
    category: 'Amitie',
    amount: 46.4,
    description: 'King Bio Inc',
  },
  {
    id: 92,
    date: '2022-02-13T08:59:04Z',
    category: 'Shay',
    amount: 93.4,
    description: null,
  },
  {
    id: 93,
    date: '2022-08-06T21:47:42Z',
    category: 'Adelheid',
    amount: 30.1,
    description: 'Fallien Cosmeceuticals, LTD.',
  },
  {
    id: 94,
    date: '2022-06-30T19:23:32Z',
    category: 'Elane',
    amount: 6.4,
    description: null,
  },
  {
    id: 95,
    date: '2022-09-05T11:48:17Z',
    category: 'Vicki',
    amount: 15.6,
    description: null,
  },
  {
    id: 96,
    date: '2022-10-05T15:18:39Z',
    category: 'Corrine',
    amount: 14.2,
    description: 'L Perrigo Company',
  },
  {
    id: 97,
    date: '2022-02-13T06:54:24Z',
    category: 'Maisie',
    amount: 65.8,
    description: null,
  },
  {
    id: 98,
    date: '2022-01-03T09:44:08Z',
    category: 'Fifine',
    amount: 23.3,
    description: 'The Magni Company',
  },
  {
    id: 99,
    date: '2022-11-09T11:19:07Z',
    category: 'Amalle',
    amount: 46.3,
    description: null,
  },
  {
    id: 100,
    date: '2022-04-25T16:52:37Z',
    category: 'Gretchen',
    amount: 22.4,
    description: null,
  },
];
