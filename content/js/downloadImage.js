let downloadEl = document.getElementById("baixar-btn");

downloadEl.addEventListener('click', function(){
    let outEl = document.getElementById("area-out").value;
    var win = window.open('', '', 'height=800,width=800');
    win.document.write('<html><head>');
        win.document.write('<title>Traducao</title>');                              
        win.document.write('</head>');
        win.document.write('<body>');
        win.document.write(outEl);                         
        win.document.write('</body></html>');
        win.document.close(); 	                                         
        win.print();  

});