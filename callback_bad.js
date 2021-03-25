const dishes = [
    '炒高麗菜',
    '牛肉麵',
    '紅油炒手'
];


function order(callback) {
    const dish = dishes[Math.floor(Math.random() * dishes.length)]
    setTimeout(() => {
        console.log("ok, finished ordering");
        callback(dish);
    }, 2000);
}

function prepare(dish, callback) {
    setTimeout(() => {
        console.log("ok, finished preparing");
        callback();
    }, 2000);
}

function cook(callback) {
    setTimeout(() => {
        console.log("ok, finished cooking");
        callback();
    }, 2000);
}

function deliver(callback) {
    setTimeout(() => {
        console.log("ok, finished delivering");
        callback();
    }, 2000);
}

function checkout(callback) {
    setTimeout(() => {
        console.log("ok, finished checking out");
        callback();
    }, 2000);
}

function process1() {
    order(
        (dish) => {
            prepare(dish, () => {
                    cook(() => {
                        deliver(() => {
                            checkout(() => {
                                console.log("ok, everything done, thank you");
                            })
                        });
                    });
                });
        });
}

function process2() {
    order(
        (dish) => {
            prepare(dish, () => {
                    cook(() => {
                        checkout(() => {
                            deliver(() => {
                                console.log("ok, everything done, thank you");
                            })
                        });
                    });
                });
        });
}

process1();