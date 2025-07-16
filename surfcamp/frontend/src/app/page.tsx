// fetching data from strapi
async function loader() {
  const path = "/api/home-page";
  const BASE_URL = "http://localhost:1337";
  const url = new URL(path, BASE_URL);

  const response = await fetch(url.href);
  const data = await response.json();
  console.log("Data: ", data);

  return { data };
}

export default async function HomeRoute() {
  const data = await loader();

  return <div>Hello</div>;
}
