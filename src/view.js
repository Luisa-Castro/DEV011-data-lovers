export const renderItems = (data) => {
  const ul = document.createElement('ul')
  ul.classList.add('boxCard');
  data.forEach(element => {
    const cardLi = `
    <dl itemscope itemtype='pokemon'>
      <div class='typeCPHP'>
        <dd itemprop='type'>
        <img class='imgType' src=img-extra/${element.type[0]}.png/>
        </dd>
        <dd itemprop='max-cp'>CP
          ${element.stats['max-cp']}
        </dd>
        <dd itemprop='max-hp'>HP
          ${element.stats['max-hp']}
        </dd>
      </div>
      <div class='middleData'>
        <dl itemprop='weaknessesList'>
          <dd itemprop='weaknesses'>${element.weaknesses.map(weakness => `<li><img class='imgRW' src=img-extra/${weakness}.png></li>`).join('')} </dd>
        </dl>

        <dd itemprop="image">
          <img src='${element.img}' />
        </dd>

        <dl itemprop='resistantList'>
          <dd itemprop='resistant'>${element.resistant.map(resistant => `<li><img class='imgRW' src=img-extra/${resistant}.png></li>`).join('')} </dd>
        </dl>
      </div>
      <dd itemprop="name">${element.name}</dd>
      <dd itemprop="region">${element.generation['name']}</dd>
    </dl>
    `
    const li = document.createElement('li');
    li.setAttribute('itemscope', '');
    li.setAttribute('itemtype', 'pokemon');
    li.classList.add('individualCard');
    li.innerHTML = cardLi;
    // const resistant = element.resistant;
    // const sectionResistant = document.createElement('section');
    // sectionResistant.classList.add('sectionRW');
    // resistant.forEach(element => {
    //   const ddResistant = document.createElement('dd');
    //   ddResistant.classList.add('ddRW');
    //   ddResistant.innerHTML = `<img class='imgRW' src=img-extra/${element}.png/>`
    //   sectionResistant.appendChild(ddResistant);
    // });

    // const weaknesses = element.weaknesses;
    // const sectionWeaknesses = document.createElement('section');
    // sectionWeaknesses.classList.add('sectionRW');
    // weaknesses.forEach(element => {
    //   const ddWeaknesses = document.createElement('dd');
    //   ddWeaknesses.classList.add('ddRW');
    //   ddWeaknesses.innerHTML = `<img class='imgRW' src=img-extra/${element}.png/>`
    //   sectionWeaknesses.appendChild(ddWeaknesses);
    // });

    // li.appendChild(sectionResistant);
    // li.appendChild(sectionWeaknesses);
    ul.append(li);
  });
  return ul;
};


