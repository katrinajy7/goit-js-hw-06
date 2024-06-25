let categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

// console.log(categories[0].firstElement[]);

for (let category of categories) {
    console.log(`category: ${category.firstElementChild.innerText}`);
    console.timeLog(`Elements:  ${category.firstElementChild.nextElementSibling.children.length}`);
    
}