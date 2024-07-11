import {
  BASE_URL,
  RAPIDAPI_KEY
} from '../../utils/configs'

Page({
  data: {
    baseCurrency: 'KES',
    exchangeRates: [],
    supported_codes: [],
    baseCurrencyIndex: 0,
    targetCurrencyIndex: 1,

    currentExchangeRate: '',
    convertedAmount: '',

    index: 0,
    amount: '1'
  },
  onLoad(query) {
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    this.mockSupportedCodes()
    this.mockConvertedRates()
    this.mockCurrencyExchangeRates()
    // Page loading is complete
    //this.getCurrencyExchangeRates();
    //this.convertCurrencyRates("USD","KES" )
    //this.getSupportedCodes()
  },
  onShow() {
    // Page display
  },
  onHide() {
    // Page hidden
  },
  onUnload() {
    // Page is closed
  },
  onTitleClick() {
    // Title clicked
  },
  onPullDownRefresh() {
    // Page is pulled down
  },
  onReachBottom() {
    // Page is pulled to the bottom
  },
  onShareAppMessage() {
    // Back to custom sharing information
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },

  mockConvertedRates(){
    const convert_result = {"base": "USD",
    "target": "BBD",
    "rate": 2}
    this.setData({
      currentExchangeRate: convert_result.rate
    })
  },

  mockSupportedCodes(){
    const supportedCodes = [
      {
          "code": "USD",
          "name": "US Dollar"
      },
      {
          "code": "ARS",
          "name": "Argentine Peso"
      },
      {
          "code": "BBD",
          "name": "Barbados Dollar"
      },
      {
          "code": "BSD",
          "name": "Bahamian Dollar"
      },
      {
          "code": "PYG",
          "name": "Paraguay Guarani"
      },
      {
          "code": "PAB",
          "name": "Panamanian Balboa"
      },
      {
          "code": "BRL",
          "name": "Brazilian Real"
      },
      {
          "code": "BMD",
          "name": "Bermudian Dollar"
      },
      {
          "code": "BOB",
          "name": "Bolivian Boliviano"
      },
      {
          "code": "BZD",
          "name": "Belize Dollar"
      },
      {
          "code": "XCD",
          "name": "East Caribbean Dollar"
      },
      {
          "code": "DOP",
          "name": "Dominican Peso"
      },
      {
          "code": "COP",
          "name": "Colombian Peso"
      },
      {
          "code": "CRC",
          "name": "Costa Rican Colon"
      },
      {
          "code": "CUP",
          "name": "Cuban Peso"
      },
      {
          "code": "HTG",
          "name": "Haitian Gourde"
      },
      {
          "code": "ANG",
          "name": "Netherlands Antillian Guilder"
      },
      {
          "code": "HNL",
          "name": "Honduran Lempira"
      },
      {
          "code": "CAD",
          "name": "Canadian Dollar"
      },
      {
          "code": "KYD",
          "name": "Cayman Islands Dollar"
      },
      {
          "code": "PEN",
          "name": "Peruvian Sol"
      },
      {
          "code": "MXN",
          "name": "Mexican Peso"
      },
      {
          "code": "NIO",
          "name": "Nicaraguan Cordoba Oro"
      },
      {
          "code": "TTD",
          "name": "Trinidad and Tobago Dollar"
      },
      {
          "code": "GTQ",
          "name": "Guatemalan Quetzal"
      },
      {
          "code": "VES",
          "name": "Venezuelan Bolivar"
      },
      {
          "code": "UYU",
          "name": "Uruguay Peso"
      },
      {
          "code": "JMD",
          "name": "Jamaican Dollar"
      },
      {
          "code": "CLP",
          "name": "Chilean Peso"
      },
      {
          "code": "AUD",
          "name": "Australian Dollar"
      },
      {
          "code": "MOP",
          "name": "Macau Pataca"
      },
      {
          "code": "PKR",
          "name": "Pakistan Rupee"
      },
      {
          "code": "PHP",
          "name": "Philippine Peso"
      },
      {
          "code": "FJD",
          "name": "Fiji Dollar"
      },
      {
          "code": "HKD",
          "name": "Hong Kong Dollar"
      },
      {
          "code": "KRW",
          "name": "Korean Won"
      },
      {
          "code": "KHR",
          "name": "Cambodian Riel"
      },
      {
          "code": "LAK",
          "name": "Lao Kip"
      },
      {
          "code": "MYR",
          "name": "Malaysian Ringgit"
      },
      {
          "code": "BDT",
          "name": "Bangladeshi Taka"
      },
      {
          "code": "MMK",
          "name": "Myanmar Kyat"
      },
      {
          "code": "NPR",
          "name": "Nepalese Rupee"
      },
      {
          "code": "CNY",
          "name": "Chinese Yuan Renminbi"
      },
      {
          "code": "JPY",
          "name": "Japanese Yen"
      },
      {
          "code": "SCR",
          "name": "Seychelles Rupee"
      },
      {
          "code": "LKR",
          "name": "Sri Lanka Rupee"
      },
      {
          "code": "XPF",
          "name": "CFP Franc"
      },
      {
          "code": "THB",
          "name": "Thai Baht"
      },
      {
          "code": "BND",
          "name": "Brunei Dollar"
      },
      {
          "code": "SGD",
          "name": "Singapore Dollar"
      },
      {
          "code": "TWD",
          "name": "Taiwan Dollar"
      },
      {
          "code": "NZD",
          "name": "New Zealand Dollar"
      },
      {
          "code": "INR",
          "name": "Indian Rupee"
      },
      {
          "code": "IDR",
          "name": "Indonesian Rupiah"
      },
      {
          "code": "VND",
          "name": "Vietnamese Dong"
      },
      {
          "code": "ALL",
          "name": "Albanian Lek"
      },
      {
          "code": "BYN",
          "name": "Belarusian Ruble"
      },
      {
          "code": "BGN",
          "name": "Bulgarian Lev"
      },
      {
          "code": "ISK",
          "name": "Iceland Krona"
      },
      {
          "code": "PLN",
          "name": "Polish Zloty"
      },
      {
          "code": "DKK",
          "name": "Danish Krone"
      },
      {
          "code": "RUB",
          "name": "Russian Ruble"
      },
      {
          "code": "CZK",
          "name": "Czech Koruna"
      },
      {
          "code": "HRK",
          "name": "Croatian Kuna"
      },
      {
          "code": "RON",
          "name": "Romanian Leu"
      },
      {
          "code": "MKD",
          "name": "Macedonia Denar"
      },
      {
          "code": "MDL",
          "name": "Moldovan Leu"
      },
      {
          "code": "NOK",
          "name": "Norwegian Krone"
      },
      {
          "code": "EUR",
          "name": "Euro"
      },
      {
          "code": "SEK",
          "name": "Swedish Krona"
      },
      {
          "code": "CHF",
          "name": "Swiss Franc"
      },
      {
          "code": "RSD",
          "name": "Serbian Dinar"
      },
      {
          "code": "UAH",
          "name": "Ukraine Hryvnia"
      },
      {
          "code": "HUF",
          "name": "Hungarian Forint"
      },
      {
          "code": "GBP",
          "name": "British Pound"
      },
      {
          "code": "AED",
          "name": "United Arab Emirates Dirham"
      },
      {
          "code": "OMR",
          "name": "Omani Rial"
      },
      {
          "code": "AZN",
          "name": "Azerbaijani Manat"
      },
      {
          "code": "BHD",
          "name": "Bahraini Dinar"
      },
      {
          "code": "GEL",
          "name": "Georgian Lari"
      },
      {
          "code": "KZT",
          "name": "Kazakhstan Tenge"
      },
      {
          "code": "KGS",
          "name": "Kyrgyzstani Som"
      },
      {
          "code": "QAR",
          "name": "Qatari Rial"
      },
      {
          "code": "KWD",
          "name": "Kuwaiti Dinar"
      },
      {
          "code": "LBP",
          "name": "Lebanese Pound"
      },
      {
          "code": "SAR",
          "name": "Saudi Riyal"
      },
      {
          "code": "TRY",
          "name": "Turkish Lira"
      },
      {
          "code": "TMT",
          "name": "Turkmenistan Manat"
      },
      {
          "code": "UZS",
          "name": "Uzbekistan Som"
      },
      {
          "code": "AMD",
          "name": "Armenian Dram"
      },
      {
          "code": "YER",
          "name": "Yemeni Rial"
      },
      {
          "code": "IQD",
          "name": "Iraqi Dinar"
      },
      {
          "code": "IRR",
          "name": "Iranian Rial"
      },
      {
          "code": "ILS",
          "name": "Israeli New Shekel"
      },
      {
          "code": "JOD",
          "name": "Jordanian Dinar"
      },
      {
          "code": "DZD",
          "name": "Algerian Dinar"
      },
      {
          "code": "EGP",
          "name": "Egyptian Pound"
      },
      {
          "code": "ETB",
          "name": "Ethiopian Birr"
      },
      {
          "code": "AOA",
          "name": "Angolan Kwanza"
      },
      {
          "code": "BWP",
          "name": "Botswana Pula"
      },
      {
          "code": "BIF",
          "name": "Burundi Franc"
      },
      {
          "code": "XOF",
          "name": "CFA BCEAO Franc"
      },
      {
          "code": "CVE",
          "name": "Cape Verde Escudo"
      },
      {
          "code": "GMD",
          "name": "Gambian Dalasi"
      },
      {
          "code": "DJF",
          "name": "Djibouti Franc"
      },
      {
          "code": "GNF",
          "name": "Guinea Franc"
      },
      {
          "code": "GHS",
          "name": "Ghanaian Cedi"
      },
      {
          "code": "KES",
          "name": "Kenyan Shilling"
      },
      {
          "code": "LSL",
          "name": "Lesotho Loti"
      },
      {
          "code": "LYD",
          "name": "Libyan Dinar"
      },
      {
          "code": "RWF",
          "name": "Rwanda Franc"
      },
      {
          "code": "MWK",
          "name": "Malawi Kwacha"
      },
      {
          "code": "MUR",
          "name": "Mauritius Rupee"
      },
      {
          "code": "MAD",
          "name": "Moroccan Dirham"
      },
      {
          "code": "NAD",
          "name": "Namibian Dollar"
      },
      {
          "code": "ZAR",
          "name": "South African Rand"
      },
      {
          "code": "NGN",
          "name": "Nigerian Naira"
      },
      {
          "code": "SZL",
          "name": "Swaziland Lilangeni"
      },
      {
          "code": "SDG",
          "name": "Sudanese Pound"
      },
      {
          "code": "SOS",
          "name": "Somali Shilling"
      },
      {
          "code": "TZS",
          "name": "Tanzanian Shilling"
      },
      {
          "code": "TND",
          "name": "Tunisian Dinar"
      },
      {
          "code": "UGX",
          "name": "Uganda Shilling"
      },
      {
          "code": "ZMW",
          "name": "Zambian Kwacha"
      },
      {
          "code": "XAF",
          "name": "CFA BEAC Franc"
      },
      {
          "code": "BAM",
          "name": "Bosnia and Herzegovina Marka"
      },
      {
          "code": "SYP",
          "name": "Syrian Pound"
      }
  ]

  supportedCodes.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

  this.setData({
    supported_codes: supportedCodes,
    baseCurrency: supportedCodes[this.data.baseCurrencyIndex].code,
    targetCurrency: supportedCodes[this.data.targetCurrencyIndex].code
  })

  this.convertCurrencyRates(this.data.baseCurrency, this.data.targetCurrency)

  },


  mockCurrencyExchangeRates(){
    const rates = {
      "KES": 1,
      "AED": 0.02847,
      "ALL": 0.7178,
      "AMD": 3.0082,
      "ANG": 0.01397,
      "AOA": 6.7791,
      "ARS": 7.126,
      "AUD": 0.01147,
      "AZN": 0.01318,
      "BAM": 0.01397,
      "BBD": 0.0155,
      "BDT": 0.9112,
      "BGN": 0.01396,
      "BHD": 0.002922,
      "BIF": 22.376,
      "BMD": 0.007752,
      "BND": 0.01044,
      "BOB": 0.05371,
      "BRL": 0.04219,
      "BSD": 0.007752,
      "BWP": 0.1047,
      "BYN": 0.02526,
      "BZD": 0.0155,
      "CAD": 0.01057,
      "CHF": 0.006947,
      "CLP": 7.0909,
      "CNY": 0.05626,
      "COP": 30.7305,
      "CRC": 4.0668,
      "CUP": 0.186,
      "CVE": 0.7878,
      "CZK": 0.181,
      "DJF": 1.376,
      "DKK": 0.05322,
      "DOP": 0.4574,
      "DZD": 1.0419,
      "EGP": 0.372,
      "ETB": 0.4471,
      "EUR": 0.007133,
      "FJD": 0.01745,
      "GBP": 0.006004,
      "GEL": 0.02128,
      "GHS": 0.1194,
      "GMD": 0.5254,
      "GNF": 66.7342,
      "GTQ": 0.06014,
      "HKD": 0.06052,
      "HNL": 0.1926,
      "HRK": 0.05375,
      "HTG": 1.0246,
      "HUF": 2.8102,
      "IDR": 124.8372,
      "ILS": 0.02822,
      "INR": 0.6474,
      "IQD": 10.1553,
      "IRR": 326.3566,
      "ISK": 1.065,
      "JMD": 1.2162,
      "JOD": 0.005494,
      "JPY": 1.231,
      "KGS": 0.6613,
      "KHR": 31.8365,
      "KRW": 10.6377,
      "KWD": 0.00237,
      "KYD": 0.00646,
      "KZT": 3.6983,
      "LAK": 171.6822,
      "LBP": 694.186,
      "LKR": 2.3484,
      "LSL": 0.1402,
      "LYD": 0.03764,
      "MAD": 0.07637,
      "MDL": 0.1377,
      "MKD": 0.4389,
      "MMK": 17.0802,
      "MOP": 0.06234,
      "MUR": 0.3625,
      "MWK": 13.5255,
      "MXN": 0.1378,
      "MYR": 0.03644,
      "NAD": 0.1402,
      "NGN": 11.8541,
      "NIO": 0.2853,
      "NOK": 0.08311,
      "NPR": 1.0362,
      "NZD": 0.01272,
      "OMR": 0.002984,
      "PAB": 0.007752,
      "PEN": 0.02934,
      "PHP": 0.4513,
      "PKR": 2.159,
      "PLN": 0.03039,
      "PYG": 58.4164,
      "QAR": 0.02822,
      "RON": 0.03548,
      "RSD": 0.8348,
      "RUB": 0.6744,
      "RWF": 10.2054,
      "SAR": 0.02907,
      "SCR": 0.1069,
      "SDG": 4.6589,
      "SEK": 0.08143,
      "SGD": 0.01041,
      "SOS": 4.4301,
      "SYP": 99.9225,
      "SZL": 0.1402,
      "THB": 0.2797,
      "TMT": 0.02721,
      "TND": 0.02428,
      "TRY": 0.2545,
      "TTD": 0.05246,
      "TWD": 0.2516,
      "TZS": 20.5814,
      "UAH": 0.3171,
      "UGX": 28.6763,
      "USD": 0.007752,
      "UYU": 0.3106,
      "UZS": 98.0388,
      "VES": 0.283,
      "VND": 197.124,
      "XAF": 4.6792,
      "XCD": 0.02093,
      "XOF": 4.6792,
      "XPF": 0.8512,
      "YER": 1.9409,
      "ZAR": 0.1395,
      "ZMW": 0.1967
  }

  const objectToMap = obj => new Map(Object.entries(obj));

        const arr = Array.from(objectToMap(rates), ([currency, rate]) => ({
          currency,
          rate
        }));
        
        const newArray = arr.map(item => {
          const currencyInfo = this.data.supported_codes.find(code => code.code === item.currency);
          return {
            currency: item.currency,
            name: currencyInfo ? currencyInfo.name : "Unknown", 
            rate: item.rate
          };
        });


        this.setData({
          exchangeRates: newArray
        });
  },

  getCurrencyExchangeRates() {
    console.log("URL" + BASE_URL);

    my.request({
      url: BASE_URL + 'latest?base=' + this.data.baseCurrency,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-key': RAPIDAPI_KEY,


      },
      success: (res) => {
        console.log('Get rates response: ' + JSON.stringify(res.data));

        const responseObject = JSON.parse(JSON.stringify(res.data));

        const rates = responseObject.rates;
        const objectToMap = obj => new Map(Object.entries(obj));

        const arr = Array.from(objectToMap(rates), ([currency, rate]) => ({
          currency,
          rate
        }));
        
        const newArray = arr.map(item => {
          const currencyInfo = this.data.supported_codes.find(code => code.code === item.currency);
          return {
            currency: item.currency,
            name: currencyInfo ? currencyInfo.name : "Unknown", 
            rate: item.rate
          };
        });

        this.setData({
          exchangeRates: newArray
        });

      },
      fail: function (res) {
        my.alert({
          title: 'Unexpected error Occurred',
          content: res.data
        });
      }

    });

  },

  // handle the currency converter base and target
  async convertCurrencyRates(baseCurrency, targetCurrency){
    my.request({
      url: `${BASE_URL}convert?base=${baseCurrency}&target=${targetCurrency}`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-key': RAPIDAPI_KEY
    },
    success: async (res) => {
      const resData = res.data
      if(resData.code == 0){
        const covertResult = resData.convert_result
        this.setData({
          currentExchangeRate: covertResult.rate
        })
        this.calculateConvertedAmount()
      }else{
        my.alert({
          title: 'Error',
          content: 'Request to convert was not successful'
        })
      }
      
    },
    fail:  async (res) => {
      my.alert({
        title: 'Error',
        content: res.data.message
      })
    }
    });
  },
  
