const chai = require('chai').expect
const expect = require('expect.js')
const db = require('./database')

it('should find the IDs and names of all grocery items in the given section', function(done) {
    db.itemsInSection("bulk") 
    .then(function(result){
        expect(result.length).to.eql(3)
        done()
    })
})