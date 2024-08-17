function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      return data;
    });
}
function pagination(blogs) {
  pagination_list = [];
  for (let i = 0; i < 20; i++) {
    var entradas = blogs.slice(i * 5, (i + 1) * 5);
    let pagina;

    if (i == 0) {
      pagina = {
        previuos: null,
        current: i,
        next: i + 1,
        entradas,
      };
    } else if (i == 19) {
      pagina = { previuos: 18, current: i, next: null, entradas };
    } else {
      pagina = {
        previuos: i - 1,
        current: i,
        next: i + 1,
        entradas,
      };
    }
    pagination_list.push(pagina);
  }
  return pagination_list;
}
document.addEventListener("DOMContentLoaded", async function () {
  const blogs = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      return data;
    });
  const pagination_list = pagination(blogs);
  const { entradas } = pagination_list[0];
  const posts = document.getElementById("posts");
  const list_post = document.createElement("div");
  list_post.setAttribute("id", "lista-posts");
  for (value of entradas) {
    listItem = document.createElement("div");
    listItem.setAttribute("class", "card-post");
    var title = document.createElement("h1");
    title.textContent = `${value.title}`;
    listItem.appendChild(title);
    var parrafo = document.createElement("p");
    parrafo.innerHTML = `${value.body}`;
    listItem.appendChild(parrafo);
    list_post.appendChild(listItem);
  }
  posts.appendChild(list_post);
  //set init params on button
  //Anterior
  botonAnterior = document.getElementById("anterior");
  botonAnterior.setAttribute("goback", pagination_list[0].previuos);
  botonAnterior.setAttribute("current", pagination_list[0].current);
  botonAnterior.setAttribute("disabled", true);
  //Siguiente
  botonSiguiente = document.getElementById("siguiente");
  botonSiguiente.setAttribute("current", pagination_list[0].current);
  botonSiguiente.setAttribute("goto", pagination_list[0].next);

  const paginador = document.getElementById("paginador");
  paginador.innerHTML = "<p>&nbsp(1 de 20)</p>";

  //acciones para los botones
  botonSiguiente.addEventListener("click", () => {
    var current_value = botonSiguiente.getAttribute("current");
    //update current_value =
    current_value = parseInt(current_value) + 1;
    botonSiguiente.setAttribute("current", current_value);
    var { previuos, next } = pagination_list[current_value];
    botonSiguiente.setAttribute("goto", next);

    botonAnterior.setAttribute("current", current_value);
    botonAnterior.setAttribute("goback", previuos);
  });
  botonAnterior.addEventListener("click", () => {
    var current_value = botonAnterior.getAttribute("current");
    current_value = parseInt(current_value) - 1;
    botonAnterior.setAttribute("current", current_value);
    var { previuos, next } = pagination_list[current_value];
    botonAnterior.setAttribute("goback", previuos);
    botonSiguiente.setAttribute("current", current_value);
    botonSiguiente.setAttribute("goto", next);
  });
});
document.addEventListener("click", () => {
  if (botonSiguiente.getAttribute("goto") != "null") {
    botonSiguiente.removeAttribute("disabled");
  } else {
    botonSiguiente.setAttribute("disabled", true);
  }
  if (botonAnterior.getAttribute("goback") != "null") {
    botonAnterior.removeAttribute("disabled");
  } else {
    botonAnterior.setAttribute("disabled", true);
  }
  const current = botonSiguiente.getAttribute("current");

  const paginador = document.getElementById("paginador");
  if (parseInt(current) < 9) {
    paginador.innerHTML = `<p>&nbsp(${parseInt(current) + 1} de 20)</p>`;
  } else {
    paginador.innerHTML = `<p>(${parseInt(current) + 1} de 20)</p>`;
  }
  const { entradas } = pagination_list[current];
  const posts = document.getElementById("posts");
  const list_post = document.createElement("div");
  list_post.setAttribute("id", "lista-posts");
  if (posts.lastElementChild) {
    posts.removeChild(posts.lastElementChild);
  }

  for (value of entradas) {
    listItem = document.createElement("div");
    listItem.setAttribute("class", "card-post");
    var title = document.createElement("h1");
    title.textContent = `${value.title}`;
    listItem.appendChild(title);
    var parrafo = document.createElement("p");
    parrafo.innerHTML = `${value.body}`;
    listItem.appendChild(parrafo);
    list_post.appendChild(listItem);
  }
  posts.appendChild(list_post);
});
