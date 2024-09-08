import moment from 'moment';
import { paramGetAsync } from '../store/slices/parameterSlice';
import { IInputParameter } from './types';
import { title } from 'process';
import { number } from 'prop-types';
import { Children } from 'react';

export const INPUT_TYPE_FIXED = 'I_FIXED';
export const INPUT_TYPE_TIMING = 'I_TIMING';
export const INPUT_TYPE_SETUP = 'SETUP';

export const INPUT_TYPES = {};
export const INFLATION_START_YEAR = 2021;
export const MODEL_START_YEAR = 2023;
export const TNUOS_DATA_START_YEAR = 2023;

export const LOCAL_CIRCUITS_ZONE: string[] = [
  `Aberarder`,
  `Aberdeen Bay`,
  `Achruach`,
  `Aigas`,
  `An Suidhe`,
  `Arecleoch`,
  `Arecleoch extension`,
  `Ayrshire grid collector`,
  `beaw field`,
  `Beinneun Wind Farm`,
  `Benbrack`,
  `Bhlaraidh Wind Farm`,
  `Black Hill`,
  `Black Law`,
  `BlackCraig Wind Farm`,
  `BlackLaw Extension`,
  `Blarghour`,
  `Branxton`,
  `Broken Cross`,
  `carrick`,
  `Chirmorie`,
  `Clash Gour`,
  `Clauchrie`,
  `Cloiche`,
  `Clyde (North)`,
  `Clyde (South)`,
  `Coalburn BESS`,
  `Coire Glas`,
  `Connagill`,
  `Corriegarth`,
  `Corriemoillie`,
  `Coryton`,
  `costa head`,
  `Craig Watch Wind Farm`,
  `CREAG RIABHACH`,
  `Cruachan`,
  `culham jet`,
  `Culligran`,
  `Cumberhead Collector`,
  `Cumberhead West`,
  `daer`,
  `Deanie`,
  `Dersalloch`,
  `Dinorwig`,
  `Dorenell`,
  `Douglas North`,
  `Dumnaglass`,
  `Dunhill`,
  `Dunlaw Extension`,
  `Edinbane`,
  `elchies`,
  `energy isles wind farm`,
  `Enoch Hill`,
  `euchanhead`,
  `Ewe Hill`,
  `Fallago`,
  `Farr`,
  `Faw Side`,
  `Fernoch`,
  `Ffestiniogg`,
  `Fife Grid Services`,
  `Finlarig`,
  `Foyers`,
  `Friston`,
  `Galawhistle`,
  `Gills Bay`,
  `Glen Kyllachy`,
  `Glen Ullinish`,
  `Glendoe`,
  `Glenglass`,
  `glenmuckloch hydro pumped storage`,
  `glenshimmeroch`,
  `Gordonbush`,
  `Greenburn`,
  `Griffin Wind`,
  `Hadyard Hill`,
  `Harestanes`,
  `Hartlepool`,
  `Heathland`,
  `hesta head`,
  `hopsrig collector`,
  `Invergarry`,
  `Kennoxhead`,
  `Kergord`,
  `Kilgallioch`,
  `Kilmarnock BESS`,
  `Kilmorack`,
  `Kings Lynn`,
  `kirkton`,
  `Kype Muir`,
  `Lairg`,
  `Langage`,
  `lethans`,
  `Limekilns`,
  `Lochay`,
  `Lorg`,
  `Luichart`,
  `Marchwood`,
  `Mark Hill`,
  `melvich`,
  `Middle Muir`,
  `Middleton`,
  `Millennium South`,
  `Millennium Wind `,
  `Mossford`,
  `mossy hill`,
  `Nant`,
  `Necton`,
  `north lowther energy initiative`,
  `old forest of ae`,
  `overhill`,
  `quantans hill`,
  `Rawhills`,
  `Rhigos`,
  `Rocksavage`,
  `ryhall`,
  `Saltend`,
  `Sandy Knowe`,
  `Sanquhar II`,
  `Scoop Hill`,
  `Shepherds rig`,
  `South Humber Bank`,
  `Spalding`,
  `stornoway wind`,
  `Stranoch`,
  `Strathbrora`,
  `Strathy`,
  `Strathy Wind`,
  `Strathy Wood`,
  `Stronelairg`,
  `teindland wind farm`,
  `troston`,
  `Wester Dod`,
  `Whitelee`,
  `Whitelee Extension`
];

export const TNUOS_ZONE_LIST: string[] = [
  `North Scotland`,
  `East Aberdeenshire`,
  `Western Highlands`,
  `Skye and Lochalsh`,
  `Eastern Grampian and Tayside`,
  `Central Grampian`,
  `Argyll`,
  `The Trossachs`,
  `Stirlingshire and Fife`,
  `South West Scotlands`,
  `Lothian and Borders`,
  `Solway and Cheviot`,
  `North East England`,
  `North Lancashire and The Lakes`,
  `South Lancashire, Yorkshire and Humber`,
  `North Midlands and North Wales`,
  `South Lincolnshire and North Norfolk`,
  `Mid Wales and The Midlands`,
  `Anglesey and Snowdon`,
  `Pembrokeshire`,
  `South Wales & Gloucester`,
  `Cotswold`,
  `Central London`,
  `Essex and Kent`,
  `Oxfordshire, Surrey and Sussex`,
  `Somerset and Wessex`,
  `West Devon and Cornwall`
];
export const LOCAL_SUBSTATION_TYPE: string[] = [
  `No redundancy & <1320 MW`,
  `Redundancy & <1320 MW`,
  `No redundancy & >=1320 MW`,
  `Redundancy & >=1320 MW`
];
export const VARIABLE_PROFILE_FOR_ATTRIBUTABLE_COSTS: string[] = [
  'Variable - Upsall central',
  'Variable - Tees',
  'Fixed profile'
];

export const INFLATION_LIST: string[] = [
  `No inflation`,
  `RPI`,
  `CPI`,
  `Tees rent high case`,
  `FES to 2050 then nil`,
  `FES constant from 2050`,
  `CPI to 2050 then nil`,
  `CPI with 2% collar and 5% cap`
];

export const REGION_LIST: string[] = [
  `Northern Scotland`,
  `Southern Scotland`,
  `Northern`,
  `North West`,
  `Yorkshire`,
  `N Wales & Mersey`,
  `East Midlands`,
  `Midlands`,
  `Eastern`,
  `South Wales`,
  `South East`,
  `London`,
  `Southern`,
  `South Western`
];

export const REGION_PARAMS: string[] = [
  'Avg. Cycles per day',
  'Capacity Market Revenues',
  'TNUoS Revenues',
  'Wholesale Day Ahead Revenues',
  'Wholesale Intraday Revenues',
  'Balancing Mechanism Revenues',
  'Frequency Response Revenues',
  'Total Revenues'
];

export const PAYMENT_PROFILE_LIST: string[] = [
  'BESS profile',
  'Tx profile',
  'Balance of Plant profile',
  'Bramley SSEN payment profile',
  'Development fee payment profile',
  'Fully consented 100% payment profile'
];

export const STRATEGY_LIST: string[] = [
  'Merchant and ancillaries',
  'Merchant only'
];

export const PARAM_TYPE = {
  TEXT: 'text',
  NUMBER: 'number',
  INTEGER: 'integer',
  DATE: 'date',
  TABLE: 'table',
  GROUP: 'group',
  SWITCH: {
    EFFICIENCY: 'switch_efficiency',
    ONOFF: 'switch_onoff',
    YESNO: 'switch_yesno'
  },
  CHOICE: {
    PPA_CASE: 'choice_ppa_case',
    TECH: 'choice_tech',
    CURRENCY: 'choice_currency',
    ASSET: 'choice_asset',
    REGION: 'choice_region',
    STRATEGY: 'choice_strategy',
    ACRES: 'choice_acres',
    DURATION: 'choice_duration',
    FORECAST_PROVIDER: 'choice_forecast_provider',
    INFLATION: 'choice_inflation',
    UPSIDE: 'choice_upside',
    DNO: 'choice_dno',
    // LOCALSUBSTATION: 'local_substation_type',
    SUBSTATION_TYPE: 'choice_substation_type',
    GRID_CONNECTION_VOLTAGE: 'choice_grid_connection_voltage',
    SECURITY: 'choice_security',
    ATTRIBUTABLE_SECURITY: 'choice_attributable_security',
    PAYMENT_PROFILE: 'choice_payment_profile',
    FORECAST: 'choice_forecast',
    TNUOS_ZONE_LIST: 'choice_tnuos_zone_list',
    LOCAL_CIRCUITS_ZONE: 'choice_local_circuits_zone'
  }
};

export const SWITCH_DATA = {
  [PARAM_TYPE.SWITCH.EFFICIENCY]: {
    FIXED: { id: 0, label: 'Fixed' },
    FORECAST: { id: 1, label: 'Forecaset' }
  },
  [PARAM_TYPE.SWITCH.ONOFF]: {
    OFF: { id: 0, label: 'Off' },
    ON: { id: 1, label: 'On' }
  },
  [PARAM_TYPE.SWITCH.YESNO]: {
    NO: { id: 0, label: 'No' },
    YES: { id: 1, label: 'Yes' }
  }
};

export const CHOICE_DATA: Record<
  string,
  { id: number; label: string | number; disabled?: boolean }[]
