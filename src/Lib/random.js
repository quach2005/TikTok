function random(data, type) {
    if (type === "number") {
        return Math.random(data);
    }
    else {
        return data[Math.floor(Math.random() * data.length)]
    }
}

export default random;