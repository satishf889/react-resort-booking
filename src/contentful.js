import { createClient } from "contentful";

console.log(`${JSON.stringify(process.env, null, 2)}`);
export default createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});