> = {
  [PARAM_TYPE.CHOICE.PPA_CASE]: [
    { id: 1, label: 'Base Case' },
    { id: 2, label: 'Management Case' },
    { id: 3, label: 'Upside Case' }
  ],
  [PARAM_TYPE.CHOICE.ASSET]: [
    { id: 1, label: 'EP1 - Upsall Central (Hag Lane) - base case' },
    { id: 2, label: '[spare] - base case' }
  ],
  [PARAM_TYPE.CHOICE.FORECAST]: [
    { id: 1, label: 'Conservative' },
    { id: 2, label: 'Moderate' },
    { id: 3, label: 'Advanced' }
  ],
  [PARAM_TYPE.CHOICE.TNUOS_ZONE_LIST]: TNUOS_ZONE_LIST.map((t, index) => ({
    id: index + 1,
    label: t
  })),
  [PARAM_TYPE.CHOICE.LOCAL_CIRCUITS_ZONE]: LOCAL_CIRCUITS_ZONE.map(
    (t, index) => ({
      id: index + 1,
      label: t
    })
  ),
  [PARAM_TYPE.CHOICE.SUBSTATION_TYPE]: LOCAL_SUBSTATION_TYPE.map(
    (t, index) => ({
      id: index + 1,
      label: t
    })
  ),

  [PARAM_TYPE.CHOICE.ATTRIBUTABLE_SECURITY]:
    VARIABLE_PROFILE_FOR_ATTRIBUTABLE_COSTS.map((pr, index) => ({
      id: index + 1,
      label: pr
    })),
  [PARAM_TYPE.CHOICE.SECURITY]: [
    { id: 1, label: 'Letter of credit' },
    { id: 2, label: 'Parent Company Guarnatee' },
    { id: 3, label: 'Bond' },
    { id: 4, label: 'Escrow account' }
  ],
  [PARAM_TYPE.CHOICE.PAYMENT_PROFILE]: [
    { id: 1, label: 'BESS profile' },
    { id: 2, label: 'Tx profile' },
    { id: 3, label: 'Balance of Plant profile' },
    { id: 4, label: 'Bramley SSEN payment profile' },
    { id: 5, label: 'Development fee payment profile' },
    { id: 6, label: 'Fully consented 100% payment profile' }
  ],
  [PARAM_TYPE.CHOICE.CURRENCY]: [
    { id: 1, label: 'GBP' },
    { id: 2, label: 'EUR' },
    { id: 3, label: 'USD' }
  ],
  [PARAM_TYPE.CHOICE.UPSIDE]: [
    { id: 1, label: 'Upside value at P90' },
    { id: 2, label: 'Upside value at P50' },
    { id: 3, label: 'Upside value at P25' },
    { id: 4, label: 'Upside value at P10' }
  ],
  [PARAM_TYPE.CHOICE.GRID_CONNECTION_VOLTAGE]: [
    { id: 1, label: '<132 kV' },
    { id: 2, label: '132 kV' },
    { id: 3, label: '275 kV' },
    { id: 4, label: '400 kV' }
  ],
  [PARAM_TYPE.CHOICE.UPSIDE]: [
    { id: 1, label: 'Upside value at P90' },
    { id: 2, label: 'Upside value at P50' },
    { id: 3, label: 'Upside value at P25' },
    { id: 4, label: 'Upside value at P10' }
  ],
  [PARAM_TYPE.CHOICE.DNO]: REGION_LIST.map((r, index) => ({
    id: index + 1,
    label: r
  })),
  [PARAM_TYPE.CHOICE.STRATEGY]: STRATEGY_LIST.map((r, index) => ({
    id: index + 1,
    label: r
  })),
  [PARAM_TYPE.CHOICE.TECH]: [
    { id: 1, label: 'BESS' },
    { id: 2, label: 'Substation', disabled: true },
    { id: 3, label: 'Solar', disabled: true },
    { id: 4, label: 'Onshore wind', disabled: true },
    { id: 5, label: 'Offshore wind', disabled: true },
    { id: 6, label: 'Ev charging', disabled: true }
  ],
  [PARAM_TYPE.CHOICE.REGION]: REGION_LIST.map((r, index) => ({
    id: index + 1,
    label: r
  })),
  [PARAM_TYPE.CHOICE.FORECAST_PROVIDER]: [
    { id: 1, label: 'Modo' },
    { id: 2, label: 'Afry' },
    { id: 3, label: 'Bringa' }
  ],
  [PARAM_TYPE.CHOICE.ACRES]: [{ id: 1, label: 75 }],
  [PARAM_TYPE.CHOICE.DURATION]: [
    { id: 1, label: 2 },
    { id: 2, label: 4 },
    { id: 3, label: 8 }
  ],
  [PARAM_TYPE.CHOICE.INFLATION]: INFLATION_LIST.map((i, index) => ({
    id: index + 1,
    label: i
  }))
};

export const PARAM_UNIT = {
  MW: {
    id: 'mw',
    label: 'MW'
  },
  DATE: {
    id: 'date',
    label: 'Date'
  },
  ACRES: {
    id: 'acres',
    label: 'Acres'
  },
  DAYS: {
    id: 'days',
    label: 'Days'
  },
  MONTH: {
    id: 'month',
    label: 'Month'
  },
  MONTHS: {
    id: 'months',
    label: 'Months'
  },
  YEAR: {
    id: 'year',
    label: 'Year'
  },
  YEARS: {
    id: 'years',
    label: 'Years'
  },
  HOUR: {
    id: 'hour',
    label: 'Hours'
  },
  PERCENTAGE: {
    id: 'percentage',
    label: '%'
  },
  PERCENTAGE_PA: {
    id: 'percentage_pa',
    label: '% p.a'
  },
  MWH: {
    id: 'mwh',
    label: 'MWh'
  },
  GBP_PER_MWH: {
    id: 'gbp_per_mwh',
    label: '£/MWh'
  },
  GBP_PER_KW_YEAR: {
    id: 'gbp_per_kwy',
    label: '£/kW/year'
  },
  GBP_PRO_1000: {
    id: 'gbp_pro_1000',
    label: "£'000"
  },
  USD_PRO_1000: {
    id: 'usd_pro_1000',
    label: "$'000"
  },
  GBP_PRO_1000_PER_MW: {
    id: 'gbp_pro_1000_per_mw',
    label: "£'000/MW"
  },
  USD_1000_PER_MW: {
    id: 'usd_pro_1000_per_mw',
    label: "$'000/MW"
  },
  GBP_PRO_1000_PER_KM: {
    id: 'gbp_pro_1000_per_km',
    label: "£'000/km"
  },
  KM: {
    id: 'km',
    label: 'km'
  },
  KW_PER_HOUR: {
    id: 'kw_per_hour',
    label: 'kW/hr'
  },
  EUR: {
    id: 'eur',
    label: '€'
  },
  GBP: {
    id: 'gbp',
    label: '£'
  },
  USD: {
    id: 'usd',
    label: '$'
  },
  GBP_PER_GBP: {
    id: 'gbp_per_gbp',
    label: '£/£'
  },
  EUR_PER_GBP: {
    id: 'eur_per_gbp',
    label: '€/£'
  },
  USD_PER_GBP: {
    id: 'usd_per_gbp',
    label: '$/£'
  }
};

export interface ICurrency {
  id: 'usd' | 'eur' | 'gbp';
  unit: { id: string; label: string };
  label: 'USD' | 'EUR' | 'GBP';
}

export const CURRENCY_LIST: ICurrency[] = [
  { id: 'usd', unit: PARAM_UNIT.USD, label: 'USD' },
  { id: 'eur', unit: PARAM_UNIT.EUR, label: 'EUR' },
  { id: 'gbp', unit: PARAM_UNIT.GBP, label: 'GBP' }
];

export const TABLE_SETTING = {};

export const defaultCurrency = CURRENCY_LIST[2];

