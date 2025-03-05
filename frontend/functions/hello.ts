export async function hello() {
  return await fetch("http://host.docker.internal:8081/").then((res) => res.json())
}
