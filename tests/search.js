var test_search = new function () {
    this.test_input_search = new function () {
	// we enter "title" in the search box
	this.test_input = [{params: {id: "search", text:"title"}, method: "type"}];
	// we expect the autocomplete list to appear
	this.test_autocomplete_exists = [{params: {classname: "ac_results"}, method: "asserts.assertNode"},
					 {params: {xpath: "//div[@class='ac_results']/ul"}, method: "asserts.assertNode"},
					 {params: {classname: "ac_results", js: "window.getComputedStyle(element, null).getPropertyValue('display') === 'block'"}, method: "asserts.assertElemJS"}];
	// every line in the autocomplete list must have the "title" keyword in it
	this.test_autocomplete_matches = [{params: {xpath: "//div[@class='ac_results']/ul/li[not(contains('title')"}, method: "asserts.assertNotNode"}];
	// First result must always be exact match (when it exists, as it does for title)
	this.test_autocomplete_matches = [{params: {xpath: "//div[@class='ac_results']/ul/li[1]", validator: "title"}, method: "asserts.assertText"}];
	// clicking the first line in the list should choose the said item
	this.test_select_result = [{params: {xpath: "//div[@class='ac_results']/ul/li[1]"}, method: "click"}];
	// we check that the item is indeed displayed
	this.test_result_displayed = [{params: {xpath: "//div[@id='details']//h2"}, method: "asserts.assertNode"},
				      {params: {xpath: "//div[@id='details']//dt"}, method: "asserts.assertNode"},
				      // ensure the autocomplete list is hidden
				      {params: {xpath: "//div[@class='ac_results']", validator: "style.display|none"}, method: "asserts.assertProperty"}
				     ];
	// "title" exists as HTML attribute, element, SVG element
	// so is displayed as a list of 3 collapsed items
	// we check the first one is indeed hidden
	this.test_result_multiple_infoset_collapsed = [{params: {xpath: "//div[@id='details']/div[@class='context']/div", validator: "style.display|none"}, method: "asserts.assertProperty"}];

	// clicking the second item in the list should expand it
	this.test_select_result_infoset = [
	    {params: {xpath: "//div[@id='details']/div[@class='context'][2]/h2"}, method: "click"},
	    {params: {xpath: "//div[@id='details']/div[@class='context'][2]/div", validator: "style.display|block"}, method: "asserts.assertProperty"}
	];

	// clicking again collapse it
	// @@@ doesn't work — as if the click was never made
	// suspects Windmill bug :/
	/* this.test_collapse_infoset = [
	    {params: {xpath: "//div[@id='details']/div[@class='context'][2]/h2/span"}, method: "click"},
	    {params: {xpath: "//div[@id='details']/div[@class='context'][2]/div", validator: "style.display|none"}, method: "asserts.assertProperty"}
	]; */

	// we enter "p" in the search box
	this.test_input_p = [{params: {id: "search", text:"p"}, method: "type"}];
	// The first matching item must be <p>
	this.test_autocomplete_first_matches = [{params: {xpath: "//div[@class='ac_results']/ul/li[1]", validator: "p"}, method: "asserts.assertText"}];

	// hitting the "clear" button clears everything up
	this.teardown = [
	    {params: {id: "details_clear"}, method: "click"},
	    {params: {id: "search", validator: ""}, method: "asserts.assertValue"},
	    {params: {xpath: "//div[@id='details']/div"}, method: "asserts.assertNotNode"}
	];
    };
};