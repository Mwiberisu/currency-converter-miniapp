import {
  BASE_URL,
  RAPIDAPI_KEY
} from '../../utils/configs'

Page({
  data: {
    baseCurrency: 'KES',
    exchangeRates: [],
  },
  onLoad(query) {
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // Page loading is complete
    this.getCurrencyExchangeRates();
    this.convertCurrencyRates("USD","KES" )
    this.getSupportedCodes()
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

  getCurrencyExchangeRates() {
    console.log("URL" + BASE_URL);

    const requestRates = my.request({
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

        let arr = [];

        arr = Array.from(objectToMap(rates), ([name, value]) => ({
          name,
          value
        }));
        console.log('Get rates response: ' + arr);


        this.setData({
          exchangeRates: arr
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
          convertCurrencyRates: covertResult
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

});