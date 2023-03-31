a = document.querySelector("#elsoTelek");
b = document.querySelector("#masodikTelek");
button = document.querySelector("#button");
terulet = document.querySelector("#terulet")

button.addEventListener('click', () => {
    let eredmeny = (3/2 * Math.pow(Number(a.value),2)*Math.sqrt(3)) + (3/2 * Math.pow(Number(b.value),2)*Math.sqrt(3))/2;
    terulet.value = eredmeny;
});

	


