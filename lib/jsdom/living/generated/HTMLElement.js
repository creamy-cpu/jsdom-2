"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const HTMLConstructor_helpers_html_constructor = require("../helpers/html-constructor.js").HTMLConstructor;
const ceReactionsPreSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPreSteps;
const ceReactionsPostSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPostSteps;
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const Element = require("./Element.js");

const interfaceName = "HTMLElement";

exports.is = value => {
  return utils.isObject(value) && utils.hasOwn(value, implSymbol) && value[implSymbol] instanceof Impl.implementation;
};
exports.isImpl = value => {
  return utils.isObject(value) && value instanceof Impl.implementation;
};
exports.convert = (value, { context = "The provided value" } = {}) => {
  if (exports.is(value)) {
    return utils.implForWrapper(value);
  }
  throw new TypeError(`${context} is not of type 'HTMLElement'.`);
};

function makeWrapper(globalObject) {
  if (globalObject[ctorRegistrySymbol] === undefined) {
    throw new Error("Internal error: invalid global object");
  }

  const ctor = globalObject[ctorRegistrySymbol]["HTMLElement"];
  if (ctor === undefined) {
    throw new Error("Internal error: constructor HTMLElement is not installed on the passed global object");
  }

  return Object.create(ctor.prototype);
}

exports.create = (globalObject, constructorArgs, privateData) => {
  const wrapper = makeWrapper(globalObject);
  return exports.setup(wrapper, globalObject, constructorArgs, privateData);
};

exports.createImpl = (globalObject, constructorArgs, privateData) => {
  const wrapper = exports.create(globalObject, constructorArgs, privateData);
  return utils.implForWrapper(wrapper);
};

exports._internalSetup = (wrapper, globalObject) => {
  Element._internalSetup(wrapper, globalObject);
};

exports.setup = (wrapper, globalObject, constructorArgs = [], privateData = {}) => {
  privateData.wrapper = wrapper;

  exports._internalSetup(wrapper, globalObject);
  Object.defineProperty(wrapper, implSymbol, {
    value: new Impl.implementation(globalObject, constructorArgs, privateData),
    configurable: true
  });

  wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
  if (Impl.init) {
    Impl.init(wrapper[implSymbol]);
  }
  return wrapper;
};

exports.new = globalObject => {
  const wrapper = makeWrapper(globalObject);

  exports._internalSetup(wrapper, globalObject);
  Object.defineProperty(wrapper, implSymbol, {
    value: Object.create(Impl.implementation.prototype),
    configurable: true
  });

  wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
  if (Impl.init) {
    Impl.init(wrapper[implSymbol]);
  }
  return wrapper[implSymbol];
};

const exposed = new Set(["Window"]);

