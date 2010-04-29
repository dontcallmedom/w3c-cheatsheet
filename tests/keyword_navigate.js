var test_keyword_navigate = new function () {
    // we enter "div" in the search box
    this.test_input = [{params: {id: "search", text:"div"}, method: "type"},
		       {params: {classname: "ac_results"}, method: "waits.forElement"},
		       // tried selecting with "Enter" key, but not worky @@@
		       // {params: {id: "search", options:"\13,true,false,false,false,false"}, method: "keyPress"}
		       {params: {xpath: "//div[@class='ac_results']/ul/li[1]"}, method: "click"}
		      ];
    // there should be a link to the <label> element
    this.test_label_tag_link = [
	{params: {xpath:"//div[@id='details']/div[@class='context']//dd//a[.='label']"}, method: "asserts.assertNode"}
    ];
    this.test_load_label_view = [
	// click on <label> link
	{params: {xpath:"//div[@id='details']/div[@class='context']//dd//a[.='label']"}, method:"click"},
	// check that the hash of the URI is updated
	{params: {"js": "window.location.hash === '#inf,html,e,label'"}, method: "asserts.assertJS"},
	// ensure that we only have one infoset displayed
	// (even though label exists in two other infosets)
	{params: {xpath:"//div[@id='details']/div[@class='context'][2]"}, method: "asserts.assertNotNode"},
	// check that the title is updated
	{params: {xpath:"//div[@id='details']/div[@class='context']/h2", validator: "HTML Element label"}, method: "asserts.assertText"}
	// @@@ check back link is added
    ];

    this.teardown = new function () {
	this.test_empty_search = [
	    {params: {id: "details_clear"}, method: "click"},
	    {params: {id: "search", validator: ""}, method: "asserts.assertValue"}
	];
    };
};