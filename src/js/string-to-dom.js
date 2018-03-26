function StringToDOM(string) {
    let domContent = new DOMParser().parseFromString(string, "text/html");
    return domContent;
}
export default StringToDOM;