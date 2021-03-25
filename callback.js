function wait(seconds, callback) {
    setTimeout(() => {
        callback();
    }, seconds * 1000);
}

function count(number, callback, errorHandler) {
    let counter = 0;
    if (number > 10) {
        errorHandler("Sorry, I cannot count number larger than 10 :(");
        return;
    } else if (number < 1) {
        errorHandler("Sorry, I cannot count number less than 1 :(");
        return;
    }

    const intervalId = setInterval(() => {
        counter += 1;
        console.log(`It's ${counter} !`)
        if (counter === number) {
            clearInterval(intervalId);
            callback(counter);
            return;
        }
    }, 1000);
}

function testWait() {
    wait(1, () => {
        console.log("1");
        wait(2, () => {
            console.log("2");
        })
    })
}

function testCount() {
    count(3, (result) => {
        console.log(`result is ${result}`);
        count(12, (result) => {
            console.log(`result is ${result}`);
        }, (errorMsg) => {
            console.error(errorMsg);
        });
    }, (errorMsg) => {
        console.error(errorMsg);
    })
}

function test() {
    // TODO: 改寫程式，完成testWait以後才執行testCount
    // 可以改寫 test, testWait, testCount, 但不一定每個都要改才會成功
    
    testWait();
    testCount();
}

test();