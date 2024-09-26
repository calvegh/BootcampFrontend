import { useState } from "react";
import { MainLayout } from "../layout/MainLayout";
import { PostList } from "../layout/components/PostList";

export interface IPost {
  id?: number;
  userId: number;
  title: string;
  content: string;
  imagen?: string;
}
export const PostPage = () => {
  const [post, setPost] = useState<IPost>({
    userId: 1,
    title: "",
    content: "",
  });
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
    console.log(post);
  };
  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files![0];
    const base64 = await convertirBase64(file);
    setPost({ ...post, imagen: base64 });
  };
  const convertirBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!post.userId || !post.title || !post.content) {
      console.log("Faltan campos por llenar");
      return;
    }
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    };
    try {
      const response = await fetch("http://localhost:3001/posts", fetchOptions);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error en la solictid", error);
    }
  };
  return (
    <MainLayout>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userId">Usuario</label>
            <select name="userId" id="userId" onChange={handleChange}>
              <option value="">Seleccione...</option>
              <option value="1">Pedrito</option>
              <option value="2">Sara</option>
              <option value="3">Jonathan</option>
            </select>
          </div>
          <div>
            <label htmlFor="title">Titulo</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="content">Contenido</label>
            <textarea name="content" id="content" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="imagen">Imagen</label>
            <input
              accept=".jpg,.png,.jpeg"
              type="file"
              name="imagen"
              id="imagen"
              onChange={handleFileUpload}
            />
          </div>
          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
      <PostList />
    </MainLayout>
  );
};
