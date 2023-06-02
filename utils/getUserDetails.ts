import connectionPool from './db'
async function getUserDetails(){
  const client = connectionPool();
  const result = (await client).query('SELECT * from users');
  const data = (await result).rows;
  console.log(data);
  return data;
}
export default getUserDetails;