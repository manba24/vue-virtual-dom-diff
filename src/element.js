import _ from './util'

class Element {
    constructor(tagName, attrs, children) {
        if (_.isArray(attrs)) {
            children = attrs
            attrs = {}
        }

        this.tagName = tagName
        this.attrs = attrs || {}
        this.children = children
        //设置this.key属性  为后面的list diff做准备
        this.key = attrs ? attrs.key : void 0

    }
    render() {
        let el = document.createElement(this.tagName)

        let attrs = this.attrs
        for (let attrName in attrs) {
            let attrValue = attrs[attrName]
            _.setAttr(el, attrName, attrValue)
        }

        let children = this.children || []

        children.forEach(child => {
            let childEl = child instanceof Element
                ? child.render()
                : document.createTextNode(child)
            el.appendChild(childEl)
        })

        return el
    }
}

function el(tagName, attrs, children) {
    return new Element(tagName, attrs, children)
}

module.exports = el;