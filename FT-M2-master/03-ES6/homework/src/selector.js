var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // Recorre el árbol del DOM y recolecta elementos que coincidan en resultSet
  // Usa matchFunc para identificar elementos que coincidan

  // TU CÓDIGO AQUÍ
  function traverse(element) {
    if (matchFunc(element)) {
      resultSet.push(element);
    }

    var children = element.children;
    for (var i = 0; i < children.length; i++) {
      traverse(children[i]);
    }
  }

  traverse(startEl);

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// Devuelve uno de estos tipos: id, class, tag.class, tag
var selectorTypeMatcher = function (selector) {
  if (selector[0] === "#") {
    return "id";
  } else if (selector[0] === ".") {
    return "class";
  } else if (selector.includes(".")) {
    return "tag.class";
  } else {
    return "tag";
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// Recuerda, la función matchFunction devuelta toma un elemento como un
// parámetro y devuelve true/false dependiendo si el elemento
// coincide con el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;

  if (selectorType === "id") {
    matchFunction = function (elemento) {
      return elemento.id === selector.slice(1);
    };
  } else if (selectorType === "class") {
    matchFunction = function (elemento) {
      return elemento.classList.contains(selector.slice(1));
    };
  } else if (selectorType === "tag.class") {
    matchFunction = function (elemento) {
      var [tag, clase] = selector.split(".");
      return elemento.tagName.toLowerCase() === tag.toLowerCase() &&
             elemento.classList.contains(clase);
    };
  } else if (selectorType === "tag") {
    matchFunction = function (elemento) {
      return elemento.tagName.toLowerCase() === selector.toLowerCase();
    };
  }

  return matchFunction;
};


var $ = function (selector, startEl) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc, startEl || document.body);
  return elements;
};