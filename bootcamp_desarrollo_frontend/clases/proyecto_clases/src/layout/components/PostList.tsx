import { Post } from "./Post";
import { configuracion } from "../../config/appConfiguration";
import { useFetch } from "../../hooks/useFetch";

export const PostList = () => {
  const {
    data: posts,
    loading,
    error,
  } = useFetch<string>(configuracion.urlJsonServerPost);
  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error en la consulta de datos {error}</p>;

  /* const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    fetch(configuracion.urlJsonServerPost)
      .then((response) => response.json())
      .then((data: IPost[]) => {
        setPosts(data);
      });
  }, []);
 */
  return (
    <>
      <h1>Post List</h1>
      <ul>
        {posts &&
          posts.map((post) => (
            <Post
              key={post.id}
              id={post.id!}
              userId={post.userId}
              title={post.title}
              body={post.content}
              imagen={post.imagen}
            />
          ))}
      </ul>
    </>
  );
};
