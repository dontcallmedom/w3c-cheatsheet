var test_load = new function () {
    this.setup = new function () {
	this.test_hasLoaded =
                    [{params: {id: "autocomplete"}, method: "waits.forElement"}];
    };

    // check that the correct tabs are displayed (and only one of them)
    this.test_correct_tabs = [
	{params: {id: "autocomplete", js: "window.getComputedStyle(element, null).getPropertyValue('display') === 'block'"}, method: "asserts.assertElemJS"},
	{params: {id: "mwbp", js: "window.getComputedStyle(element, null).getPropertyValue('display') === 'none'"}, method: "asserts.assertElemJS"}
    ];
};