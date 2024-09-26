import { useEffect } from "react";

export const HomePage = () => {
  const fetchData = async () => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "asd", age: 25 }),
    };
    try {
      const response = await fetch("http://localhost:3001/posts", fetchOptions);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error en la solictid", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the home page.</p>
    </div>
  );
};
