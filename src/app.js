/*
* @Author: Jingyuexing
* @Date:   2022-08-06 18:32:21
* @Last Modified by:   Jingyuexing
* @Last Modified time: 2022-08-07 15:09:20
*/

function $Ready(callback) {
  document.onreadystatechange = function () {
    if (document.readyState === "complete") {
      callback()
    }
  }
}

var colorTable = {
  "02-60-35": {
    "RGB": [174, 114, 151],
    "CMYK": [40, 62, 81, 1]
  },
  "002-71-17": {
    "RGB": [131, 139, 151],
    "CMYK": [56, 43, 34, 0]
  },
  "107-31-20": {
    "RGB": [169, 167, 175],
    "CMYK": [40, 33, 25, 0]
  },
  "022-57-20": {
    "RGB": [206, 135, 105],
    "CMYK": [24, 56, 57, 0]
  },
  "02-60-35": {
    "RGB": [248, 152, 65],
    "CMYK": [2, 52, 76, 0]
  },
  "056-36-11": {
    "RGB": [89, 95, 67],
    "CMYK": [70, 57, 79, 18]
  },
  "028-43-27": {
    "RGB": [167, 98, 33],
    "CMYK": [42, 69, 100, 4]
  },
  "082-72-06": {
    "RGB": [172, 197, 195],
    "CMYK": [38, 16, 24, 0]
  },
  "030-87-05": {
    "RGB": [238, 230, 219],
    "CMYK": [9, 11, 15, 0]
  },
  "021-67-17": {
    "RGB": [227, 167, 45],
    "CMYK": [13, 43, 40, 0]
  },
  "024-52-19": {
    "RGB": [181, 120, 89],
    "CMYK": [36, 60, 66, 0]
  },
  "17-25-12": {
    "RGB": [88, 61, 55],
    "CMYK": [65, 74, 74, 35]
  },
  "039-66-17": {
    "RGB": [198, 174, 114],
    "CMYK": [29, 33, 60, 0]
  },
  "078-32-01": {
    "RGB": [77, 83, 83],
    "CMYK": [75, 65, 63, 19]
  },
  "031-78-00": {
    "RGB": [203, 205, 208],
    "CMYK": [40, 62, 81, 1]
  },
  "047-91-00": {
    "RGB": [240, 242, 244],
    "CMYK": [40, 62, 81, 1]
  },
  "071-38-28": {
    "RGB": [163, 67, 49],
    "CMYK": [42, 85, 88, 7]
  },
  "unknow": {
    "RGB": [104, 78, 255],
    "CMYK": []
  },
  "ocean": {
    "RGB": [87, 171, 236],
    "CMYK": []
  },
  "grass": {
    "RGB": [140, 223, 195],
    "CMYK": [],
  },
  "yellow": {
    "RGB": [251, 255, 181],
    "CMYK": []
  }
}
function randomInt(min, max) {
  return ~~(Math.random() * (max - min) + min)
}
$Ready(function () {

  function isString(val) {
    return typeof val === "string"
  }
  function isObject(val) {
    return typeof val === 'object'
  }
  function generatorGradient(deg = 145) {
    let list = Object.keys(colorTable)
    let color1 = colorTable[list[randomInt(0, list.length)]].RGB.toString();
    let color2 = colorTable[list[randomInt(0, list.length)]].RGB.toString();
    if (color1 == color2) {
      color2 = colorTable[list[randomInt(0, list.length)]].RGB.toString();
    }
    return `linear-gradient(${deg}deg,rgb(${color1}),rgb(${color2}))`
  }
  /**
   * [CardComponent description]
   * @param {HTMLElement} title   卡片标题
   * @param {HTMLElement} footer  卡片底部
   * @param {HTMLElement} content 卡片内容
   */
  function CardComponent(title, footer, content) {
    var cardTitle = document.createElement("div");
    cardTitle.setAttribute("title", '');
    var cardFooter = document.createElement("div");
    cardFooter.setAttribute("footer", '');
    var cardContainer = document.createElement("div");
    cardContainer.setAttribute("content", "")
    var card = document.createElement("div");
    ["card", "flex", "column", "center", "w-200"].forEach(value => {
      card.setAttribute(value, '')
    });
    if (isString(title)) {
      cardTitle.innerText = title;
    } else if (isObject(title)) {
      cardTitle.appendChild(title)
    }
    if (isString(content)) {
      cardContainer.innerText = content;
    } else if (isObject(content)) {
      cardContainer.appendChild(content)
    }
    if (isString(footer)) {
      cardFooter.innerText = footer;
    } else if (isObject(footer)) {
      cardFooter.appendChild(footer)
    }

    card.appendChild(cardTitle)
    card.appendChild(cardContainer)
    card.appendChild(cardFooter)
    return card;
  }
  let root = document.querySelector("[mounted-center]")
  Object.keys(colorTable).forEach(key => {
    let box = document.createElement("div")
    let container = document.createElement("div");
    container.setAttribute("inline", "")
    let RGB = colorTable[key].RGB
    console.log(colorTable[key].RGB)
    box.setAttribute("w-200", "")
    box.setAttribute("h-120", "")
    box.style.backgroundColor = `rgb(${RGB.toString()})`
    card = CardComponent(`RGB: ${RGB.toString()}`, "", box);
    container.appendChild(card)
    container.classList.add("box")
    root.appendChild(container);
  })
  for (let i = 0; i < 60; i++) {
    let box = document.createElement("div");
    let container = document.createElement("div");
    container.setAttribute("inline", "")
    box.setAttribute("w-200", "")
    box.setAttribute("h-120", "")
    box.style.backgroundImage = generatorGradient()
    card = CardComponent(`RGB: random color-${i}`, "", box);
    container.appendChild(card)
    container.classList.add("box")
    root.appendChild(container);
  }
})
