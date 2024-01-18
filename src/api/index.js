import Chance from 'chance';

const chance = new Chance();

export const userListData = () => {
    const randomName = chance.name();
    console.log(randomName);
    return randomName;
};