// generate random data for testing in cards
const useGenerateRandomData = () => {
  let uId = 0;
  const colors = ['#5ec9db', '#f5b97a', '#f57a7a', '#d5d97a'];

  return () => {
    uId++;
    const colorIndex = (uId - 1) % colors.length;
    const rawData = new Array(10).fill(null).map(() => Math.round(Math.random() * 200));
    const mean = rawData.reduce((acc, val) => acc + val, 0) / rawData.length;
    const max = Math.max(...rawData);
    const min = Math.min(...rawData);

    return {
      title: `Data Set ${uId}`,
      id: uId,
      color: colors[colorIndex],
      list: [
        { title: 'Mean', desc: mean.toFixed(2)},
        { title: 'Max', desc: `${max}`},
        { title: 'Min', desc: `${min}`},
      ],
    };
  };
};

export default useGenerateRandomData;