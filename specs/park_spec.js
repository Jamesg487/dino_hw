const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dino1;
  let dino2;
  let dino3;

  beforeEach(function () {
    dino1 = new Dinosaur('t-rex', 'carnivore', 50);
    dino2 = new Dinosaur('teradactul','carnivore', 24);
    dino3 = new Dinosaur('diplodocus','herbivore', 110);
    dino4 = new Dinosaur('diplodocus','herbivore', 84);
    park = new Park("RAWRLand", 15.99, [dino1, dino2]);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'RAWRLand');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 15.99);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, [dino1, dino2]);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dino3);
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, [dino1, dino2, dino3]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dino2);
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, [dino1]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    let highestVistedDinosaur = park.dinosaurWithMostVisitors(park.dinosaurCollection)
    assert.deepStrictEqual(dino1, highestVistedDinosaur)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    let oneSpecies = park.allParticularSpeciesOfDinosaur(park.dinosaurCollection, 'diplodocus');
    assert.deepStrictEqual([dino3, dino4], oneSpecies);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    let totalVisitorsPerDay = park.totalVisitorsPerDay(park.dinosaurCollection);
    assert.strictEqual(74, totalVisitorsPerDay);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    let totalVisitorsPerYear = park.totalVisitorsPerYear(park.dinosaurCollection);
    assert.strictEqual(27010, totalVisitorsPerYear);
  });

  it('should be able to calculate total revenue for one year', function(){
    let totalYearlyRevenue = park.totalYearlyRevenue(park);
    assert.strictEqual(431889.9, totalYearlyRevenue);
  });

});
