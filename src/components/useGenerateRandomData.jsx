// generate random data for testing in cards
const useGenerateRandomData = () => {
    let uId = 0
    const colors = ['#5ec9db', '#f5b97a', '#f57a7a', '#d5d97a']
    return () => {
      uId++
      return {
        title: `title${uId}`,
        id: uId,
        color: colors[uId % 4],
        list: new Array(3).fill(0).map((_, idx) => ({
          title: `innerTitle${idx + 1}`,
          desc: `innerDesc${idx + 1}`,
          percent: Math.random().toFixed(2)
        }))
      }
    }
  }
  export default useGenerateRandomData;