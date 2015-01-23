describe('Pirate Translater App', function(){
	it('Should have a title', function(){
		browser.get('http://127.0.0.1:8000');
		expect(browser.getTitle()).toEqual('Talk Like A Pirate');
	});
});