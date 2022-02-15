const Park = function(name, ticketPrice, dinosaurCollection){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = dinosaurCollection;
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurCollection.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
    this.dinosaurCollection.pop(dinosaur);
}

Park.prototype.dinosaurWithMostVisitors = function(dinosaurCollection){
    let dinosaurVisitCountArray = [];
    for(let dinosaur of dinosaurCollection){
        dinosaurVisitCountArray.push(dinosaur.guestsAttractedPerDay);
    };
    let maxVisitorCount = Math.max.apply(Math, dinosaurVisitCountArray);
    for(let dinosaur of dinosaurCollection){
        if  (dinosaur.guestsAttractedPerDay === maxVisitorCount){
            return dinosaur;
        };
    };
}

Park.prototype.allParticularSpeciesOfDinosaur = function(dinosaurCollection, species){
    let arrayOfOneSpeciesofDinosaur = [];
    for(let dinosaur of dinosaurCollection){
        if(dinosaur.species === species){
            arrayOfOneSpeciesofDinosaur.push(dinosaur);
        };
    } return arrayOfOneSpeciesofDinosaur; 
}

Park.prototype.totalVisitorsPerDay = function(dinosaurCollection){
    let totalVisitors = 0
    for(let dinosaur of dinosaurCollection){
        totalVisitors += dinosaur.guestsAttractedPerDay;
    } return totalVisitors;
}

Park.prototype.totalVisitorsPerYear = function(dinosaurCollection){
    return this.totalVisitorsPerDay(dinosaurCollection) * 365;
}

Park.prototype.totalYearlyRevenue = function(park){
    return this.totalVisitorsPerYear(park.dinosaurCollection) * park.ticketPrice;
}

module.exports = Park;