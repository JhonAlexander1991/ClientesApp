import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from "../providers/post-provider";
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  anggota: any;
  username: string;

  term='';
  customers: any = [];
  list_to_show = this.customers;
  selected_index = -1;
  show_list = true;
  limit: number = 13; // LIMIT GET PERDATA
  start: number = 0;
  constructor(
  	private router: Router,
  	private postPvdr: PostProvider,
    private storage: Storage,
    public toastCtrl: ToastController
  ) { 
    
  }


  ngOnInit() {
    
  }



  initializeItems(){
 
  }




  ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.username = this.anggota.username;
      console.log(res);
    });

  	this.customers = [];
  	this.start = 0;
  	this.loadCustomer();
  }
  

  addCustomer(){
  	this.router.navigate(['/addcustomer']);
  }

  updateCustomer(id,name,email,nit,created,birth){
  	this.router.navigate(['/addcustomer/' + id + '/' + name + '/' + email + '/' + nit + '/' + created + '/' + birth]);
  }

  showCustomer(id,name,nit){
  	this.router.navigate(['/showcustomer/' + id + '/' + name + '/' + nit]);
  }

  doRefresh(event){
  	setTimeout(() =>{
  		this.ionViewWillEnter();
  		event.target.complete();
  	}, 500);
  }

  loadData(event:any){
  	this.start += this.limit;
  	setTimeout(() =>{
  	this.loadCustomer().then(()=>{
  		event.target.complete();
  	});
  	}, 500);
  }

  delCustomer(id){

  	let body = {
  			aksi : 'delete',
  			customer_id : id
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			this.ionViewWillEnter();
  		});

  }

  loadCustomer(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'getdata',
  			limit : this.limit,
  			start : this.start,
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			for(let customer of data.result){
  				this.customers.push(customer);
  			}
  			resolve(true);
  		});
  	});
  }

  async prosesLogout(){
    this.storage.clear();
    this.router.navigate(['/login']);
    const toast = await this.toastCtrl.create({
        message: 'logout succesful',
        duration: 3000
      });
    toast.present();
  }

}


