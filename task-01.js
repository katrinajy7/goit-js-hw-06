let categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

// console.log(categories[0].firstElement[]);

for (let category of category) {
    console.log(`category: ${category.firstElementChild.innerText}`);
}