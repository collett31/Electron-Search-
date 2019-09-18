function readTextFile(file)
{
    // var rawFile = new XMLHttpRequest();
    // rawFile.open("GET", file, false);
    // rawFile.onreadystatechange = function ()
    // {
    //     if(rawFile.readyState === 4)
    //     {
    //         if(rawFile.status === 200 || rawFile.status == 0)
    //         {
    //             var allText = rawFile.responseText;
    //             alert(allText);
    //         }
    //     }
    // }
    // rawFile.send(null);
}

//document.writereadTextFile('eric2000.txt');

document.getElementById('eric2000.txt').onchange = function(){

    var file = this.files[0];
  
    var reader = new FileReader();
    reader.onload = function(progressEvent){
      // Entire file
      console.log(this.result);
  
      // By lines
      var lines = this.result.split('\n');
      for(var line = 0; line < lines.length; line++){
        console.log(lines[line]);
      }
    };
    reader.readAsText(file);
  };
