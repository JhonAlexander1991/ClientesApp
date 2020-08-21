import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
})
export class AddcustomerPage implements OnInit {

  name_customer: string = "";
  nit_customer: string = "";
  email_customer: string="";
  birth_date: Date;
  created_at: Date;
  id: number;
  
  constructor(
  	private postPvdr: PostProvider,
  	private router: Router,
  	private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  	this.actRoute.params.subscribe((data: any) =>{
  		this.id = data.id;
  		this.name_customer = data.name;
  	    this.nit_customer = data.nit;
    	this.email_customer = data.email;
     	this.birth_date = data.birth_date; 
  		console.log(data);
  	});
  }

  createdProses(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'add',
  			name_customer : this.name_customer,
     	   	nit_customer : this.nit_customer,
        	email_customer: this.email_customer,
        	birth_date: this.birth_date,
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			this.router.navigate(['/customer']);
  			console.log('OK');
  		});
  	});

  }

  updateProses(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'update',
  			customer_id : this.id,
  			name_customer : this.name_customer,
			email_customer: this.email_customer,
  		    nit_customer : this.nit_customer,
			created_at: this.created_at,
            birth_date: this.birth_date,
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			this.router.navigate(['/customer']);
  			console.log('OK');
  		});
  	});

  }


}
