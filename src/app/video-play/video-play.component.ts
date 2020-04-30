import { Component, Input, OnInit} from '@angular/core';
import { HttpService, IVideo, IVideoData } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {SafeResourceUrl,DomSanitizer} from '@angular/platform-browser'


@Component({
  selector: 'app-video-play',
  templateUrl: './video-play.component.html',
  styleUrls: ['./video-play.component.css']
})
export class VideoPlayComponent implements OnInit{
    url : SafeResourceUrl;
    private path : string;
    private key : string;
    private upath : string;
    videos : IVideo[];
    video : IVideo;
    id : number;
    idString : string;
    constructor(private sanitizer: DomSanitizer, 
                private service : HttpService,
                private route: ActivatedRoute,
                private router: Router) {
                  this.path = this.route.snapshot.params['path'];     
    }

    ngOnInit(){
          this.path="https://www.youtube.com/embed/" + this.path;
          this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.path);
    }
                
 }
