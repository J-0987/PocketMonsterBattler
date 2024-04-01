document.addEventListener("DOMContentLoaded", function () {
  let apiKey = "UVHidgwWtNYfWtfAVtfjc2g4EHwmDOjuPkPmYhaL1VqdgneZ0D";
  let pokemonImages = [];

  // Call getTumblr
  getTumblr();

  function getTumblr() {
    let limit = 20; // Change the limit to the desired number of posts
    let apiUrl = `https://api.tumblr.com/v2/blog/pokemon.tumblr.com/posts/photo?api_key=${apiKey}&limit=${limit}`;

    // fetch data from apiUrl
    fetch(apiUrl)
      .then((response) => response.text())
      .then((data) => {
        let jsonData = JSON.parse(data);
        let posts = jsonData.response.posts;
        
        for (let i = 0; i < posts.length; i++) {
          let post = posts[i];
          // Extract blog name, image URL, and entire post content
          let blogName = post.summary;
          let imageUrl = post.photos && post.photos[0].original_size.url; // Check if post.photos is defined
          let caption = post.caption; // Change this line to get the entire post content
          pokemonImages.push({ blogName, imageUrl, caption });
        }

        displayPokemonImages();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function displayPokemonImages() {
    let searchResultsElement = document.getElementById("searchResults");
    if (searchResultsElement) {
      searchResultsElement.textContent = ""; // Clear previous content

      // Loop over all pokemon images in response
      for (let i = 0; i < pokemonImages.length; i++) {
        let pokemon = pokemonImages[i];
        let postElement = document.createElement("li");
        postElement.classList.add(
          "bg-white",
          "rounded",
          "shadow",
          "p-4",
          "overflow-y-scroll",
          "overflow-x-hidden",
          "max-h-64"
        );

        // Image
        if (pokemon.imageUrl) {
          // Check if imageUrl is defined
          let imgElement = document.createElement("img");
          imgElement.className = "h-40 w-full object-cover";
          imgElement.src = pokemon.imageUrl;
          postElement.appendChild(imgElement);
        }

        // Blog name
        let titleElement = document.createElement("h3");
        titleElement.textContent = pokemon.blogName;
        titleElement.classList.add("font-semibold", "text-lg", "mb-2");
        postElement.appendChild(titleElement);

        // Entire post content
        let contentElement = document.createElement("p");
        contentElement.innerHTML = pokemon.caption; // Use innerHTML to render HTML content
        contentElement.classList.add("text-sm");
        postElement.appendChild(contentElement);

        searchResultsElement.appendChild(postElement);
      }
    } 
    else {
      console.error("searchResults element not found");
    }
  }
});

// Add glide functionality in the carousel
function initCarousel() {
  var glide01 = new Glide(".glide-01", {
    type: "carousel",
    focusAt: "center",
    perView: 4,
    autoplay: 2600,
    animationDuration: 3000,
    gap: 18,
    classes: {
      activeNav: "[&>*]:bg-slate-700",
    },
    breakpoints: {
      1024: {
        perView: 2,
      },
      640: {
        perView: 1,
      },
    },
  });

  glide01.mount();
}