export interface ITABLE_PARAMETER {
  title: string;
  type: string;
  unit: { id: string; label: string } | null;
  stickyCols:
    | {
        type: string;
        params: string[];
        fn: any;
      }
    | undefined
    | null;
  stickyRows:
    | {
        type: string;
        params: string[];
        fn: any;
      }
    | undefined
    | null;
}
export interface ITIMING_PARAMETER_SUBCATEGORY {
  id: string;
  title: string;
  values: ITABLE_PARAMETER[];
}
export interface ITIMEING_PARAMETER {
  id: string;
  category: string;
  sub_categories: ITIMING_PARAMETER_SUBCATEGORY[];
}
export const INPUT_PARAMS: IInputParameter[] = [
  {
    id: 'basic_project_inputs',
    title: 'Basic Project Inputs',
    datum: [
      {
        id: 'project_name',
        title: 'Project name',
        type: PARAM_TYPE.TEXT,
        defaultValue: 'Wind Farm'
      },
      {
        id: 'capacity_per_turbine',
        title: 'Capacity per turbine',
        type: PARAM_TYPE.NUMBER,
        defaultValue: 3,
        unit: PARAM_UNIT.MW,
        minValue: 1,
        maxValue: 50
      },
      {
        id: 'number_of_turbine',
        title: 'Number of turbines',
        type: PARAM_TYPE.INTEGER,
        defaultValue: 20,
        minValue: 1,
        maxValue: 100
      },

      {
        id: 'construction_start_date',
        title: 'Construction start date',
        type: PARAM_TYPE.DATE,
        defaultValue: '2021-01-01'
      },
      {
        id: 'construction_period_in_months',
        title: 'Construction period in months',
        type: PARAM_TYPE.INTEGER,
        unit: PARAM_UNIT.MONTHS,
        defaultValue: 24,
        minValue: 1,
        maxValue: 24
      },
      {
        id: 'operation_period',
        title: 'Operation period',
        type: PARAM_TYPE.INTEGER,
        unit: PARAM_UNIT.YEARS,
        defaultValue: 40,
        minValue: 10,
        maxValue: 50
      },
      {
        id: 'decommissioning_period',
        title: 'Decommissioning period',
        type: PARAM_TYPE.INTEGER,
        unit: PARAM_UNIT.MONTHS,
        defaultValue: 3,
        minValue: 1,
        maxValue: 12
      }
    ],
    children: []
  },
  {
    id: 'revenue',
    title: 'Revenue',
    datum: [],
    children: [
      {
        id: 'power_purachase_agreement',
        title: 'Power Purchase Agreement',
        datum: [
          {
            id: 'ppa_start_date',
            title: 'PPA Start Date',
            type: PARAM_TYPE.DATE
          },
          {
            id: 'ppa_case',
            title: 'PPA Case',
            type: PARAM_TYPE.CHOICE.PPA_CASE
          },
          {
            id: 'ppa_term',
            title: 'PPA Term',
            type: PARAM_TYPE.GROUP,
            children: [
              {
                id: 'base_case',
                title: 'Base Case',
                type: PARAM_TYPE.INTEGER,
                minValue: 10,
                maxValue: 50
              },
              {
                id: 'management_case',
                title: 'Management Case',
                type: PARAM_TYPE.INTEGER,
                minValue: 10,
                maxValue: 50
              },
              {
                id: 'upside_case',
                title: 'Upside Case',
                type: PARAM_TYPE.INTEGER,
                minValue: 10,
                maxValue: 50
              }
            ]

            // stickyCols: {
            //   type: 'function',
            //   params: [],
            //   fn: () => {
            //     const cases = CHOICE_DATA[PARAM_TYPE.CHOICE.PPA_CASE].map(
            //       (dd) => dd.label
            //     );
            //     return cases;
            //   }
            // },
            // stickyRows: {
            //   type: 'function',
            //   params: [],
            //   fn: () => {
            //     const result = [];
            //     result.push('');
            //     const len = CHOICE_DATA[PARAM_TYPE.CHOICE.DNO].length;
            //     for (let i = 0; i < len; i++) {
            //       result.push(CHOICE_DATA[PARAM_TYPE.CHOICE.DNO][i].label);
            //     }
            //     return result;
            //   }
            // }
          },
          {
            id: 'percentage_sold_of_fit_during_ppa_term',
            title: 'Percentage of Electricity sold of FiT rate during PPA Term',
            type: PARAM_TYPE.TABLE,
            stickyCols: {
              type: 'function',
              params: ['operationStartDate'],
              fn: () => {
                const cases = CHOICE_DATA[PARAM_TYPE.CHOICE.PPA_CASE].map(
                  (dd) => dd.label
                );
                return cases;
              }
            },
            stickyRows: {
              type: 'function',
              params: ['cyclesPerDay'],
              fn: () => {
                const result = [' '];
                result.push('Years');
                return result;
              }
            }
          }
        ]
      }
      // {
      //   id: 'excluding_batteries',
      //   title: 'Excluding batteries',
      //   datum: [
      //     {
      //       id: 'excluding_battery_sensitivity',
      //       title: 'Excluding battery sensitivity',
      //       type: PARAM_TYPE.SWITCH.ONOFF
      //     },
      //     {
      //       id: 'excluding_battery_sensitivity_magnitude',
      //       title: 'Excluding battery sensitivity magnitude',
      //       type: PARAM_TYPE.NUMBER,
      //       unit: PARAM_UNIT.PERCENTAGE,
      //       isShow: {
      //         params: {
      //           global: [],
      //           local: ['excluding_battery_sensitivity']
      //         },
      //         fn: ({
      //           excluding_battery_sensitivity
      //         }: {
      //           excluding_battery_sensitivity: number;
      //         }) =>
      //           excluding_battery_sensitivity ==
      //           SWITCH_DATA[PARAM_TYPE.SWITCH.ONOFF].ON?.id
      //       }
      //     }
      //   ],
      //   children: [
      //     {
      //       id: 'land',
      //       title: 'Land',
      //       datum: [
      //         // {
      //         //   id: 'currency',
      //         //   title: 'Currency',
      //         //   type: PARAM_TYPE.CHOICE.CURRENCY
      //         // },
      //         {
      //           id: 'land_cost',
      //           title: 'Land cost',
      //           type: PARAM_TYPE.NUMBER,
      //           unit: PARAM_UNIT.GBP_PRO_1000_PER_MW
      //         },
      //         {
      //           id: 'payment_profile',
      //           title: 'Payment profile',
      //           type: PARAM_TYPE.CHOICE.PAYMENT_PROFILE
      //         },
      //         {
      //           id: 'useful_economic_life',
      //           title: 'Useful economic life',
      //           type: PARAM_TYPE.INTEGER,
      //           unit: PARAM_UNIT.YEARS,
      //           minValue: 10,
      //           maxValue: 50
      //         },

      //         {
      //           id: 'capex_provision_months',
      //           title: 'Capex provision months',
      //           type: PARAM_TYPE.INTEGER,
      //           unit: PARAM_UNIT.MONTHS,
      //           minValue: 0,
      //           maxValue: 6
      //         }
      //       ]
      //     },
      //     {
      //       id: 'pooling_substation',
      //       title: 'Pooling substation',
      //       datum: [
      //         // {
      //         //   id: 'currency',
      //         //   title: 'Currency',
      //         //   type: PARAM_TYPE.CHOICE.CURRENCY
      //         // },
      //         {
      //           id: 'pooling_substation_cost',
      //           title: 'Pooling substation cost',
      //           type: PARAM_TYPE.NUMBER,
      //           unit: PARAM_UNIT.GBP_PRO_1000_PER_MW
      //         },
      //         {
      //           id: 'payment_profile',
      //           title: 'Payment profile',
      //           type: PARAM_TYPE.CHOICE.PAYMENT_PROFILE
      //         },
      //         {
      //           id: 'useful_economic_life',
      //           title: 'Useful economic life',
      //           type: PARAM_TYPE.INTEGER,
      //           unit: PARAM_UNIT.YEARS,
      //           minValue: 10,
      //           maxValue: 50
      //         },

      //         {
      //           id: 'capex_provision_months',
      //           title: 'Capex provision months',
      //           type: PARAM_TYPE.INTEGER,
      //           unit: PARAM_UNIT.MONTHS,
      //           minValue: 0,
      //           maxValue: 6
      //         }
      //       ]
      //     },
      //     {
      //       id: 'transformers',
      //       title: 'Transformers',
      //       datum: [
      //         {
      //           id: 'transformers_cost',
      //           title: 'Transformers cost',
      //           type: PARAM_TYPE.NUMBER,
      //           unit: PARAM_UNIT.GBP_PRO_1000_PER_MW
      //         },
      //         {
      //           id: 'payment_profile',
      //           title: 'Payment profile',
      //           type: PARAM_TYPE.CHOICE.PAYMENT_PROFILE
      //         },
      //         {
      //           id: 'useful_economic_life',
      //           title: 'Useful economic life',
      //           type: PARAM_TYPE.INTEGER,
      //           unit: PARAM_UNIT.YEARS,
      //           minValue: 10,
      //           maxValue: 50
      //         },

      //         {
      //           id: 'capex_provision_months',
      //           title: 'Capex provision months',
      //           type: PARAM_TYPE.INTEGER,
      //           unit: PARAM_UNIT.MONTHS,
      //           minValue: 0,
      //           maxValue: 6
      //         }
      //       ]
      //     },
      //     {
      //       id: 'balance_of_plant',
      //       title: 'Balance of plant',
      //       datum: [
      //         // {
      //         //   id: 'currency',
      //         //   title: 'Currency',
      //         //   type: PARAM_TYPE.CHOICE.CURRENCY
      //         // },
      //         {
      //           id: 'balance_of_plant_cost',
      //           title: 'Balance of plant cost',
      //           type: PARAM_TYPE.NUMBER,
      //           unit: PARAM_UNIT.GBP_PRO_1000
      //         },
      //         {
      //           id: 'payment_profile',
      //           title: 'Payment profile',
      //           type: PARAM_TYPE.CHOICE.PAYMENT_PROFILE
      //         },
      //         {
      //           id: 'useful_economic_life',
      //           title: 'Useful economic life',
      //           type: PARAM_TYPE.INTEGER,
      //           unit: PARAM_UNIT.YEARS,
      //           minValue: 10,
      //           maxValue: 50
      //         },

      //         {
      //           id: 'capex_provision_months',
      //           title: 'Capex provision months',
      //           type: PARAM_TYPE.INTEGER,
      //           unit: PARAM_UNIT.MONTHS,
      //           minValue: 0,
      //           maxValue: 6
      //         }
      //       ]
      //     },
      //     {
      //       id: 'enterprise_value',
      //       title: 'Enterprise value - development fee',
      //       datum: [
      //         {
      //           id: 'enterprise_value_switch',
      //           title: 'Switch',
      //           type: PARAM_TYPE.SWITCH.ONOFF,
      //           defaultValue: SWITCH_DATA[PARAM_TYPE.SWITCH.ONOFF].ON?.id
      //         },
      //         // {
      //         //   id: 'currency',
      //         //   title: 'Currency',
      //         //   type: PARAM_TYPE.CHOICE.CURRENCY,
      //         //   isShow: {
      //         //     params: {
      //         //       global: [],
      //         //       local: ['enterprise_value_switch']
      //         //     },
      //         //     fn: ({
      //         //       enterprise_value_switch
      //         //     }: {
      //         //       enterprise_value_switch: number;
      //         //     }) =>
      //         //       enterprise_value_switch ==
      //         //       SWITCH_DATA[PARAM_TYPE.SWITCH.ONOFF].ON?.id
      //         //   }
      //         // },
      //         {
      //           id: 'enterprise_value_data',
      //           title: 'Enterprise value data',
      //           type: PARAM_TYPE.GROUP,
      //           children: [
      //             {
      //               id: 'development_fee_hour_1',
      //               title: 'Development fee hour 1',
      //               type: PARAM_TYPE.NUMBER,
      //               unit: PARAM_UNIT.GBP_PRO_1000_PER_MW
      //             },
      //             {
      //               id: 'development_fee_hour_2',
      //               title: 'Development fee hour 2',
      //               type: PARAM_TYPE.NUMBER,
      //               unit: PARAM_UNIT.GBP_PRO_1000_PER_MW
      //             },
      //             {
      //               id: 'development_fee_hour_3',
      //               title: 'Development fee hour 3',
      //               type: PARAM_TYPE.NUMBER,
      //               unit: PARAM_UNIT.GBP_PRO_1000_PER_MW
      //             },
      //             {
      //               id: 'development_fee_hour_4',
      //               title: 'Development fee hour 4',
      //               type: PARAM_TYPE.NUMBER,
      //               unit: PARAM_UNIT.GBP_PRO_1000_PER_MW
      //             },
      //             {
      //               id: 'development_fee_hour_5',
      //               title: 'Development fee hour 5',
      //               type: PARAM_TYPE.NUMBER,
      //               unit: PARAM_UNIT.GBP_PRO_1000_PER_MW
      //             },
      //             {
      //               id: 'development_fee_hour_6',
      //               title: 'Development fee hour 6',
      //               type: PARAM_TYPE.NUMBER,
      //               unit: PARAM_UNIT.GBP_PRO_1000_PER_MW
      //             },
      //             {
      //               id: 'development_fee_hour_7',
      //               title: 'Development fee hour 7',
      //               type: PARAM_TYPE.NUMBER,
      //               unit: PARAM_UNIT.GBP_PRO_1000_PER_MW
      //             },
      //             {
      //               id: 'development_fee_hour_8',
      //               title: 'Development fee hour 8',
      //               type: PARAM_TYPE.NUMBER,
      //               unit: PARAM_UNIT.GBP_PRO_1000_PER_MW
      //             }
      //           ],
      //           isShow: {
      //             params: {
      //               global: [],
      //               local: ['enterprise_value_switch']
      //             },
      //             fn: ({
      //               enterprise_value_switch
      //             }: {
      //               enterprise_value_switch: number;
      //             }) =>
      //               enterprise_value_switch ==
      //               SWITCH_DATA[PARAM_TYPE.SWITCH.ONOFF].ON?.id
      //           }
      //         },
      //         {
      //           id: 'payment_profile',
      //           title: 'Payment profile',
      //           type: PARAM_TYPE.CHOICE.PAYMENT_PROFILE,
      //           isShow: {
      //             params: {
      //               global: [],
      //               local: ['enterprise_value_switch']
      //             },
      //             fn: ({
      //               enterprise_value_switch
      //             }: {
      //               enterprise_value_switch: number;
      //             }) =>
      //               enterprise_value_switch ==
      //               SWITCH_DATA[PARAM_TYPE.SWITCH.ONOFF].ON?.id
      //           }
      //         },
      //         {
      //           id: 'useful_economic_life',
      //           title: 'Useful economic life',
      //           type: PARAM_TYPE.INTEGER,
      //           unit: PARAM_UNIT.YEARS,
      //           minValue: 10,
      //           maxValue: 50,
      //           isShow: {
      //             params: {
      //               global: [],
      //               local: ['enterprise_value_switch']
      //             },
      //             fn: ({
      //               enterprise_value_switch
      //             }: {
      //               enterprise_value_switch: number;
      //             }) =>
      //               enterprise_value_switch ==
      //               SWITCH_DATA[PARAM_TYPE.SWITCH.ONOFF].ON?.id
      //           }
      //         },
      //         {
      //           id: 'capex_provision_months',
      //           title: 'Capex provision months',
      //           type: PARAM_TYPE.INTEGER,
      //           unit: PARAM_UNIT.MONTHS,
      //           minValue: 0,
      //           maxValue: 6,
      //           isShow: {
      //             params: {
      //               global: [],
      //               local: ['enterprise_value_switch']
      //             },
      //             fn: ({
      //               enterprise_value_switch
      //             }: {
      //               enterprise_value_switch: number;
      //             }) =>
      //               enterprise_value_switch ==
      //               SWITCH_DATA[PARAM_TYPE.SWITCH.ONOFF].ON?.id
      //           }
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   id: 'capex_payment_profile_data',
      //   title: 'Capex payment profile data',
      //   datum: [
      //     // {
      //     //   id: 'operation_start_date',
      //     //   title: 'COD and operation start date',
      //     //   type: PARAM_TYPE.DATE
      //     //   //  this date comes from operation start date.
      //     //   // only visible, not changeable
      //     // },
      //     {
      //       id: 'capex_payment_profiles',
      //       title: 'Capex payment profiles',
      //       type: PARAM_TYPE.TABLE,
      //       stickyRows: {
      //         type: 'function',
      //         params: ['operationStartDate'],
      //         fn: ({
      //           operationStartDate = '2028-01-01'
      //         }: {
      //           operationStartDate: string;
      //         }) => {
      //           const result = [];
      //           result.push([
      //             'CapexMilestonePaymentList',
      //             moment(operationStartDate).format('DD-MMM-YY')
      //           ]);
      //           for (let i = 0; i < 30; i++) {
      //             result.push([
      //               i + 1 - 30,
      //               `COD ${i + 1 - 30}`,
      //               moment(operationStartDate)
      //                 .add('month', i)
      //                 .endOf('month')
      //                 .format('DD-MMM-YY')
      //             ]);
      //           }
      //           return result;
      //         }
      //       },
      //       stickyCols: {
      //         type: 'function',
      //         params: ['cyclesPerDay'],

      //         //

      //         fn: () =>
      //           CHOICE_DATA[PARAM_TYPE.CHOICE.PAYMENT_PROFILE].map(
      //             (c) => c?.label
      //           )
      //       }
      //     }
      //   ]
      // }
    ]
  },
  {
    id: 'cost_of_sales',
    title: 'Cost of sales',
    datum: [],
    children: [
      {
        id: 'optimiser',
        title: 'Optimiser',
        datum: [
          {
            id: 'optimiser_switch',
            title: 'Optimiser switch',
            type: PARAM_TYPE.SWITCH.ONOFF
          },
          {
            id: 'optimiser_commission',
            title: 'Optimiser commission of revenue',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.PERCENTAGE,
            isShow: {
              params: {
                global: [],
                local: ['optimiser_switch']
              },
              fn: ({ optimiser_switch }: { optimiser_switch: number }) =>
                optimiser_switch == SWITCH_DATA[PARAM_TYPE.SWITCH.ONOFF].ON?.id
            }
          },

          {
            id: 'optimiser_upside_value',
            title: 'Optimiser upside value',
            type: PARAM_TYPE.CHOICE.UPSIDE,
            isShow: {
              params: {
                global: [],
                local: ['optimiser_switch']
              },
              fn: ({ optimiser_switch }: { optimiser_switch: number }) =>
                optimiser_switch == SWITCH_DATA[PARAM_TYPE.SWITCH.ONOFF].ON?.id
            }
          },

          {
            id: 'optimiser_floor',
            title: 'Floor',
            type: PARAM_TYPE.GROUP,
            children: [
              {
                id: 'start_date',
                title: 'Start date',
                type: PARAM_TYPE.DATE
              },
              {
                id: 'end_date',
                title: 'End date',
                type: PARAM_TYPE.DATE
              },
              {
                id: 'floor_price',
                title: 'Floor price',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.GBP_PER_KW_YEAR
              }
            ],
            isShow: {
              params: {
                global: [],
                local: ['optimiser_switch']
              },
              fn: ({ optimiser_switch }: { optimiser_switch: number }) =>
                optimiser_switch == SWITCH_DATA[PARAM_TYPE.SWITCH.ONOFF].ON?.id
            }
          }
        ]
      },
      {
        id: 'ppa_fees',
        title: 'PPA fee',
        datum: [
          {
            id: 'ppa_fee_as_a_percent_of_revenue',
            title: 'PPA fee as a percent of revenue',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.PERCENTAGE
          }
        ]
      },

      {
        id: 'auxilliary_losses',
        title: 'Auxilliary losses',
        datum: [
          {
            id: 'auxilliary_losses_inflation_profile',
            title: 'Auxilliary losses inflation profile',
            type: PARAM_TYPE.CHOICE.INFLATION
          },
          {
            id: 'auxilliary_losses_inflation_base_year',
            title: 'Auxilliary losses inflation base year',
            type: PARAM_TYPE.INTEGER,
            unit: PARAM_UNIT.YEAR,
            minValue: INFLATION_START_YEAR,
            maxValue: INFLATION_START_YEAR + 50
          },
          {
            id: 'auxilliary_losses_factor_2',
            title: 'Auxilliary losses factor - 2hour system',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.KW_PER_HOUR
          },
          {
            id: 'auxilliary_losses_factor_4',
            title: 'Auxilliary losses factor - 4hour system',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.KW_PER_HOUR
          },
          {
            id: 'auxilliary_losses_factor_8',
            title: 'Auxilliary losses factor - 8hour system',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.KW_PER_HOUR
          }
        ]
      },
      {
        id: 'metering',
        title: 'Metering',
        datum: [
          {
            id: 'metering_inflation_profile',
            title: 'Metering inflation profile',
            type: PARAM_TYPE.CHOICE.INFLATION
          },
          {
            id: 'metering_inflation_base_year',
            title: 'Metering inflation base year',
            type: PARAM_TYPE.INTEGER,
            unit: PARAM_UNIT.YEAR,
            minValue: INFLATION_START_YEAR,
            maxValue: INFLATION_START_YEAR + 50
          },
          {
            id: 'annual_cost_per_MW_2',
            title: 'Annual cost per MW - 2hour system',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000_PER_MW
          },
          {
            id: 'annual_cost_per_MW_4',
            title: 'Annual cost per MW - 4hour system',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000_PER_MW
          },
          {
            id: 'annual_cost_per_MW_8',
            title: 'Annual cost per MW - 8hour system',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000_PER_MW
          }
        ]
      },

      {
        id: 'duos_charges',
        title: 'DUoS charges',
        datum: [
          {
            id: 'distribution_connection',
            title: 'Distribution connection',
            type: PARAM_TYPE.SWITCH.YESNO
          },
          {
            id: 'dno',
            title: 'DNO',
            type: PARAM_TYPE.CHOICE.DNO
          },
          {
            id: 'number_of_metering_points',
            title: 'Number of metering points',
            type: PARAM_TYPE.NUMBER
          },
          {
            id: 'duos_inflation_profile',
            title: 'DUoS inflation profile',
            type: PARAM_TYPE.CHOICE.INFLATION
          },
          {
            id: 'duos_inflation_base_year',
            title: 'DUoS inflation base year',
            type: PARAM_TYPE.INTEGER,
            unit: PARAM_UNIT.YEAR,
            minValue: INFLATION_START_YEAR,
            maxValue: INFLATION_START_YEAR + 50
          },
          {
            id: 'dnuos_data',
            title: 'DUoS data',
            type: PARAM_TYPE.TABLE,
            unit: null,

            stickyCols: {
              type: 'function',
              params: [],
              fn: () => {
                const dnoDataList = [
                  'Import Fixed Charge',
                  'Import Super Red Unit Charge',
                  'Import Capacity Charge',
                  'Export Fixed Charge',
                  'GDUoS Generation Red',
                  'Export Exceeded Capacity Charge'
                ];
                return dnoDataList;
              }
            },
            stickyRows: {
              type: 'function',
              params: [],
              fn: () => {
                const result = [];
                result.push('');
                const len = CHOICE_DATA[PARAM_TYPE.CHOICE.DNO].length;
                for (let i = 0; i < len; i++) {
                  result.push(CHOICE_DATA[PARAM_TYPE.CHOICE.DNO][i].label);
                }
                return result;
              }
            }
          }
        ]
      },
      {
        id: 'tnuos',
        title: 'TNUoS',

        children: [
          {
            id: 'triad_charges',
            title: 'Triad charges',
            datum: [
              {
                id: 'tnuos_charges_unavoidable_switch',
                title: 'TNUoS charges unavoidable switch',
                type: PARAM_TYPE.SWITCH.YESNO
              },
              {
                id: 'anticipated_export_during_triads_as_a_percent_of_grid_connection',
                title:
                  'Anticipated export during triads as a percent of grid connection',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE
              },
              {
                id: 'portion_of_triads_expected_november',
                title: 'Portion of triads expected November',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE
              },
              {
                id: 'portion_of_triads_expected_december',
                title: 'Portion of triads expected December',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE
              },
              {
                id: 'portion_of_triads_expected_january',
                title: 'Portion of triads expected January',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE
              },
              {
                id: 'portion_of_triads_expected_february',
                title: 'Portion of triads expected February',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE
              }
            ]
          },
          {
            id: 'export_charges',
            title: 'Export charges',
            datum: [
              {
                id: 'transmission_connection_switch',
                title: 'Transmission connection switch',
                type: PARAM_TYPE.SWITCH.YESNO
              },
              {
                id: 'tnuos_zone',
                title: 'TNUoS zone',
                type: PARAM_TYPE.CHOICE.TNUOS_ZONE_LIST
              },
              {
                id: 'local_circuits',
                title: 'Local circuits',
                type: PARAM_TYPE.CHOICE.LOCAL_CIRCUITS_ZONE
              },
              {
                id: 'local_circuits_data',
                title: 'Local circuits data',
                type: PARAM_TYPE.TABLE,
                stickyCols: {
                  type: 'function',
                  params: [],
                  fn: () =>
                    CHOICE_DATA[PARAM_TYPE.CHOICE.LOCAL_CIRCUITS_ZONE].map(
                      (c) => c?.label
                    )
                },
                stickyRows: {
                  type: 'function',
                  params: [],
                  fn: () => {
                    const result = [];
                    result.push('');
                    for (let i = 0; i < 51; i++) {
                      result.push([TNUOS_DATA_START_YEAR + i]);
                    }
                    return result;
                  }
                }
              },
              {
                id: 'local_substation_type',
                title: 'Local substaion type',
                type: PARAM_TYPE.CHOICE.SUBSTATION_TYPE
              },
              {
                id: 'grid_connection_voltage',
                title: 'Grid connection voltage',
                type: PARAM_TYPE.CHOICE.GRID_CONNECTION_VOLTAGE
              },
              {
                id: 'local_substation_type_by_voltage_data',
                title: 'Local substation type by voltage',
                type: PARAM_TYPE.TABLE,
                stickyCols: {
                  type: 'function',
                  params: [],
                  fn: () => LOCAL_SUBSTATION_TYPE
                },
                stickyRows: {
                  type: 'function',
                  params: [],
                  fn: () => {
                    const result = [];
                    result.push('');

                    CHOICE_DATA[PARAM_TYPE.CHOICE.GRID_CONNECTION_VOLTAGE].map(
                      (d) => result.push(d.label)
                    );
                    return result;
                  }
                }
              },

              {
                id: 'annual_load_factor',
                title: 'Annual load factor',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE
              }
            ]
          },
          {
            id: 'wider_tariff',
            title: 'Wider tariff',
            datum: [
              {
                id: 'system_peak_tariff_data',
                title: 'System peak tariff data',
                type: PARAM_TYPE.TABLE,
                stickyCols: {
                  type: 'function',
                  params: [],
                  fn: () =>
                    CHOICE_DATA[PARAM_TYPE.CHOICE.TNUOS_ZONE_LIST].map(
                      (c) => c?.label
                    )
                },
                stickyRows: {
                  type: 'function',
                  params: [],
                  fn: () => {
                    const result = [];
                    result.push('');
                    for (let i = 0; i < 50; i++) {
                      result.push([TNUOS_DATA_START_YEAR + i]);
                    }
                    return result;
                  }
                }
              },
              {
                id: 'not_shared_round_tariff',
                title: 'Not shared round tariff',
                type: PARAM_TYPE.TABLE,
                stickyCols: {
                  type: 'function',
                  params: [],
                  fn: () =>
                    CHOICE_DATA[PARAM_TYPE.CHOICE.TNUOS_ZONE_LIST].map(
                      (c) => c?.label
                    )
                },
                stickyRows: {
                  type: 'function',
                  params: [],
                  fn: () => {
                    const result = [];
                    result.push('');
                    for (let i = 0; i < 50; i++) {
                      result.push([TNUOS_DATA_START_YEAR + i]);
                    }
                    return result;
                  }
                }
              },
              {
                id: 'shared_year_round_tariff',
                title: 'Shared year round tariff',
                type: PARAM_TYPE.TABLE,
                stickyCols: {
                  type: 'function',
                  params: [],
                  fn: () =>
                    CHOICE_DATA[PARAM_TYPE.CHOICE.TNUOS_ZONE_LIST].map(
                      (c) => c?.label
                    )
                },
                stickyRows: {
                  type: 'function',
                  params: [],
                  fn: () => {
                    const result = [];
                    result.push('');
                    for (let i = 0; i < 50; i++) {
                      result.push([TNUOS_DATA_START_YEAR + i]);
                    }
                    return result;
                  }
                }
              },
              {
                id: 'adjustment_tariff',
                title: 'Adjustment tarifff',
                type: PARAM_TYPE.TABLE,
                stickyCols: {
                  type: 'function',
                  params: [],
                  fn: () =>
                    CHOICE_DATA[PARAM_TYPE.CHOICE.TNUOS_ZONE_LIST].map(
                      (c) => c?.label
                    )
                },
                stickyRows: {
                  type: 'function',
                  params: [],
                  fn: () => {
                    const result = [];
                    result.push('');
                    for (let i = 0; i < 50; i++) {
                      result.push([TNUOS_DATA_START_YEAR + i]);
                    }
                    return result;
                  }
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'administrative_costs',
    title: 'Administrative costs',
    datum: [
      // {
      //   id: 'opex_sensitivity',
      //   title: 'Opex sensitivity',
      //   type: PARAM_TYPE.SWITCH.ONOFF
      // },
      // {
      //   id: 'opex_sensitivity_magnitude',
      //   title: 'Opex sensitivity magnitude',
      //   type: PARAM_TYPE.NUMBER,
      //   unit: PARAM_UNIT.PERCENTAGE,
      //   isShow: {
      //     params: {
      //       global: [],
      //       local: ['opex_sensitivity']
      //     },
      //     fn: ({ opex_sensitivity }: { opex_sensitivity: number }) =>
      //       opex_sensitivity == SWITCH_DATA[PARAM_TYPE.SWITCH.ONOFF].ON?.id
      //   }
      // }
    ],
    children: [
      {
        id: 'land_rent',
        title: 'Land rent',
        datum: [
          {
            id: 'land_rent_switch',
            title: 'Land rent switch',
            type: PARAM_TYPE.SWITCH.ONOFF
          },
          {
            id: 'land_rent_sensitivity',
            title: 'Land rent sensitivity',
            type: PARAM_TYPE.SWITCH.ONOFF,
            isShow: {
              params: {
                global: [],
                local: ['land_rent_switch']
              },
              fn: ({ land_rent_switch }: { land_rent_switch: number }) =>
                land_rent_switch == SWITCH_DATA[PARAM_TYPE.SWITCH.ONOFF].ON?.id
            }
          },
          {
            id: 'land_rent_sensitivity_magnitude',
            title: 'Land rent sensitivity_magnitude',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.PERCENTAGE,
            isShow: {
              params: {
                global: [],
                local: ['land_rent_sensitivity', 'land_rent_switch']
              },
              fn: ({
                land_rent_sensitivity,
                land_rent_switch
              }: {
                land_rent_sensitivity: number;
                land_rent_switch: number;
              }) =>
                land_rent_sensitivity * land_rent_switch ==
                SWITCH_DATA[PARAM_TYPE.SWITCH.ONOFF].ON?.id
            }
          },
          {
            id: 'land_rent_inflation_profile',
            title: 'Land rent inflation profile',
            type: PARAM_TYPE.CHOICE.INFLATION,
            isShow: {
              params: {
                global: [],
                local: ['land_rent_switch']
              },
              fn: ({ land_rent_switch }: { land_rent_switch: number }) =>
                land_rent_switch == SWITCH_DATA[PARAM_TYPE.SWITCH.ONOFF].ON?.id
            }
          },
          {
            id: 'land_rent_inflation_base_year',
            title: 'Land rent inflation base year',
            type: PARAM_TYPE.INTEGER,
            unit: PARAM_UNIT.YEAR,
            minValue: INFLATION_START_YEAR,
            maxValue: INFLATION_START_YEAR + 50,

            isShow: {
              params: {
                global: [],
                local: ['land_rent_switch']
              },
              fn: ({ land_rent_switch }: { land_rent_switch: number }) =>
                land_rent_switch == SWITCH_DATA[PARAM_TYPE.SWITCH.ONOFF].ON?.id
            }
          },
          {
            id: 'land_rent_provision_months',
            title: 'Land rent provision months',
            type: PARAM_TYPE.INTEGER,
            unit: PARAM_UNIT.MONTHS,
            minValue: 0,
            isShow: {
              params: {
                global: [],
                local: ['land_rent_switch']
              },
              fn: ({ land_rent_switch }: { land_rent_switch: number }) =>
                land_rent_switch == SWITCH_DATA[PARAM_TYPE.SWITCH.ONOFF].ON?.id
            }
          }
        ],
        children: [
          {
            id: 'annual_land_rent',
            title: 'Annual land rent',
            datum: [
              {
                id: 'annual_land_rent_per_acre_charge',
                title: 'Annual land rent per acre charge',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.GBP
              },
              {
                id: 'portion_payable_during_construction',
                title: 'Portion payable during construction',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE,
                defaultValue: 50
              },
              {
                id: 'portion_payable_during_operations',
                title: 'Portion payable during operations',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE,
                defaultValue: 100
              },
              {
                id: 'portion_payable_during_decommissioning',
                title: 'Portion payable during decommissioning',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE,
                defaultValue: 50
              }
            ]
          },
          {
            id: 'bespoke_cases_capacity_charge',
            title: 'Bespoke cases - capacity charge',
            datum: [
              {
                id: 'annual_land_rent_per_mw_charge',
                title: 'Annual land rent per MW charge',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.GBP_PRO_1000_PER_MW
              },
              {
                id: 'portion_payable_during_construction',
                title: 'Portion payable during construction',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE
              },
              {
                id: 'portion_payable_during_operations',
                title: 'Portion payable during operations',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE
              },
              {
                id: 'portion_payable_during_decommissioning',
                title: 'Portion payable during decommissioning',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE
              }
            ]
          },
          {
            id: 'bespoke_cases_land_rent_per_acre_and_option_charge',
            title: 'Bespoke cases - land rent per acre and option charge',
            datum: [
              {
                id: 'annual_land_option_rent_per_acre_charge',
                title: 'Annual land option rent per acre charge',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.GBP
              },
              {
                id: 'option_rent_start_date',
                title: 'Option rent start date',
                type: PARAM_TYPE.DATE
              },
              {
                id: 'option_rent_end_date',
                title: 'Option rent end date',
                type: PARAM_TYPE.DATE
              },
              {
                id: 'annual_land_post_option_rent_per_acre_charge',
                title: 'Annual land post-option rent per acre charge',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.GBP
              },
              {
                id: 'post_option_rent_start_date',
                title: 'Post-option rent start date',
                type: PARAM_TYPE.DATE
              },
              {
                id: 'post_option_rent_end_date',
                title: 'Post-option rent end date',
                type: PARAM_TYPE.DATE
              }
            ]
          }
        ]
      },
      {
        id: 'o_and_m',
        title: 'O&M',
        children: [
          {
            id: 'fixed',
            title: 'Fixed',
            datum: [
              {
                id: 'annual_fixed_o_and_m_2',
                title: 'Annual fixed O&M - 2 hour system',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.GBP
              },
              {
                id: 'annual_fixed_o_and_m_4',
                title: 'Annual fixed O&M - 4 hour system',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.GBP
              },
              {
                id: 'annual_fixed_o_and_m_8',
                title: 'Annual fixed O&M - 8 hour system',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.GBP
              },
              {
                id: 'inflation_profile',
                title: 'Inflation profile',
                type: PARAM_TYPE.CHOICE.INFLATION
              },
              {
                id: 'inflation_base_year',
                title: 'Inflation base year',
                type: PARAM_TYPE.INTEGER,
                unit: PARAM_UNIT.YEAR,
                minValue: INFLATION_START_YEAR,
                maxValue: INFLATION_START_YEAR + 50
              }
            ]
          },
          {
            id: 'variable',
            title: 'Variable',
            datum: [
              {
                id: 'variable_o_and_m_2',
                title: 'Variable O&M - 2 hour system',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.GBP_PRO_1000_PER_MW
              },
              {
                id: 'variable_o_and_m_4',
                title: 'Variable O&M - 4 hour system',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.GBP_PRO_1000_PER_MW
              },
              {
                id: 'variable_o_and_m_8',
                title: 'Variable O&M - 8 hour system',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.GBP_PRO_1000_PER_MW
              },
              {
                id: 'inflation_profile',
                title: 'Inflation profile',
                type: PARAM_TYPE.CHOICE.INFLATION
              },
              {
                id: 'inflation_base_year',
                title: 'Inflation base year',
                type: PARAM_TYPE.INTEGER,
                unit: PARAM_UNIT.YEAR,
                minValue: INFLATION_START_YEAR,
                maxValue: INFLATION_START_YEAR + 50
              }
            ]
          }
        ]
      },
      {
        id: 'asset_management',
        title: 'Asset management',
        datum: [
          {
            id: 'inflation',
            title: 'Inflation',
            type: PARAM_TYPE.GROUP,
            children: [
              {
                id: 'inflation_profile_1',
                title: 'Inflation profile - period 1',
                type: PARAM_TYPE.CHOICE.INFLATION
              },
              {
                id: 'inflation_base_year_1',
                title: 'Inflation base year - period 1',
                type: PARAM_TYPE.INTEGER,
                unit: PARAM_UNIT.YEAR,
                defaultValue: 2024,
                minValue: INFLATION_START_YEAR,
                maxValue: INFLATION_START_YEAR + 50
              },
              {
                id: 'inflation_profile_2',
                title: 'Inflation profile - period 2',
                type: PARAM_TYPE.CHOICE.INFLATION
              },
              {
                id: 'inflation_base_year_2',
                title: 'Inflation base year - period 2',
                type: PARAM_TYPE.INTEGER,
                unit: PARAM_UNIT.YEAR,
                minValue: INFLATION_START_YEAR,
                maxValue: INFLATION_START_YEAR + 50
              }
            ]
          },
          {
            id: 'duration',
            title: 'Duration',
            type: PARAM_TYPE.GROUP,
            children: [
              {
                id: 'start_date_period_1',
                title: 'Start date - period 1',
                type: PARAM_TYPE.DATE
              },
              {
                id: 'end_date_period_1',
                title: 'End date - period 1',
                type: PARAM_TYPE.DATE
              },
              {
                id: 'start_date_period_2',
                title: 'Start date - period 2',
                type: PARAM_TYPE.DATE
              },
              {
                id: 'end_date_period_2',
                title: 'End date - period 2',
                type: PARAM_TYPE.DATE
              }
            ]
          },
          {
            id: 'real_time_management_percentage_period_1',
            title: 'Real time management - period 1',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.PERCENTAGE
          },
          {
            id: 'maintenance_percentage_period_1',
            title: 'Maintenance - period 1',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.PERCENTAGE
          },
          {
            id: 'real_time_management_percentage_period_2',
            title: 'Real time management - period 2',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.PERCENTAGE
          },
          {
            id: 'maintenance_percentage_period_2',
            title: 'Maintenance - period 2',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.PERCENTAGE
          },
          {
            id: 'real_time_management_period_1',
            title: 'Real time management - period 1',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000_PER_MW,
            defaultValue: 1.0
          },
          {
            id: 'maintenance_period_1',
            title: 'Maintenance - period 1',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000_PER_MW,
            defaultValue: 2.0
          },
          {
            id: 'real_time_management_period_2',
            title: 'Real time management - period 2',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000_PER_MW
          },
          {
            id: 'maintenance_period_2',
            title: 'Maintenance - period 2',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000_PER_MW
          }
        ]
      },
      {
        id: 'insurance',
        title: 'Insurance',
        datum: [
          {
            id: 'inflation_profile',
            title: 'Inflation profile',
            type: PARAM_TYPE.CHOICE.INFLATION
          },
          {
            id: 'inflation_base_year_operations',
            title: 'Inflation base year - operations',
            type: PARAM_TYPE.INTEGER,
            unit: PARAM_UNIT.YEAR,
            defaultValue: 2024,
            minValue: INFLATION_START_YEAR,
            maxValue: INFLATION_START_YEAR + 50
          },
          {
            id: 'annual_fees_per_mw_operations',
            title: 'Annual fees per MW - operations',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000_PER_MW
          }
        ]
      },
      {
        id: 'community_benefit',
        title: 'Community benefit',
        datum: [
          {
            id: 'inflation_profile',
            title: 'Inflation profile',
            type: PARAM_TYPE.CHOICE.INFLATION
          },
          {
            id: 'inflation_base_year',
            title: 'Inflation base year',
            type: PARAM_TYPE.INTEGER,
            unit: PARAM_UNIT.YEAR,
            defaultValue: 2024,
            minValue: INFLATION_START_YEAR,
            maxValue: INFLATION_START_YEAR + 50
          },
          {
            id: 'annual_fixed_fund_to_community_benefit',
            title: 'Annual fixed fund to community benefit',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000,
            defaultValue: 1000
          },
          {
            id: 'annual_mwh_to_community_benefit',
            title: 'Annual MWh to community benefit',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.MWH,
            defaultValue: 0
          }
        ]
      },
      {
        id: 'water_rates',
        title: 'Water rates',
        datum: [
          {
            id: 'inflation_profile',
            title: 'Inflation profile',
            type: PARAM_TYPE.CHOICE.INFLATION
          },
          {
            id: 'inflation_base_year',
            title: 'Inflation base year',
            type: PARAM_TYPE.INTEGER,
            unit: PARAM_UNIT.YEAR,
            minValue: INFLATION_START_YEAR,
            maxValue: INFLATION_START_YEAR + 50
          },
          {
            id: 'annual_fees_per_mw',
            title: 'Annual fees per MW',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000_PER_MW
          }
        ]
      },
      {
        id: 'business_rates',
        title: 'Business rates',
        datum: [
          {
            id: 'inflation_profile',
            title: 'Inflation profile',
            type: PARAM_TYPE.CHOICE.INFLATION
          },
          {
            id: 'inflation_base_year',
            title: 'Inflation base year',
            type: PARAM_TYPE.INTEGER,
            unit: PARAM_UNIT.YEAR,
            minValue: INFLATION_START_YEAR,
            maxValue: INFLATION_START_YEAR + 50
          },
          {
            id: 'annual_fees_per_mw',
            title: 'Annual fees per MW',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000_PER_MW
          }
        ]
      },
      {
        id: 'extended_warranty',
        title: 'Extended warranty',
        datum: [
          {
            id: 'extended_warranty_switch',
            title: 'Extended warranty switch',
            type: PARAM_TYPE.SWITCH.ONOFF
          },
          {
            id: 'inflation_profile',
            title: 'Inflation profile',
            type: PARAM_TYPE.CHOICE.INFLATION,
            isShow: {
              params: {
                global: [],
                local: ['extended_warranty_switch']
              },
              fn: ({
                extended_warranty_switch
              }: {
                extended_warranty_switch: number;
              }) =>
                extended_warranty_switch ==
                SWITCH_DATA[PARAM_TYPE.SWITCH.ONOFF].ON?.id
            }
          },
          {
            id: 'inflation_base_year',
            title: 'Inflation base year',
            type: PARAM_TYPE.INTEGER,
            unit: PARAM_UNIT.YEAR,
            minValue: INFLATION_START_YEAR,
            maxValue: INFLATION_START_YEAR + 50,
            isShow: {
              params: {
                global: [],
                local: ['extended_warranty_switch']
              },
              fn: ({
                extended_warranty_switch
              }: {
                extended_warranty_switch: number;
              }) =>
                extended_warranty_switch ==
                SWITCH_DATA[PARAM_TYPE.SWITCH.ONOFF].ON?.id
            }
          },
          {
            id: 'length_of_warranty',
            title: 'Length of warranty',
            type: PARAM_TYPE.INTEGER,
            unit: PARAM_UNIT.YEARS,
            minValue: 1,
            isShow: {
              params: {
                global: [],
                local: ['extended_warranty_switch']
              },
              fn: ({
                extended_warranty_switch
              }: {
                extended_warranty_switch: number;
              }) =>
                extended_warranty_switch ==
                SWITCH_DATA[PARAM_TYPE.SWITCH.ONOFF].ON?.id
            }
          },
          {
            id: 'annual_fees_per_mw_2',
            title: 'Annual fees per MW - 2 hour system',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000_PER_MW,
            defaultValue: 4.077,
            isShow: {
              params: {
                global: [],
                local: ['extended_warranty_switch']
              },
              fn: ({
                extended_warranty_switch
              }: {
                extended_warranty_switch: number;
              }) =>
                extended_warranty_switch ==
                SWITCH_DATA[PARAM_TYPE.SWITCH.ONOFF].ON?.id
            }
          },
          {
            id: 'annual_fees_per_mw_4',
            title: 'Annual fees per MW - 4 hour system',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000_PER_MW,
            defaultValue: 8.153,
            isShow: {
              params: {
                global: [],
                local: ['extended_warranty_switch']
              },
              fn: ({
                extended_warranty_switch
              }: {
                extended_warranty_switch: number;
              }) =>
                extended_warranty_switch ==
                SWITCH_DATA[PARAM_TYPE.SWITCH.ONOFF].ON?.id
            }
          },
          {
            id: 'annual_fees_per_mw_8',
            title: 'Annual fees per MW - 8 hour system',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000_PER_MW,
            defaultValue: 16.307,
            isShow: {
              params: {
                global: [],
                local: ['extended_warranty_switch']
              },
              fn: ({
                extended_warranty_switch
              }: {
                extended_warranty_switch: number;
              }) =>
                extended_warranty_switch ==
                SWITCH_DATA[PARAM_TYPE.SWITCH.ONOFF].ON?.id
            }
          }
        ]
      },
      {
        id: 'site_security',
        title: 'Site secuirty',
        datum: [
          {
            id: 'inflation_profile',
            title: 'Inflation profile',
            type: PARAM_TYPE.CHOICE.INFLATION
          },
          {
            id: 'inflation_base_year',
            title: 'Inflation base year',
            type: PARAM_TYPE.INTEGER,
            unit: PARAM_UNIT.YEAR,
            defaultValue: 2024,
            minValue: INFLATION_START_YEAR,
            maxValue: INFLATION_START_YEAR + 50
          },
          {
            id: 'annual_fees_per_mw',
            title: 'Annual fees per MW',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000_PER_MW,
            defaultValue: 0.03
          }
        ]
      },
      {
        id: 'easement_costs',
        title: 'Easement costs',
        datum: [
          {
            id: 'inflation_profile',
            title: 'Inflation profile',
            type: PARAM_TYPE.CHOICE.INFLATION
          },
          {
            id: 'inflation_base_year',
            title: 'Inflation base year',
            type: PARAM_TYPE.INTEGER,
            unit: PARAM_UNIT.YEAR,
            defaultValue: 2024,
            minValue: INFLATION_START_YEAR,
            maxValue: INFLATION_START_YEAR + 50
          },
          {
            id: 'annual_cost',
            title: 'Annual cost',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000_PER_KM
          },
          {
            id: 'cable_length',
            title: 'Cable length',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.KM
          }
        ]
      },
      {
        id: 'legal_costs',
        title: 'Legal costs',
        datum: [
          {
            id: 'inflation_profile',
            title: 'Inflation profile',
            type: PARAM_TYPE.CHOICE.INFLATION
          },
          {
            id: 'inflation_base_year',
            title: 'Inflation base year',
            type: PARAM_TYPE.INTEGER,
            unit: PARAM_UNIT.YEAR,
            defaultValue: 2024,
            minValue: INFLATION_START_YEAR,
            maxValue: INFLATION_START_YEAR + 50
          },
          {
            id: 'annual_cost',
            title: 'Annual cost',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000,
            defaultValue: 30
          }
        ]
      },
      {
        id: 'other_administrative_costs',
        title: 'Other administrative costs',
        datum: [
          {
            id: 'inflation_profile',
            title: 'Inflation profile',
            type: PARAM_TYPE.CHOICE.INFLATION
          },
          {
            id: 'inflation_base_year',
            title: 'Inflation base year',
            type: PARAM_TYPE.INTEGER,
            unit: PARAM_UNIT.YEAR,
            defaultValue: 2024,
            minValue: INFLATION_START_YEAR,
            maxValue: INFLATION_START_YEAR + 50
          },
          {
            id: 'annual_accounting_fees_and_audit',
            title: 'Annual accounting fees and audit',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000,
            defaultValue: 7.5
          },
          {
            id: 'annual_it',
            title: 'Annual IT',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000,
            defaultValue: 7.5
          },
          {
            id: 'annual_other_cost',
            title: 'Annual other cost',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000,
            defaultValue: 7.5
          },
          {
            id: 'total_costs',
            title: 'Total Costs',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000,
            renderValue: {
              params: {
                local: [
                  'annual_accounting_fees_and_audit',
                  'annual_it',
                  'annual_other_cost'
                ],
                global: []
              },
              fn: ({
                annual_accounting_fees_and_audit = '0',
                annual_it = '0',
                annual_other_cost = '0'
              }: {
                annual_accounting_fees_and_audit: string;
                annual_it: string;
                annual_other_cost: string;
              }) => {
                let val = parseFloat(annual_accounting_fees_and_audit) || 0;
                val += parseFloat(annual_it);
                val += parseFloat(annual_other_cost);
                return val;
              }
            }
          }
        ]
      },
      {
        id: 'intercompany_expense',
        title: 'Intercompany expense',
        datum: [
          {
            id: 'inflation_profile',
            title: 'Inflation profile',
            type: PARAM_TYPE.CHOICE.INFLATION
          },
          {
            id: 'inflation_base_year',
            title: 'Inflation base year',
            type: PARAM_TYPE.INTEGER,
            unit: PARAM_UNIT.YEAR,
            minValue: INFLATION_START_YEAR,
            maxValue: INFLATION_START_YEAR + 50
          },
          {
            id: 'annual_cost',
            title: 'Annual cost',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000
          }
        ]
      }
    ]
  },
  {
    id: 'other_inputs',
    title: 'Other inputs',
    datum: [],
    children: [
      {
        id: 'working_capital',
        title: 'Working capital',
        datum: [
          {
            id: 'debtor_days',
            title: 'Debtor days',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.DAYS,
            defaultValue: 90
          },
          {
            id: 'creditor_days',
            title: 'Creditor days',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.DAYS,
            defaultValue: 90
          }
        ]
      },
      {
        id: 'national_grid_securities',
        title: 'National grid securities',
        datum: [
          {
            id: 'security_choice',
            title: 'Security choice',
            type: PARAM_TYPE.CHOICE.SECURITY
          },
          {
            id: 'attributable_security_choice',
            title: 'Attributable security choice',
            type: PARAM_TYPE.CHOICE.ATTRIBUTABLE_SECURITY
          },
          {
            id: 'attributable_security_choice_data',
            title: 'Attributable security choice data',
            type: PARAM_TYPE.TABLE,
            unit: null,
            stickyCols: {
              type: 'function',
              params: ['securityChoice'],
              fn: () =>
                CHOICE_DATA[PARAM_TYPE.CHOICE.ATTRIBUTABLE_SECURITY].map(
                  (c) => c?.label
                )
            },

            stickyRows: {
              type: 'function',
              params: [],
              fn: () => {
                const result = [];
                result.push(['']);
                for (let i = 8; i > 0; i--) {
                  result.push([`COD - ${i * 6}`]);
                }
                return result;
              }
            }
          },
          {
            id: 'total_attributable_costs',
            title: 'Total attributable costs',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000,
            defaultValue: 4800
          },
          {
            id: 'annual_wider_cancellation_costs',
            title: 'Annual wider cancellation costs',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000,
            defaultValue: 401
          },
          {
            id: 'premium_fee',
            title: 'Premium fee',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.PERCENTAGE,
            defaultValue: 1.5
          }
        ]
      },
      {
        id: 'financing',
        title: 'Financing',
        datum: [],
        children: [
          {
            id: 'cash_requirements',
            title: 'Cash requirements',
            datum: [
              {
                id: 'minimum_cash_balance',
                title: 'Minimum cash balance',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.GBP_PRO_1000,
                defaultValue: 10
              },
              {
                id: 'cash_requirement_look_forward_restriction',
                title: 'Cash requirement look-forward restriction',
                type: PARAM_TYPE.INTEGER,
                unit: PARAM_UNIT.MONTHS,
                minValue: 0,
                defaultValue: 12
              }
            ]
          },
          {
            id: 'gearing_by_capex_type',
            title: 'Gearing by capex type',
            datum: [
              {
                id: 'bess_augmentation',
                title: 'BESS augmentation',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE,
                defaultValue: 0
              },
              {
                id: 'bess_replacement_1',
                title: 'BESS replacement1',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE,
                defaultValue: 70
              },
              {
                id: 'bess_replacement_2',
                title: 'BESS replacement2',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE,
                defaultValue: 70
              },
              {
                id: 'gearing_excluding_batteries',
                title: 'Gearing excluding batteries',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE,
                defaultValue: 0
              }
            ]
          },
          {
            id: 'senior_debt',
            title: 'Senior debt',
            datum: [
              {
                id: 'senior_debt_interest',
                title: 'Senior debt interest',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE_PA,
                defaultValue: 8.25
              },
              {
                id: 'cash_sweep_percentage_of_available_cash',
                title:
                  'Cash sweep % of available cash (senior debt repayment profile)',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE,
                defaultValue: 100
              },
              {
                id: 'minimum_allowed_dscr_half_yearly',
                title: 'Minimum allowed DSCR (half-yearly)',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE,
                defaultValue: 0
              },
              {
                id: 'minimum_allowed_dscr_annual',
                title: 'Minimum allowed DSCR (annual)',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE,
                defaultValue: 0
              }
            ]
          },
          {
            id: 'equity',
            title: 'Equity',
            datum: [
              {
                id: 'equity_split_to_sharholder_loan',
                title: 'Equity split to shareholder loan',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE,
                defaultValue: 100
              },
              {
                id: 'equity_split_to_share_capital',
                title: 'Equity split to share capital',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE,
                renderValue: {
                  params: {
                    global: [],
                    local: ['equity_split_to_sharholder_loan']
                  },
                  fn: ({
                    equity_split_to_sharholder_loan
                  }: {
                    equity_split_to_sharholder_loan: number;
                  }) => 100 - equity_split_to_sharholder_loan
                }
              },
              {
                id: 'shareholder_loan_interest',
                title: 'Shareholder loan interest',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE_PA,
                defaultValue: 8
              },
              {
                id: 'shareholder_loan_cash_sweep_percentage_of_available_cash',
                title: 'Shareholder loan cash sweep % of available cash',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE,
                defaultValue: 100
              },
              {
                id: 'share_capital_cash_sweep_percentage_of_available_cash',
                title: 'Share capital cash sweep % of available cash',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE
              },
              {
                id: 'dividends_cash_sweep_percentage_of_available_cash',
                title: 'Dividends cash sweep % of available cash',
                type: PARAM_TYPE.NUMBER,
                unit: PARAM_UNIT.PERCENTAGE,
                defaultValue: 0
              }
            ]
          }
        ]
      },

      {
        id: 'vat',
        title: 'VAT',
        datum: [
          {
            id: 'vat_rate',
            title: 'VAT rate',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.PERCENTAGE,
            defaultValue: 20
          },
          {
            id: 'percentage_of_revenue_subject_to_vat',
            title: 'Percentage of revenue subject to VAT',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.PERCENTAGE,
            defaultValue: 100
          },
          {
            id: 'percentage_of_costs_and_capex_subject_to_vat',
            title: 'Percentage of costs and capex subject to VAT',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.PERCENTAGE,
            defaultValue: 100
          },
          {
            id: 'monthly_payments_on_account',
            title: 'Monthly payments on account',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000,
            defaultValue: 35
          }
        ]
      },
      {
        id: 'corporation_tax',
        title: 'Corporation tax',
        datum: [
          {
            id: 'small_profits_tax_rate',
            title: 'Small profits tax rate',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.PERCENTAGE,
            defaultValue: 19
          },
          {
            id: 'main_rate_of_tax',
            title: 'Main rate of tax',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.PERCENTAGE,
            defaultValue: 25
          },
          {
            id: 'profit_threshold_for_small_profits',
            title: 'Profit threshold for small profits',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000,
            defaultValue: 50
          },
          {
            id: 'aia',
            title: 'AIA',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000,
            defaultValue: 1000
          },
          {
            id: 'rate_for_capital_allowances_capital_pool',
            title: 'Rate for capital allowances special pool',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.PERCENTAGE,
            defaultValue: 6
          },
          {
            id: 'small_pool_allowances_threshold',
            title: 'Small pool allowance threshold',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000,
            defaultValue: 1
          }
        ]
      },
      {
        id: 'decommissioning_provision',
        title: 'Decommissioning provision',
        datum: [
          {
            id: 'decommissioning_total_cost',
            title: 'Decommissioning total cost',
            type: PARAM_TYPE.NUMBER,
            unit: PARAM_UNIT.GBP_PRO_1000,
            defaultValue: 150
          }
        ]
      },
      {
        id: 'inflation_rate_data',
        title: 'Inflation rate data',
        datum: [
          {
            id: 'inflation_start_year',
            title: 'Inflation start year',
            type: PARAM_TYPE.NUMBER,
            defaultValue: 2021
          },
          {
            id: 'inflation_index_table',
            title: 'Inflation index table',
            type: PARAM_TYPE.TABLE,
            stickyCols: {
              type: 'function',
              params: ['cyclesPerDay'],
              fn: () =>
                CHOICE_DATA[PARAM_TYPE.CHOICE.INFLATION].map((c) => c?.label)
            },
            stickyRows: {
              type: 'function',
              params: [],
              fn: () => {
                const result = [];
                result.push('');
                for (let i = 0; i < 50; i++) {
                  result.push([INFLATION_START_YEAR + i]);
                }
                return result;
              }
            }
          }
        ]
      }
    ]
  },
  {
    // {
    //   id: 'basic_project_inputs',
    //   title: 'Basic Project Inputs',
    //   datum: [
    //     {
    //       title: 'Technology',
    //       type: PARAM_TYPE.CHOICE.TECH,
    //       defaultValue: CHOICE_DATA[PARAM_TYPE.CHOICE.TECH][0].id
    //     },
    id: 'valuation_inputs',
    title: 'Valuation inputs',
    datum: [
      {
        id: 'valuation_date',
        title: 'Valuation date',
        type: PARAM_TYPE.DATE
      },
      {
        id: 'cost_of_equity',
        title: 'Cost of equity',
        type: PARAM_TYPE.NUMBER,
        unit: PARAM_UNIT.PERCENTAGE,
        defaultValue: 10
      }
      // {
      //   id: 'discount_rate_pre_tax_and_unlevered',
      //   title: 'Discount rate pre-tax and unlevered',
      //   type: PARAM_TYPE.NUMBER,
      //   unit: PARAM_UNIT.PERCENTAGE,
      //   defaultValue: 10
      // },
      // {
      //   id: 'discount_rate_post_tax_and_unlevered',
      //   title: 'Discount rate post-tax and unlevered',
      //   type: PARAM_TYPE.NUMBER,
      //   unit: PARAM_UNIT.PERCENTAGE,
      //   defaultValue: 7.5
      // },
      // {
      //   id: 'discount_rate_post_tax_and_levered',
      //   title: 'Discount rate post-tax and levered',
      //   type: PARAM_TYPE.NUMBER,
      //   unit: PARAM_UNIT.PERCENTAGE,
      //   defaultValue: 10
      // }
    ],
    children: []
  }
];
