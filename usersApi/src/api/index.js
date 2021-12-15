const API_URL = "https://randomuser.me/api/";

function request(endpoint, method = "GET", data = null) {
  const config = {
    method,
    headers: {
      "Content-type": "application/json"
    }
  };
  if (method === "POST" || method === "PATCH") {
    config.body = JSON.stringify(data);
  }
  const url = `${API_URL}${endpoint}`;

  return fetch(url, config).then((response) => response.json());
}

function get(endpoint) {
  return request(endpoint);
}

export default { get };
