import { MainLayout } from "../layout/MainLayout";
import { useFetch } from "../hooks/useFetch";

export const AuthPage = () => {
  const { data, loading, error } = useFetch<{ message: string }>(
    "http://localhost:3001/secure-key/get_endpoint"
  );
  if (loading) return <MainLayout children={<p>Cargando datos...</p>} />;
  if (error)
    return (
      <MainLayout children={<p>Error en la consulta de datos {error}</p>} />
    );
  return (
    <MainLayout>
      <div>
        <h1>auth page</h1>
        <p>{data && data.message}</p>
      </div>
    </MainLayout>
  );
};
