const categories = Array.from(jCategory);

document.getElementById("searchBar").addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filterData = categories.filter((items) =>
    items.title.toLowerCase().includes(searchData)
  );
  displayItems(filterData);
});

const displayItems = (items) => {
  const rootElelment = document.getElementById("root");
  rootElelment.innerHTML = "";

  items.forEach((items) => {
    const { index, image, title, rate, av } = items;
    console.log(index, image, title, rate, av);
    const jList = document.createElement("div");
    jList.className = "jList";
    jList.innerHTML = `
           <img src="${image}">
                <h3>${title}</h3>
                <p>${rate}</p>
                <span id="key">${av}</span>
        `;
    rootElelment.appendChild(jList);

    jList.addEventListener("click", () => {
        window.location.href =`job-details.html?id=${index}`;
    })
  });
};

displayItems(categories);
