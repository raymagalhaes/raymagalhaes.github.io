// ei, você, curioso, pare ai mesmo! não leia este código!
let reader = new FileReader();
document.querySelectorAll(".configInput")[0].onchange = function() {
   let configFile = this.files[0];
   reader.onload = function() {
      let lines = this.result.split("\n");
      let notcfile = true;
      for (var i = 0; i < lines.length; i++) {
         if (
            lines[i].includes("TEXTUREGROUP_") &&
            !lines[i].includes("TEXTUREGROUP_UIStreamable") &&
            !lines[i].includes("TEXTUREGROUP_Effects=") &&
            !lines[i].includes("TEXTUREGROUP_TitleScreenPreview")
         ) {
            let batatada = lines[i].replace(/[1-9]\d*/g, "1");
            lines[i] = batatada;
            notcfile = false;
         }
         if (lines[i].includes("[SystemSettingsBucket1]")) {
            break;
         }
      }
      if (notcfile) {
         alert("Esse não é um arquivo de configuração válido!");
      } else {
         //Monta novo arquivo
         for (var i = 0; i < configFile.length; i++) {
            array[i]
         }
         let newConfigFile = lines.join("\n");
         download(configFile.name, newConfigFile);
      }
   }
   reader.readAsText(configFile);
}
// essa função faz o download do arquivo sem processamento back-end
function download(filename, text) {
   var element = document.createElement('a');
   element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
   element.setAttribute('download', filename);
   element.style.display = 'none';
   document.body.appendChild(element);
   element.click();
   document.body.removeChild(element);
}
//era brincadeira, pode ler a vontade