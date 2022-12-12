const baseApi = axios.create({
  baseURL: "http://localhost:3333",
});

function getTop5() {
  const boxTopFive = document.getElementById("top-5");

  baseApi.get("/receitas/top-5").then(({ data }) => {
    data.map((item) => {
      boxTopFive.innerHTML += `
        <div class="card">
        <img class="card-img-top" src="../assets/cover.png" alt="Card image cover">
        <div class="card-body">
          <h5 class="card-title">${item.nome}</h5>
          <p class="card-text">
            <div>
              <i class="ph-timer"></i>
              <span>${item.tempo} min</span>
            </div>
            <div>
              <i class="ph-fork-knife"></i>
              <span>${item.porcoes} porções</span>
            </div>
          </p>
          <a href="#" class="card-link">Ver mais</a>
        </div>
      </div>
        `;
    });
  });
}

function getFavorites() {
  const boxFavorites = document.getElementById("favorites");

  baseApi.get("/favoritos/five").then(({ data }) => {
    data.map((item) => {
      boxFavorites.innerHTML += `
        <div class="card">
        <img class="card-img-top" src="../assets/cover.png" alt="Card image cover">
        <div class="card-body">
          <h5 class="card-title">${item.nome}</h5>
          <p class="card-text">
            <div>
              <i class="ph-timer"></i>
              <span>${item.tempo} min</span>
            </div>
            <div>
              <i class="ph-fork-knife"></i>
              <span>${item.porcoes} porções</span>
            </div>
          </p>
          <a href="#" class="card-link">Ver mais</a>
        </div>
      </div>
        `;
    });
  });
}
