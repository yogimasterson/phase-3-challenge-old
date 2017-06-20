const chai = require('chai')
const expect = chai.expect
const db = require('./database')

describe('itemsInSection()', function() {
	it('should find the IDs and names of all grocery items in the given section', function(done) {
		db.itemsInSection('bulk', function(result) {
			expect(result.length).to.eql(3)
		})
        done()
	})
})

describe('cheapItems()', function() {
	it('should find the IDs and prices of all grocery items that cost less than $10.00, ordered from lowest to highest price', function(done) {
		db.cheapItems(), function(result) {
			expect(result.length).to.eql(25)
		}
		done()
	})
})

describe('countItemsInSection()', function() {
	it('should get the count of all grocery items in the given section', function(done) {
		db.countItemsInSection('packaged', function(result) {
			expect(result.length).to.eql(5)
		})
		done()
	})
})