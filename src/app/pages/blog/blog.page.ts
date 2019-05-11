import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  showBtn: boolean = false;
  deferredPrompt;

  constructor() { }

  ngOnInit() {
  }

  // ionViewWillEnter(){
  //   window.addEventListener('beforeinstallprompt', (e) => {
  //     // Prevent Chrome 67 and earlier from automatically showing the prompt
  //     e.preventDefault();
  //     // Stash the event so it can be triggered later on the button event.
  //     this.deferredPrompt = e;
       
  //   // Update UI by showing a button to notify the user they can add to home screen
  //     this.showBtn = true;
  //   });
     
  //   //button click event to show the promt
             
  //   window.addEventListener('appinstalled', (event) => {
  //    alert('installed');
  //   });
     
     
  //   if (window.matchMedia('(display-mode: standalone)').matches) {
  //     alert('display-mode is standalone');
  //   }
  // }
 
  // add_to_home(e){
  //   debugger
  //   // hide our user interface that shows our button
  //   // Show the prompt
  //   this.deferredPrompt.prompt();
  //   // Wait for the user to respond to the prompt
  //   this.deferredPrompt.userChoice
  //     .then((choiceResult) => {
  //       if (choiceResult.outcome === 'accepted') {
  //         alert('User accepted the prompt');
  //       } else {
  //         alert('User dismissed the prompt');
  //       }
  //       this.deferredPrompt = null;
  //     });
  // };
 

}
