import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorsAsyncComponent = async(element) => {

  const heroGenerator = getHeroGenrator();
  let isFinished = false;

  do {
    
    const { value, done } = await heroGenerator.next();
    isFinished = done;
    if( isFinished ) break;
    element.innerHTML = value;

    console.log({value, done})
    
  } while ( !isFinished );

}

async function* getHeroGenrator () {

  for (const hero of heroes) {
    await sleep();
    yield hero.name;
  }

  return "no hay más";

}

const sleep = () => {
  return new Promise(( resolve ) => {
    setTimeout(() => {
      resolve();
    }, 500);
  })
}