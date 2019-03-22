import { Component } from '@angular/core';
import * as XLSX from 'xlsx'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  exceljsonobj;
  readeExcel(filee) {
    let myfile = document.getElementById("file");
    let input = myfile;
    let reader = new FileReader();
    reader.onload = name => {
      let fileData = reader.result;
      let workbook = XLSX.read(fileData, { type: "binary" });
      workbook.SheetNames.forEach(sheetname => {
        var rowobj = XLSX.utils.sheet_to_json(workbook.Sheets[sheetname]);
        this.exceljsonobj = rowobj;

        console.log(rowobj);
      });
    };

    reader.readAsBinaryString(filee.files[0]);
  }
}