// Get Supported Codes
  async getSupportedCodes(){
    my.request({
      url: `${BASE_URL}codes`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-key': RAPIDAPI_KEY
    },
    success: async (res) => {
      const resData = res.data
      if(resData.code == 0){
        const supportedCodes = resData.supported_codes
        this.setData({
          supported_codes: supportedCodes
        })
      }else{
        my.alert({
          title: 'Error',
          content: 'Request to convert was not successful'
        })
      }
      
    },
    fail:  async (res) => {
      my.alert({
        title: 'Error',
        content: res.data.message
      })
    }
    });
  },

  bindPickerBaseChange(e) {
    this.setData({
      baseCurrencyIndex: e.detail.value,
      baseCurrency: this.data.supported_codes[e.detail.value].code
    });
    this.convertCurrencyRates(this.data.baseCurrency, this.data.targetCurrency)
    this.getCurrencyExchangeRates()
  },

  bindPickerTargetChange(e) {
    console.log('picker sends selection change, carried value ', e.detail.value);
    this.setData({
      targetCurrencyIndex: e.detail.value,
      targetCurrency: this.data.supported_codes[e.detail.value].code
    });
    this.convertCurrencyRates(this.data.baseCurrency, this.data.targetCurrency)
  },

  handleAmountChange(e){
    this.setData({
      amount: e.detail.value
    })
    this.calculateConvertedAmount()
  },

  calculateConvertedAmount(){
    const convertedAmount = this.data.amount * this.data.currentExchangeRate
    this.setData({
      convertedAmount: convertedAmount
    })
  }

});