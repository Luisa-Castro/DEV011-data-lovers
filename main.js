import { filterData, filterGeneration, sortData, computeStats } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/pokemon/pokemon.js';

const root = document.querySelector("#root");
const selectFilter = document.querySelector("#filter");
const selectSort = document.querySelector("#sort");
const selectOrder = document.querySelector("#sortOrder");
const buttonClear = document.getElementById('buttonClear');
const numberFilter = document.querySelector('.numberFilter');
const kanto = document.querySelector('.kanto');
const johto = document.querySelector('.johto');
const dataStatistical = document.querySelector('.dataStatistical');

const allCards = renderItems(data.pokemon)
const weightAverage = computeStats(data.pokemon);
const filterKanto = filterGeneration(data.pokemon, 'generation', 'kanto');
const filterJohto = filterGeneration(data.pokemon, 'generation', 'johto');
numberFilter.textContent = `Total: ${data.pokemon.length}`;
kanto.textContent = `Kanto: ${filterKanto.length}`;
johto.textContent = `Johto: ${filterJohto.length}`;
dataStatistical.textContent = `Peso promedio: ${weightAverage}`;
root.appendChild(allCards);

selectFilter.addEventListener("change", () => {
  const value = selectFilter.value;
  selectSort.value = 'seleccionar';
  selectOrder.value = 'desc';
  const filterType = filterData(data.pokemon, 'type', value);
  root.innerHTML = '';
  if (value === 'seleccionar') {
    root.appendChild(allCards);
  } else if (filterType.length === 0) {
    const noData = `
      <div class = 'noDataStyle'>
      <em>Lo sentimos. No se encontraron Pokemones de tipo Flying, puedes seguir navegando por otros tipos!</em>
      </div>
      `
    root.innerHTML = noData;
  } else {
    root.innerHTML = '';
    const filterCards = renderItems(filterType)
    root.appendChild(filterCards);
  }
  const weightAverage = computeStats(filterType);
  const filterKanto = filterGeneration(filterType, 'generation', 'kanto');
  const filterJohto = filterGeneration(filterType, 'generation', 'johto');
  numberFilter.textContent = `Total: ${filterType.length}`;
  kanto.textContent = `Kanto: ${filterKanto.length}`;
  johto.textContent = `Johto: ${filterJohto.length}`;
  if (weightAverage === 'NaN') {
    dataStatistical.textContent = `Peso promedio: 0`;
  }else{
    dataStatistical.textContent = `Peso promedio: ${weightAverage}`;
  }
});


selectSort.addEventListener("change", () => {
  selectOrder.value = 'desc';
  const valueType = selectFilter.value;
  const valueSort = selectSort.value;
  const dataFilterSort = filterData(data.pokemon, 'type', valueType)
  const valueOrder = selectOrder.value;
  const sortCP = sortData(dataFilterSort, valueSort, valueOrder);
  root.innerHTML = '';
  const filterCards = renderItems(sortCP)
  root.appendChild(filterCards);
});

selectOrder.addEventListener("change", () => {
  const valueType = selectFilter.value;
  const valueSort = selectSort.value;
  const valueOrder = selectOrder.value;
  const dataFilterSort = filterData(data.pokemon, 'type', valueType)
  const sortCP = sortData(dataFilterSort, valueSort, valueOrder);
  root.innerHTML = '';
  const filterCards = renderItems(sortCP)
  root.appendChild(filterCards);
});


buttonClear.addEventListener("click", (event) => {
  if(event.target === buttonClear){
    selectFilter.value= 'seleccionar';
    selectSort.value= 'seleccionar';
    selectOrder.value= 'desc';
    numberFilter.textContent = `Total: ${data.pokemon.length}`;
    kanto.textContent = `Kanto: ${filterKanto.length}`;
    johto.textContent = `Johto: ${filterJohto.length}`;
    dataStatistical.textContent = `Peso promedio: ${weightAverage}`;
    root.innerHTML = "";
    root.appendChild(allCards);
  }
});
