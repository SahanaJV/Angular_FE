import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-exception-handler',
  templateUrl: './exception-handler.component.html',
  styleUrls: ['./exception-handler.component.css']
})
export class ExceptionHandlerComponent implements OnInit
{
  exceptionMessage!: string;

  constructor(private route:ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const response = window.history.state.response;
      if(response){
        this.exceptionMessage = response.message;
      }
    });
  }
  
  home() {
    this.router.navigate(['/login']);
  }
}
