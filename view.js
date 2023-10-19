export const renderItems = (data) => {
  const ul = document.createElement('ul')
  ul.classList.add('boxCard');
  data.forEach(element => {
    const cardLi = `
    <dl itemscope itemtype='pokemon'>
      <div class='typeCPHP'>
        <dd itemprop='type'>
        <img class='imgType' src=img-extra/${element.type[0]}.png>
        </dd>
        <dd itemprop='max-cp'>CP
        ${element.stats['max-cp']}
        </dd>
        <dd itemprop='max-hp'>HP
        ${element.stats['max-hp']}
        </dd>
      </div> 
      <div class='middleData'>
      <dl itemprop='wyrList'>
      <dd itemprop='weaknesses'> D ${element.weaknesses.map(weakness => `<li><img class='imgRW' src=img-extra/${weakness}.png></li>`).join('')} </dd>
      </dl>
      <div class='imgGen'>
      <dd itemprop="image">
        <img src='${element.img}'/>
      </dd>
      <dd itemprop="region">${element.generation['name']}</dd>
      </div>
      <dl itemprop='wyrList'>
      <dd itemprop='resistant'> R ${element.resistant.map(resistant => `<li><img class='imgRW' src=img-extra/${resistant}.png></li>`).join('')} </dd> 
       </dl>
      </div>
      <dd itemprop="name">${element.name}</dd>
    </dl>
    `
    const li = document.createElement('li');
    li.setAttribute('itemscope', '');
    li.setAttribute('itemtype', 'pokemon'); //Itemtype ayuda a indicar específicamnete que tipo de datos estoy presentando en mi página
    li.classList.add('individualCard');
    li.innerHTML = cardLi;
    ul.append(li);
  });
  return ul;
};
