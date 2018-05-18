import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    document.getElementById("searchForm").addEventListener("submit", function(event){
      event.preventDefault()
    });
  }

  search() {
    var input =(<HTMLInputElement>document.getElementById("searchInput")).value
    console.log("query: " + input);

    this.api.getData()
      .subscribe(data => {
        console.log(data);
      });
  }

}
