import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'CrudDemo';
  StudentsData: any;
  ngOnInit() {

    this.StudentsData = [
      { "Id": "1", "Name": "carlos", "Country": "France", "Mobile": "9787654321" },
      { "Id": "2", "Name": "daniel", "Country": "Canada", "Mobile": "7654321890" },
      { "Id": "3", "Name": "Jose", "Country": "China", "Mobile": "2345617890" },
      { "Id": "4", "Name": "andrea", "Country": "America", "Mobile": "9876543210" },
      { "Id": "5", "Name": "Diana	", "Country": "Landon", "Mobile": "6789054321" },
    ]
    localStorage.setItem("datas", JSON.stringify(this.StudentsData));
  }
  displayStyle: any = "none"
  OpenPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  AddData(frmRegister: any) {
    this.StudentsData.push(frmRegister.form.value);
    localStorage.setItem("datas", JSON.stringify(this.StudentsData));
    frmRegister.reset();
    this.closePopup();
  }
  deleteStudent(Id: any) {
    var data: any = localStorage.getItem('datas');
    var data1: any = JSON.parse(data);
    localStorage.removeItem(data1);
  }
}