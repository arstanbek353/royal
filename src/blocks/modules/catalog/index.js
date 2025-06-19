

const objects = [
    {
        id: "yntymak",
        type: "Жилой дом",
        type2: "Коттеджи",
        location: "Локация 1",
        status: "Строящиеся",
    },
    {
        id: "Tower",
        type: "Жилой дом",
        type2: "Офисы",
        location: "Локация 2",
        status: "Завершенные",
    },
    {
        id: "Royal Resort",
        type: "Все",
        type2: "Коммерческие помещения",
        location: "Локация 3",
        status: "Строящиеся",
    },
    {
        id: "Cambridge",
        type: "Жилой дом",
        type2: "Коттеджи",
        location: "Локация 4",
        status: "Завершенные",
    },
];

function filter() {
    const type_1 = getValueFromRadio("[name='type-1']");
    const type_2 = getValueFromRadio("[name='type-2']");
    const type_3 = getValueFromRadio("[name='type-3']");
    const type_4 = document.querySelector("#locations").value;

    function getValueFromRadio(selector) {
        const inputs = document.querySelectorAll(selector);
        let currentValue = "";
        inputs.forEach(el => {
            if (el.checked) {
                currentValue = el.value;
            }
        });
        return currentValue;
    }

    const filtered1 = objects.filter(obj => {
        if (obj.type === type_1 || type_1 === "Все" || type_1 === "") {
            return obj;
        }
    });

    const filtered2 = filtered1.filter(obj => {
        if (obj.status === type_2 || type_2 === "Все" || type_2 === "") {
            return obj;
        }
    });

    const filtered3 = filtered2.filter(obj => {
        if (obj.type2 === type_3 || type_3 === "Все" || type_3 === "") {
            return obj;
        }
    });

    const filtered4 = filtered3.filter(obj => {
        if (obj.location === type_4 || type_4 === "Все" || type_4 === "") {
            return obj;
        }
    });

    function toggleBlocks() {
        const blocks = document.querySelectorAll(".card");
        blocks.forEach(function(block) {
            if (filtered4.find((o => o.id == block.getAttribute("id")))) {
                block.style.display = "block";
            } else {
                block.style.display = "none";
            }
        });
    }

    toggleBlocks();

    console.log(filtered4);

}

const type_1 = document.querySelectorAll("[name='type-1']");

type_1.forEach(el => {
    el.addEventListener("change", () => {
        filter();
    });
});


const type_2 = document.querySelectorAll("[name='type-2']");

type_2.forEach(el => {
    el.addEventListener("change", () => {
        filter();
    });
});

const type_3 = document.querySelectorAll("[name='type-3']");

type_3.forEach(el => {
    el.addEventListener("change", () => {
        filter();
    });
});


const type_4 = document.querySelector("#locations");

type_4.addEventListener("change", () => {
    filter();
});