exports.install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }

  if (globalObject.Element === undefined) {
    throw new Error("Internal error: attempting to evaluate HTMLElement before Element");
  }
  class HTMLElement extends globalObject.Element {
    constructor() {
      return HTMLConstructor_helpers_html_constructor(globalObject, interfaceName, new.target);
    }

    click() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return esValue[implSymbol].click();
    }

    focus() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return esValue[implSymbol].focus();
    }

    blur() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return esValue[implSymbol].blur();
    }

    get title() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "title", new Error().stack, esValue, arguments)


      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "title");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set title(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "title", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'title' property on 'HTMLElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "title", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get lang() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "lang", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "lang");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set lang(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "lang", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'lang' property on 'HTMLElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "lang", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get translate() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "translate", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["translate"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set translate(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "translate", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'translate' property on 'HTMLElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["translate"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get dir() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "dir", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["dir"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set dir(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "dir", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'dir' property on 'HTMLElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["dir"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get hidden() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "hidden", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].hasAttributeNS(null, "hidden");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set hidden(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "hidden", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'hidden' property on 'HTMLElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol].setAttributeNS(null, "hidden", "");
        } else {
          esValue[implSymbol].removeAttributeNS(null, "hidden");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get accessKey() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "accessKey", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "accesskey");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set accessKey(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "accessKey", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'accessKey' property on 'HTMLElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "accesskey", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get draggable() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "draggable", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["draggable"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set draggable(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "draggable", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'draggable' property on 'HTMLElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["draggable"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get offsetParent() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "offsetParent", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["offsetParent"]);
    }

    get offsetTop() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "offsetTop", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return esValue[implSymbol]["offsetTop"];
    }

    get offsetLeft() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "offsetLeft", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return esValue[implSymbol]["offsetLeft"];
    }

    get offsetWidth() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "offsetWidth", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return esValue[implSymbol]["offsetWidth"];
    }

    get offsetHeight() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "offsetHeight", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return esValue[implSymbol]["offsetHeight"];
    }

    get style() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "style", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.getSameObject(this, "style", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["style"]);
      });
    }

    set style(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "style", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      const Q = esValue["style"];
      if (!utils.isObject(Q)) {
        throw new TypeError("Property 'style' is not an object");
      }
      Reflect.set(Q, "cssText", V);
    }

    get onabort() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onabort", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onabort"]);
    }

    set onabort(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onabort", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onabort"] = V;
    }

    get onauxclick() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onauxclick", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onauxclick"]);
    }

    set onauxclick(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onauxclick", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onauxclick"] = V;
    }

    get onblur() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onblur", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onblur"]);
    }

    set onblur(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onblur", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onblur"] = V;
    }

    get oncancel() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "oncancel", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["oncancel"]);
    }

    set oncancel(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "oncancel", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["oncancel"] = V;
    }

    get oncanplay() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "oncanplay", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["oncanplay"]);
    }

    set oncanplay(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "oncanplay", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["oncanplay"] = V;
    }

    get oncanplaythrough() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "oncanplaythrough", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["oncanplaythrough"]);
    }

    set oncanplaythrough(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "oncanplaythrough", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["oncanplaythrough"] = V;
    }

    get onchange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onchange", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onchange"]);
    }

    set onchange(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onchange", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onchange"] = V;
    }

    get onclick() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onclick", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onclick"]);
    }

    set onclick(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onclick", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onclick"] = V;
    }

    get onclose() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onclose", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onclose"]);
    }

    set onclose(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onclose", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onclose"] = V;
    }

    get oncontextmenu() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "oncontextmenu", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["oncontextmenu"]);
    }

    set oncontextmenu(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "oncontextmenu", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["oncontextmenu"] = V;
    }

    get oncuechange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "oncuechange", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["oncuechange"]);
    }

    set oncuechange(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "oncuechange", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["oncuechange"] = V;
    }

    get ondblclick() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "ondblclick", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondblclick"]);
    }

    set ondblclick(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "ondblclick", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["ondblclick"] = V;
    }

    get ondrag() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "ondrag", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondrag"]);
    }

    set ondrag(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "ondrag", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["ondrag"] = V;
    }

    get ondragend() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "ondragend", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondragend"]);
    }

    set ondragend(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "ondragend", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["ondragend"] = V;
    }

    get ondragenter() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "ondragenter", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondragenter"]);
    }

    set ondragenter(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "ondragenter", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["ondragenter"] = V;
    }

    get ondragexit() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "ondragexit", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondragexit"]);
    }

    set ondragexit(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "ondragexit", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["ondragexit"] = V;
    }

    get ondragleave() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "ondragleave", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondragleave"]);
    }

    set ondragleave(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "ondragleave", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["ondragleave"] = V;
    }

    get ondragover() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "ondragover", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondragover"]);
    }

    set ondragover(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "ondragover", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["ondragover"] = V;
    }

    get ondragstart() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "ondragstart", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondragstart"]);
    }

    set ondragstart(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "ondragstart", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["ondragstart"] = V;
    }

    get ondrop() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "ondrop", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondrop"]);
    }

    set ondrop(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "ondrop", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["ondrop"] = V;
    }

    get ondurationchange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "ondurationchange", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondurationchange"]);
    }

    set ondurationchange(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "ondurationchange", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["ondurationchange"] = V;
    }

    get onemptied() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onemptied", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onemptied"]);
    }

    set onemptied(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onemptied", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onemptied"] = V;
    }

    get onended() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onended", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onended"]);
    }

    set onended(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onended", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onended"] = V;
    }

    get onerror() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onerror", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onerror"]);
    }

    set onerror(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onerror", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onerror"] = V;
    }

    get onfocus() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onfocus", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onfocus"]);
    }

    set onfocus(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onfocus", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onfocus"] = V;
    }

    get oninput() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "oninput", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["oninput"]);
    }

    set oninput(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "oninput", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["oninput"] = V;
    }

    get oninvalid() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "oninvalid", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["oninvalid"]);
    }

    set oninvalid(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "oninvalid", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["oninvalid"] = V;
    }

    get onkeydown() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onkeydown", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onkeydown"]);
    }

    set onkeydown(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onkeydown", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onkeydown"] = V;
    }

    get onkeypress() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onkeypress", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onkeypress"]);
    }

    set onkeypress(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onkeypress", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onkeypress"] = V;
    }

    get onkeyup() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onkeyup", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onkeyup"]);
    }

    set onkeyup(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onkeyup", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onkeyup"] = V;
    }

    get onload() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onload", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onload"]);
    }

    set onload(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onload", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onload"] = V;
    }

    get onloadeddata() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onloadeddata", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onloadeddata"]);
    }

    set onloadeddata(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onloadeddata", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onloadeddata"] = V;
    }

    get onloadedmetadata() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onloadedmetadata", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onloadedmetadata"]);
    }

    set onloadedmetadata(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onloadedmetadata", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onloadedmetadata"] = V;
    }

    get onloadend() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onloadend", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onloadend"]);
    }

    set onloadend(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onloadend", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onloadend"] = V;
    }

    get onloadstart() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onloadstart", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onloadstart"]);
    }

    set onloadstart(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onloadstart", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onloadstart"] = V;
    }

    get onmousedown() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onmousedown", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmousedown"]);
    }

    set onmousedown(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onmousedown", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onmousedown"] = V;
    }

    get onmouseenter() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onmouseenter", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        return;
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmouseenter"]);
    }

    set onmouseenter(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onmouseenter", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        return;
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onmouseenter"] = V;
    }

    get onmouseleave() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onmouseleave", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        return;
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmouseleave"]);
    }

    set onmouseleave(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onmouseleave", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        return;
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onmouseleave"] = V;
    }

    get onmousemove() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onmousemove", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmousemove"]);
    }

    set onmousemove(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onmousemove", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onmousemove"] = V;
    }

    get onmouseout() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onmouseout", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmouseout"]);
    }

    set onmouseout(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onmouseout", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onmouseout"] = V;
    }

    get onmouseover() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onmouseover", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmouseover"]);
    }

    set onmouseover(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onmouseover", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onmouseover"] = V;
    }

    get onmouseup() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onmouseup", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmouseup"]);
    }

    set onmouseup(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onmouseup", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onmouseup"] = V;
    }

    get onwheel() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onwheel", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onwheel"]);
    }

    set onwheel(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onwheel", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onwheel"] = V;
    }

    get onpause() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onpause", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onpause"]);
    }

    set onpause(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onpause", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onpause"] = V;
    }

    get onplay() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onplay", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onplay"]);
    }

    set onplay(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onplay", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onplay"] = V;
    }

    get onplaying() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onplaying", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onplaying"]);
    }

    set onplaying(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onplaying", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onplaying"] = V;
    }

    get onprogress() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onprogress", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onprogress"]);
    }

    set onprogress(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onprogress", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onprogress"] = V;
    }

    get onratechange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onratechange", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onratechange"]);
    }

    set onratechange(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onratechange", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onratechange"] = V;
    }

    get onreset() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onreset", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onreset"]);
    }

    set onreset(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onreset", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onreset"] = V;
    }

    get onresize() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onresize", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onresize"]);
    }

    set onresize(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onresize", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onresize"] = V;
    }

    get onscroll() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onscroll", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onscroll"]);
    }

    set onscroll(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onscroll", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onscroll"] = V;
    }

    get onsecuritypolicyviolation() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onsecuritypolicyviolation", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onsecuritypolicyviolation"]);
    }

    set onsecuritypolicyviolation(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onsecuritypolicyviolation", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onsecuritypolicyviolation"] = V;
    }

    get onseeked() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onseeked", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onseeked"]);
    }

    set onseeked(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onseeked", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onseeked"] = V;
    }

    get onseeking() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onseeking", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onseeking"]);
    }

    set onseeking(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onseeking", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onseeking"] = V;
    }

    get onselect() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onselect", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onselect"]);
    }

    set onselect(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onselect", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onselect"] = V;
    }

    get onstalled() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onstalled", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onstalled"]);
    }

    set onstalled(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onstalled", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onstalled"] = V;
    }

    get onsubmit() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onsubmit", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onsubmit"]);
    }

    set onsubmit(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onsubmit", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onsubmit"] = V;
    }

    get onsuspend() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onsuspend", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onsuspend"]);
    }

    set onsuspend(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onsuspend", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onsuspend"] = V;
    }

    get ontimeupdate() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "ontimeupdate", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ontimeupdate"]);
    }

    set ontimeupdate(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "ontimeupdate", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["ontimeupdate"] = V;
    }

    get ontoggle() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "ontoggle", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ontoggle"]);
    }

    set ontoggle(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "ontoggle", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["ontoggle"] = V;
    }

    get onvolumechange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onvolumechange", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onvolumechange"]);
    }

    set onvolumechange(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onvolumechange", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onvolumechange"] = V;
    }

    get onwaiting() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "onwaiting", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onwaiting"]);
    }

    set onwaiting(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "onwaiting", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = utils.tryImplForWrapper(V);

      esValue[implSymbol]["onwaiting"] = V;
    }

    get dataset() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "dataset", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      return utils.getSameObject(this, "dataset", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["dataset"]);
      });
    }

    get nonce() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "nonce", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      const value = esValue[implSymbol].getAttributeNS(null, "nonce");
      return value === null ? "" : value;
    }

    set nonce(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "nonce", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'nonce' property on 'HTMLElement': The provided value"
      });

      esValue[implSymbol].setAttributeNS(null, "nonce", V);
    }

    get tabIndex() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableGet', "HTMLElement.js", "tabIndex", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["tabIndex"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set tabIndex(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      globalObject.scriptScanner.emit('variableSet', "HTMLElement.js", "tabIndex", new Error().stack, esValue, arguments)

      if (!exports.is(esValue)) {
        throw new TypeError("Illegal invocation");
      }

      V = conversions["long"](V, {
        context: "Failed to set the 'tabIndex' property on 'HTMLElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["tabIndex"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }
  }
  Object.defineProperties(HTMLElement.prototype, {
    click: { enumerable: true },
    focus: { enumerable: true },
    blur: { enumerable: true },
    title: { enumerable: true },
    lang: { enumerable: true },
    translate: { enumerable: true },
    dir: { enumerable: true },
    hidden: { enumerable: true },
    accessKey: { enumerable: true },
    draggable: { enumerable: true },
    offsetParent: { enumerable: true },
    offsetTop: { enumerable: true },
    offsetLeft: { enumerable: true },
    offsetWidth: { enumerable: true },
    offsetHeight: { enumerable: true },
    style: { enumerable: true },
    onabort: { enumerable: true },
    onauxclick: { enumerable: true },
    onblur: { enumerable: true },
    oncancel: { enumerable: true },
    oncanplay: { enumerable: true },
    oncanplaythrough: { enumerable: true },
    onchange: { enumerable: true },
    onclick: { enumerable: true },
    onclose: { enumerable: true },
    oncontextmenu: { enumerable: true },
    oncuechange: { enumerable: true },
    ondblclick: { enumerable: true },
    ondrag: { enumerable: true },
    ondragend: { enumerable: true },
    ondragenter: { enumerable: true },
    ondragexit: { enumerable: true },
    ondragleave: { enumerable: true },
    ondragover: { enumerable: true },
    ondragstart: { enumerable: true },
    ondrop: { enumerable: true },
    ondurationchange: { enumerable: true },
    onemptied: { enumerable: true },
    onended: { enumerable: true },
    onerror: { enumerable: true },
    onfocus: { enumerable: true },
    oninput: { enumerable: true },
    oninvalid: { enumerable: true },
    onkeydown: { enumerable: true },
    onkeypress: { enumerable: true },
    onkeyup: { enumerable: true },
    onload: { enumerable: true },
    onloadeddata: { enumerable: true },
    onloadedmetadata: { enumerable: true },
    onloadend: { enumerable: true },
    onloadstart: { enumerable: true },
    onmousedown: { enumerable: true },
    onmouseenter: { enumerable: true },
    onmouseleave: { enumerable: true },
    onmousemove: { enumerable: true },
    onmouseout: { enumerable: true },
    onmouseover: { enumerable: true },
    onmouseup: { enumerable: true },
    onwheel: { enumerable: true },
    onpause: { enumerable: true },
    onplay: { enumerable: true },
    onplaying: { enumerable: true },
    onprogress: { enumerable: true },
    onratechange: { enumerable: true },
    onreset: { enumerable: true },
    onresize: { enumerable: true },
    onscroll: { enumerable: true },
    onsecuritypolicyviolation: { enumerable: true },
    onseeked: { enumerable: true },
    onseeking: { enumerable: true },
    onselect: { enumerable: true },
    onstalled: { enumerable: true },
    onsubmit: { enumerable: true },
    onsuspend: { enumerable: true },
    ontimeupdate: { enumerable: true },
    ontoggle: { enumerable: true },
    onvolumechange: { enumerable: true },
    onwaiting: { enumerable: true },
    dataset: { enumerable: true },
    nonce: { enumerable: true },
    tabIndex: { enumerable: true },
    [Symbol.toStringTag]: { value: "HTMLElement", configurable: true }
  });
  if (globalObject[ctorRegistrySymbol] === undefined) {
    globalObject[ctorRegistrySymbol] = Object.create(null);
  }
  globalObject[ctorRegistrySymbol][interfaceName] = HTMLElement;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: HTMLElement
  });
};

const Impl = require("../nodes/HTMLElement-impl.js");
