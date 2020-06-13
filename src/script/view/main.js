import '../component/app-bar'

const main = () => {
    const searchElement = document.querySelector("app-bar");

    const onButtonSearchClicked = () => {
        console.log(searchElement.value);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;