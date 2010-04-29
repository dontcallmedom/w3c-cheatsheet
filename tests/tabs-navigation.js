var test_tabs_navigation = new function () {
    // check that the correct tabs are displayed (and only one of them)
    this.test_correct_tabs = [
        {params: {id: "autocomplete", js: "window.getComputedStyle(element, null).getPropertyValue('display') === 'block'"}, method: "asserts.assertElemJS"},
        {params: {id: "mwbp", js: "window.getComputedStyle(element, null).getPropertyValue('display') === 'none'"}, method: "asserts.assertElemJS"}
    ];

    // testing that auto-complete list gets hidden on tab change
    // first entering a word in search box
    // and checking auto-complete list gets displayed
    this.test_search_input = [
        {params: {id: "search", text: "df"}, method: "type"}
    ];

    this.test_autocomplete = [
        {params: {classname: "ac_results", js: "window.getComputedStyle(element, null).getPropertyValue('display') === 'block'"}, method: "asserts.assertElemJS"}
    ];

    this.test_switchtab = [
        {params: {xpath: "//div[@id='content']/ul[1]/li[2]/a"}, method: "click"},
        {params: {id: "autocomplete", js: "window.getComputedStyle(element, null).getPropertyValue('display') === 'none'"}, method: "asserts.assertElemJS"},
        {params: {id: "mwbp", js: "window.getComputedStyle(element, null).getPropertyValue('display') === 'block'"}, method: "asserts.assertElemJS"},
        {params: {classname: "ac_results", js: "window.getComputedStyle(element, null).getPropertyValue('display') === 'none'"}, method: "asserts.assertElemJS"}
    ];

    // getting back on search tab
    this.teardown = new function () {
        this.test_first_tab = [
            {params: {xpath: "//div[@id='content']/ul[1]/li[1]/a"}, method: "click"},
            {params: {id: "autocomplete", js: "window.getComputedStyle(element, null).getPropertyValue('display') === 'block'"}, method: "asserts.assertElemJS"}
        ];
    };
};