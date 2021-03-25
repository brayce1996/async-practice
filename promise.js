function wait(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
}

function count(number) {
    let counter = 0;
    return new Promise((resolve, reject) => {
        if (number > 10) {
            reject("Sorry, I cannot count number larger than 10 :(");
            return;
        } else if (number < 1) {
            reject("Sorry, I cannot count number less than 1 :(");
            return;
        }

        const intervalId = setInterval(() => {
            counter += 1;
            console.log(`It's ${counter} !`)
            if (counter === number) {
                clearInterval(intervalId);
                resolve(counter);
                return;
            }
        }, 1000);
    });
}

function testWait() {
    wait(1).then(() => {
        console.log("1");
        wait(2).then(() => {
            console.log("2");
        });
    })
}

function testCount() {
    count(3).then((result) => {
        console.log(`result is ${result}`);
    }).then(() => {
        count(12).catch((error) => {
            console.error(error);
        });
    })
}

function test() {
    // TODO: 改寫程式，完成testWait以後才執行testCount
    // 可以改寫 test, testWait, testCount, 但不一定每個都要改才會成功

    testWait();
    testCount();
}

test();