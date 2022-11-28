const technologyFilter = () => {
    let threadContentContainer = document.querySelector(".threadContentContainer")

    for (const child of threadContentContainer.children) {

        if (child.classList.value == "threadContent technology") {
            child.style.display = "flex"

        }
        else {
            child.style.display = "none"
        }
    }

}

const ecommerceFilter = () => {
    let threadContentContainer = document.querySelector(".threadContentContainer")

    for (const child of threadContentContainer.children) {

        if (child.classList.value == "threadContent ecommerce") {
            child.style.display = "flex"

        }
        else {
            child.style.display = "none"
        }
    }

}

const healthFilter = () => {
    let threadContentContainer = document.querySelector(".threadContentContainer")

    for (const child of threadContentContainer.children) {

        if (child.classList.value == "threadContent health-lifestyle") {
            child.style.display = "flex"

        }
        else {
            child.style.display = "none"
        }
    }

}

const gamesFilter = () => {
    let threadContentContainer = document.querySelector(".threadContentContainer")

    for (const child of threadContentContainer.children) {

        if (child.classList.value == "threadContent games") {
            child.style.display = "flex"

        }
        else {
            child.style.display = "none"
        }
    }

}

const foodFilter = () => {
    let threadContentContainer = document.querySelector(".threadContentContainer")

    for (const child of threadContentContainer.children) {

        if (child.classList.value == "threadContent food-beverages") {
            child.style.display = "flex"

        }
        else {
            child.style.display = "none"
        }
    }

}
const allfilter =() =>{
    let threadContentContainer = document.querySelector(".threadContentContainer")

    for (const child of threadContentContainer.children){
        child.style.display = "flex"
    }


}


export {technologyFilter, ecommerceFilter ,healthFilter, gamesFilter , foodFilter ,allfilter }