import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import videojs from 'video.js';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagina4-component',
  imports: [RouterLink],
  templateUrl: './pagina4-component.html',
  styleUrl: './pagina4-component.css',
  encapsulation: ViewEncapsulation.None
})

export class Pagina4Component implements OnInit, OnDestroy {
  titlePagina4 = 'PÁGINA 4'  
  @ViewChild('target', {static: true}) target: ElementRef | undefined;

  readonly baseUrl = 'https://simplecloudservlet.github.io/repositoriomuseu/assets';

  // See options: https://videojs.com/guides/options
  @Input() options: {
    fluid: boolean;
    aspectRatio: string;
    autoplay: boolean;
    sources: {
      src: string;
      type: string;
    }[];
  } | undefined;

  player: any;

  constructor(private route: ActivatedRoute,
    private elementRef: ElementRef,
  ) {}

  // Instantiate a Video.js player OnInit
  ngOnInit() {
    this.player = videojs(this.target?.nativeElement, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
  }

  // Dispose the player OnDestroy
  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}
