export default async function handler(_req, res) {
  const BIN_ID = "68347a228561e97a501bb749";
  const API_KEY = process.env.JSONBIN_KEY;

  const API_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;
  const READ_URL = `${API_URL}/latest`;

  try {
    // Buscar dados atuais
    const read = await fetch(READ_URL, {
      headers: {
        "X-Master-Key": API_KEY,
      },
    });

    const readJson = await read.json();
    const visits = (readJson.record.visits ?? 0) + 1;

    // Atualizar valor no JSONBin
    await fetch(API_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY,
      },
      body: JSON.stringify({ visits }),
    });

    res.status(200).json({ visits });
  } catch (err) {
    res.status(500).json({ error: "Erro ao atualizar contador" });
  }
}
