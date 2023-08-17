const debounce = (func, delay) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay)
    }
}

const sayHi = (el) => console.log(el)

const say = debounce(sayHi, 500);

say("feo")