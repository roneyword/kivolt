export const postLead = async (data: any, apiKey: string = "", auth: string = "", baseURL: string = "") => {
  // const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  // const auth = process.env.NEXT_PUBLIC_API_AUTH;
  // const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!apiKey) {
    throw new Error('API Key não encontrada.');
  }

  if (!baseURL) {
    throw new Error('URL base da API não encontrada.');
  }

  const headers = new Headers({
    'Content-Type': 'application/json',
    'apikey': apiKey,
    'Authorization': `Basic ${auth}`,
  });

  const response = await fetch(`${baseURL}/api/v1/leads`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Erro ao chamar a API: ${response.statusText}`);
  }

  return response.json();
};
