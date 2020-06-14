import "../component/appBar";
import "../component/appResult"
import DataSource from '../data/dataSource.js';

const main = () => {
  const searchElement = document.querySelector("app-nav-bar");
  const appResultElement = document.querySelector("app-result");


  const onButtonSearchClicked = async () => {
    console.log(searchElement.value);
    try {
      const result = await DataSource.searchTracks(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message)
    }
  };

  const renderResult = results => {
    appResultElement.tracks = results;
  };

  const fallbackResult = message => {
    appResultElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;