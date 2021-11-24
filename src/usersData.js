module.exports = () => {
  const data = {
    users: [],
  };
  for (let i = 1; i < 101; i++) {
    data.users.push({
      id: i,
      name: `name${i}`,
      username: `username${i}`,
      email: `email${i}@dummy.co.kr`,
    });
  }
  return data;
};
