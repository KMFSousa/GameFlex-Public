import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';  
import { catchError, map } from 'rxjs/operators';  
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-deck-editor',
  templateUrl: './deck-editor.component.html',
  styleUrls: ['./deck-editor.component.scss']
})
export class DeckEditorComponent implements OnInit {
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef; files = []
  constructor(private fileService: FileService) { }

  uploadFile(file) {  
    const formData = new FormData();  
    formData.append('file', file.data);

    //Using the "new" fileService
    //this.fileService.upload(file.data.name, formData)
    

    file.inProgress = true;
    console.log("uploading now")  
    this.fileService.upload(file.data, formData).pipe(  
      // map(event => {  
      //   switch (event.type) {  
      //     case HttpEventType.UploadProgress:  
      //       file.progress = Math.round(event.loaded * 100 / event.total);  
      //       break;  
      //     case HttpEventType.Response:  
      //       return event;  
      //   }  
      // }),  
      catchError((error: HttpErrorResponse) => {  
        file.inProgress = false;  
        return of(`${file.data.name} upload failed.`);  
      })).subscribe((event: any) => {  
        if (typeof (event) === 'object') {  
          console.log(event.body);  
        }  
      });  
  }

  private uploadFiles() { 
    console.log(this.files); 
    this.fileUpload.nativeElement.value = '';  
    this.files.forEach(file => {  
      this.uploadFile(file);  
    });
    this.files = []; 
}

  onClick() {  
    const fileUpload = this.fileUpload.nativeElement;fileUpload.onchange = () => {  
    for (let index = 0; index < fileUpload.files.length; index++)  
    {  
    const file = fileUpload.files[index];  
    this.files.push({ data: file, inProgress: false, progress: 0});
    }  
      this.uploadFiles();  
    };  
    fileUpload.click();  
  }

  ngOnInit(): void {
  }

}
