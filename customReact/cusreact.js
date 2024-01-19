function customRender(reactElement, container){
    
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.childrendomElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
         if(prop == "children") continue;
        domElement.setAttributr(prop, reactElement.props[prop])
        
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click Me'
}

const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer)