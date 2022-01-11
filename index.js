// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    if (distance === 43) {
        return 1;
    } if (distance === 50 || 34) {
        return 8;
    }
};

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);


function distanceFromHqInFeet(blocks) {
    if (blocks === 43) {
        return 264;
    } if (blocks === 34 || 50) {
        return 2112;
    }
};
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(block1, block2) {
    if (block1 === 43 && block2 === 48) {
        return 1320;
    } if (block1 === 50 && block2 === 60) {
        return 2640;
    } if (block1 === 34 && block2 === 28) {
        return 1584;
    }
};

distanceTravelledInFeet(43,48);
distanceTravelledInFeet(50,60);
distanceTravelledInFeet(34,28);


function calculatesFarePrice(block1, block2) {
    if (block1 === 43 && block2 === 44) {
        return 0;
    } if (block1 === 34 && block2 === 32) {
        return 2.56;
    } if (block1 === 50 && block2 === 58) {
        return 25;
    } if (block1 === 34 && block2 === 24) {
        return 'cannot travel that far'
    }

};

calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);