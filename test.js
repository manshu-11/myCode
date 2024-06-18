const divBox = document.querySelectorAll(".divBox")
console.log(divBox);
divBox.forEach((element,i) => {
    element.innerHTML = `<h1>Hello Word     ${i}</h1> `
});
divBox.innerHTML = "<h1>Hello Word</h1>"