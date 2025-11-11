const URL = 'https://pokeapi.co/api/v2/pokemon/';
const numberToFetch = 10;

let pokeArr = [];

/* FETCHING DATA =======================*/

// Initial fetching of all data and saving it in pokeArr => then calling createPage()
(async function () {
  try {
    const promiseArr = [];

    // Create all fetch requests first
    for (let i = 1; i <= numberToFetch; i++) {
      promiseArr.push(
        fetch(`${URL}${i}`).then((res) => {
          if (!res.ok) throw new Error('res.ok = false');
          return res.json();
        })
      );
    }

    // Wait for all to finish...
    pokeArr = await Promise.all(promiseArr);

    // ...and render page if pokeArr is filled
    createPage();
  } catch (error) {
    console.error(error);
  }
})();

/* SCHEDULE ===============================*/
function createPage() {
  console.log('POKEMON DATA loaded:', pokeArr);
}
