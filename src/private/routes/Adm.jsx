import { useEffect, useState } from "react";
import style from "./Adm.module.css"; // Importando o CSS module

const Adm = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    fetch("http://localhost:3001/cliente", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar os clientes");
        }
        return response.json();
      })
      .then((data) => {
        setClients(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className={style.loading}>Carregando...</p>;
  if (error) return <p className={style.error}>Erro: {error}</p>;

  return (
    <div className={style.container}>
      <div className={style.card}>
        <h2 className={style.cardHeader}>Lista de Clientes</h2>
        <div className={style.tableWrapper}>
          <table className={style.table}>
            <thead>
              <tr>
                <th>Razão Social</th>
                <th>CPF/CNPJ</th>
                <th>Nome</th>
                <th>Cidade</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Mensagem</th>
                <th>Criado em</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr key={index}>
                  <td>{client.razaoSocial}</td>
                  <td>{client.cpfCnpj}</td>
                  <td>{client.nome}</td>
                  <td>{client.cidade}</td>
                  <td>{client.email}</td>
                  <td>{client.telefone}</td>
                  <td>{client.mensagem}</td>
                  <td className={style.createdAt}>
                    {new Date(client.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Adm;
