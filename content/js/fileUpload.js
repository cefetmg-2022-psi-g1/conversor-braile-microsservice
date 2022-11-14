document.getElementById('upload')
            .addEventListener('change', function() {
              
            var fr = new FileReader();
            fr.onload = function(){
                document.getElementById('area-in').value = fr.result;
                document.getElementById('botaoSubmit').click();
            }
              
            fr.readAsText(this.files[0]);
        })