function main() {
    
    const baseUrl = 'https://restaurant-api.dicoding.dev';
    const imageUrl = 'https://restaurant-api.dicoding.dev/images/medium/';

    const getRestaurant = async () => {
        try {
            const response = await fetch(`${baseUrl}/list`);
            const responseJson = await response.json();

            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllRestaurant(responseJson.restaurants);
            }
        } catch (error) {
            showResponseMessage(error);
        }
    };

    const renderAllRestaurant = (restaurants) => {
        const listContentElement = document.querySelector('#listContent');
        listContentElement.innerHTML = '';

        restaurants.forEach(restaurant => {
            listContentElement.innerHTML += `
                <article class="postItem">
						<img
							class="postItemThumbnail"
							src="${imageUrl}/${restaurant.pictureId}"
							alt="Gambar restaurant ${ restaurant.name }"
						/>
						<div class="postItemContent">
                            <h1 class="postItemTitle">
								<a href="#">${ restaurant.name }</a>
							</h1>
							<p class="postItemCity">
								Kota ${restaurant.city}
								<a href="#" class="postItemRate"> Rating ${restaurant.rating}
                                </a>
							</p>
							<p class="postItemDesc">
								${ restaurant.description }
							</p>
						</div>
					</article>
            `;
        });
    };
    
    const showResponseMessage = (message = 'Check your internet connection') => {
        alert(message);
    };

    document.addEventListener('DOMContentLoaded', () => {
        getRestaurant();
    });
        

}

export default main;
