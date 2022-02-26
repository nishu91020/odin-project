const myURL = new URL('https://example.org/abc?123');
myURL.search = 'abc=xyz';
console.log(myURL.searchParams.get('abc'));
