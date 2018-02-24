function StringToDOM(dom) {
    let domContent = new DOMParser().parseFromString(dom, "text/html");
    domContent.appendChild(domContent.head);
    domContent.appendChild(domContent.body);
    return domContent;
}
export default StringToDOM;