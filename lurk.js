let oldpage = page;
meowerConnection.onclose = () => { };
meowerConnection.close();
main();
meowerConnection.onopen = () => { };
page = oldpage;