const Workshop = require('../workshop.model.js');
const expect = require('chai').expect;

describe('Workshop', () => {
  it('should throw an error if no "name" arg', () => {
    const work = new Workshop({}); 
  
    work.validate(err => {
      expect(err.errors.name).to.exist;
    });
  });

  it('should throw an error if no "concertId" arg', () => {
    const work = new Workshop({}); 
  
    work.validate(err => {
      expect(err.errors.name).to.exist;
    });
  });

  it('should throw an error if "name" is not a string', () => {
    const cases = [{}, []];
    for(let name of cases) {
      const work = new Workshop({name});

      work.validate(err => {
        expect(err.errors.name).to.exist;
      });
    }
  });
});

