export default function handler(req, res) {
    const getData = async () => {
      const response = await fetch(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=41c8de9f-d710-4dd8-801a-477b204e571a`,
        {
          method: 'GET',
          headers: {
            Accept: '*/*',
          },
        },
      )
  
      const data = await response.json()
  
      res.status(200).json({ data })
    }
  
    getData()
  }

// 41c8de9f-d710-4dd8-801a-477b204e571a