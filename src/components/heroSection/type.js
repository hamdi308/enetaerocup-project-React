function Start(text) {
    let index = 0
    index++;
    if (index > text.length - 1) {
        index = 0
    }
    return text.slice(0, index);
}
setInterval(Start, 80)

export default Start