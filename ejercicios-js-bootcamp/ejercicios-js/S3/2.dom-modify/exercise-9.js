const body$$ = document.querySelector("body");

const divClase$$ = document.querySelectorAll(".fn-insert-here");

for (let i = 0; i < divClase$$.length; i++) {
  const div$$ = divClase$$[i];

  const p$$ = document.createElement("p");

  p$$.textContent = "¡Voy dentro!";

  div$$.appendChild(p$$);
}
